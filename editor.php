<?php
/**
 * season editor (single-file) — PHP 5.6+ / 7.x compatible
 * Reads season_1.txt (JSON array), renders table, edit/add/delete/move with AJAX save.
 */

if (!headers_sent()) {
    header('X-Content-Type-Options: nosniff');
}

$FILE = __DIR__ . '/season_1.txt';

function load_data($file) {
    if (!file_exists($file)) return array();
    $raw = file_get_contents($file);
    if ($raw === false) return array();
    $raw = trim($raw);

    // если в начале "JSON " — срежем до '['
    $pos = strpos($raw, '[');
    if ($pos !== false && $pos > 0) $raw = substr($raw, $pos);

    $data = json_decode($raw, true);
    if (!is_array($data)) return array();
    return $data;
}

function save_data($file, $data) {
    $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($json === false) return false;

    $fp = fopen($file, 'c+');
    if (!$fp) return false;

    if (!flock($fp, LOCK_EX)) {
        fclose($fp);
        return false;
    }

    ftruncate($fp, 0);
    rewind($fp);
    $ok = (fwrite($fp, $json) !== false);
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);

    return $ok;
}

function normalize_item($it) {
    if (!is_array($it)) $it = array();

    $defaults = array(
        'qid'=>0,'season'=>1,'level'=>1,'sort'=>0,'node'=>0,
        'question'=>'','answers'=>array(),'correct'=>0,
        'desc'=>'','aftertext'=>'','clue'=>'','image'=>'',
        'admintips'=>'','qname'=>'System',
    );
    $it = array_merge($defaults, $it);

    $it['qid'] = (int)$it['qid'];
    $it['season'] = (int)$it['season'];
    $it['level'] = (int)$it['level'];
    $it['sort'] = (int)$it['sort'];
    $it['node'] = (int)$it['node'];
    $it['question'] = (string)$it['question'];

    if (!is_array($it['answers'])) $it['answers'] = array();
    $ans = array();
    foreach ($it['answers'] as $a) $ans[] = (string)$a;
    $it['answers'] = array_values(array_slice($ans, 0, 6));

    $it['correct'] = is_numeric($it['correct']) ? (int)$it['correct'] : 0;

    $keys = array('desc','aftertext','clue','image','admintips','qname');
    foreach ($keys as $k) $it[$k] = (string)$it[$k];

    return $it;
}

function sort_data(&$data) {
    usort($data, function($a, $b) {
        $a = normalize_item($a);
        $b = normalize_item($b);

        if ($a['level'] != $b['level']) return ($a['level'] < $b['level']) ? -1 : 1;
        if ($a['sort']  != $b['sort'])  return ($a['sort']  < $b['sort'])  ? -1 : 1;
        if ($a['qid']   != $b['qid'])   return ($a['qid']   < $b['qid'])   ? -1 : 1;
        return 0;
    });
}

function find_index_by_qid($data, $qid) {
    $qid = (int)$qid;
    foreach ($data as $i => $it) {
        $it = normalize_item($it);
        if ((int)$it['qid'] === $qid) return (int)$i;
    }
    return -1;
}

function json_response($payload, $code) {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/* =========================
   AJAX API
   ========================= */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = isset($_POST['action']) ? $_POST['action'] : '';

    $data = load_data($FILE);
    $norm = array();
    foreach ($data as $x) $norm[] = normalize_item($x);
    $data = array_values($norm);

    if ($action === 'delete') {
        $qid = (int)(isset($_POST['qid']) ? $_POST['qid'] : 0);
        $idx = find_index_by_qid($data, $qid);
        if ($idx < 0) json_response(array('ok'=>false,'error'=>'QID not found'), 404);

        array_splice($data, $idx, 1);
        sort_data($data);

        $ok = save_data($FILE, $data);
        json_response(array('ok'=>$ok, 'count'=>count($data)), 200);
    }

    if ($action === 'move') {
        $qid = (int)(isset($_POST['qid']) ? $_POST['qid'] : 0);
        $dir = (isset($_POST['dir']) && $_POST['dir'] === 'up') ? 'up' : 'down';

        sort_data($data);
        $idx = find_index_by_qid($data, $qid);
        if ($idx < 0) json_response(array('ok'=>false,'error'=>'QID not found'), 404);

        $level = (int)$data[$idx]['level'];

        $swapIdx = -1;
        if ($dir === 'up') {
            for ($i = $idx - 1; $i >= 0; $i--) {
                if ((int)$data[$i]['level'] === $level) { $swapIdx = $i; break; }
            }
        } else {
            for ($i = $idx + 1; $i < count($data); $i++) {
                if ((int)$data[$i]['level'] === $level) { $swapIdx = $i; break; }
            }
        }

        if ($swapIdx === -1) {
            json_response(array('ok'=>true, 'note'=>'No neighbor in same level', 'count'=>count($data)), 200);
        }

        $tmpSort = $data[$idx]['sort'];
        $data[$idx]['sort'] = $data[$swapIdx]['sort'];
        $data[$swapIdx]['sort'] = $tmpSort;

        if ($data[$idx]['sort'] === $data[$swapIdx]['sort']) {
            $data[$idx]['sort'] += ($dir === 'up' ? -1 : 1);
        }

        sort_data($data);
        $ok = save_data($FILE, $data);
        json_response(array('ok'=>$ok, 'count'=>count($data)), 200);
    }

    if ($action === 'update') {
        $payloadRaw = isset($_POST['payload']) ? $_POST['payload'] : '';
        $payload = json_decode($payloadRaw, true);
        if (!is_array($payload)) json_response(array('ok'=>false,'error'=>'Bad payload JSON'), 400);

        $payload = normalize_item($payload);
        $qid = (int)$payload['qid'];
        if ($qid <= 0) json_response(array('ok'=>false,'error'=>'qid must be > 0'), 400);

        $idx = find_index_by_qid($data, $qid);
        if ($idx < 0) $data[] = $payload;
        else $data[$idx] = $payload;

        sort_data($data);
        $ok = save_data($FILE, $data);
        json_response(array('ok'=>$ok, 'count'=>count($data)), 200);
    }

    if ($action === 'reload') {
        sort_data($data);
        json_response(array('ok'=>true, 'data'=>$data, 'count'=>count($data)), 200);
    }

    json_response(array('ok'=>false,'error'=>'Unknown action'), 400);
}

/* =========================
   PAGE
   ========================= */
$data = load_data($FILE);
$norm = array();
foreach ($data as $x) $norm[] = normalize_item($x);
$data = array_values($norm);
sort_data($data);

function h($s){ return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
?>
<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Season editor: season_1.txt</title>
<style>
    body{font-size:14px; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;margin:16px}
    .bar{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:12px}
    .muted{opacity:.7}
    table{border-collapse:collapse;width:100%}
    th,td{border:1px solid #ddd;padding:2px;vertical-align:top}
    th{position:sticky;top:0;background:#fafafa;z-index:1}
    .q{cursor:pointer;text-decoration:underline}
    button{cursor:pointer}
    .btn{padding:2px 8px}
    .btnDanger{padding:2px 10px}
    .ans{min-width:140px;max-width:280px}
    .level{width:72px;text-align:center}
    .actions{white-space:nowrap;width:140px;text-align:center}
    dialog{width:min(900px,96vw);border:1px solid #bbb;border-radius:10px}
    dialog::backdrop{background:rgba(0,0,0,.35)}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
    label{display:block;font-size:12px;margin-bottom:4px;opacity:.8}
    input,textarea{width:100%;box-sizing:border-box;padding:8px;border:1px solid #ccc;border-radius:6px;font:inherit}
    textarea{min-height:70px;resize:vertical}
    .row{display:flex;gap:10px;justify-content:flex-end;margin-top:12px}
    .notice{margin-left:auto}
    .small{font-size:12px}
	.Hideme{display:none;}
	#tbl tbody tr:nth-child(3n+1) {background-color: #e8e8e8;}
	#tbl tbody tr:hover {background-color: #e9f2ff !important;}
</style>
</head>
<body>

<div class="bar">
    <strong>Редактор:</strong> <span class="muted"><?php echo h(basename($FILE)); ?></span>
    <button class="btn" onclick="newQuestion()">ДОБАВИТЬ ВОПРОС</button>
    <span class="notice small" id="status"></span>
    <button class="btn" onclick="reloadData()">Обновить</button>
</div>

<table id="tbl">
    <thead>
        <tr>
            <th class="level">LV</th>
            <th>Вопрос</th>
            <th class="ans">1</th>
            <th class="ans">2</th>
            <th class="ans">3</th>
            <th class="ans">4</th>
            <th class="ans">5</th>
            <th class="ans">6</th>
            <th class="actions"></th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<dialog id="dlg">
    <form method="dialog" onsubmit="return false;">
        <h3 style="margin:0 0 8px 0">Редактирование вопроса</h3>

        <div class="grid3">
            <div class="Hideme"><label>qid</label><input id="f_qid" type="number" min="1" step="1"></div>
            <div>
                <label>season</label>
                <input id="f_season" type="number" step="1">
            </div>
            <div>
                <label>qname</label>
                <input id="f_qname" type="text">
            </div>
        </div>

        <div class="grid3" style="margin-top:10px">
            <div><label>level</label><input id="f_level" type="number" step="1"></div>
            <div><label>sort</label><input id="f_sort" type="number" step="1"></div>
            <div><label>node</label><input id="f_node" type="number" step="1"></div>
        </div>

        <div style="margin-top:10px">
            <label>question</label>
            <textarea id="f_question"></textarea>
        </div>

        <div class="grid" style="margin-top:10px">
            <div><label>correct</label><input id="f_correct" type="number" step="1"></div>
            <div><label>image</label><input id="f_image" type="text"></div>
        </div>

        <div class="grid" style="margin-top:10px">
            <div><label>desc</label><textarea id="f_desc"></textarea></div>
            <div><label>clue</label><textarea id="f_clue"></textarea></div>
        </div>

        <div class="grid" style="margin-top:10px">
            <div><label>aftertext</label><textarea id="f_aftertext"></textarea></div>
            <div><label>admintips</label><textarea id="f_admintips"></textarea></div>
        </div>

        <h4 style="margin:12px 0 6px 0">Ответы</h4>
        <div class="grid3">
            <div><label>answer 1</label><input id="a1" type="text"></div>
            <div><label>answer 2</label><input id="a2" type="text"></div>
            <div><label>answer 3</label><input id="a3" type="text"></div>
            <div><label>answer 4</label><input id="a4" type="text"></div>
            <div><label>answer 5</label><input id="a5" type="text"></div>
            <div><label>answer 6</label><input id="a6" type="text"></div>
        </div>

        <div class="row">
            <button class="btn" onclick="closeDlg()">Отмена</button>
            <button class="btn" onclick="saveDlg()">Сохранить</button>
        </div>
    </form>
</dialog>

<script>
var DATA = <?php echo json_encode($data, JSON_UNESCAPED_UNICODE); ?>;

var statusEl = document.getElementById('status');
function setStatus(msg, ok){
    if (ok === undefined) ok = true;
    statusEl.textContent = msg;
    statusEl.style.color = ok ? '' : 'crimson';
}

function F(id){ return document.getElementById(id); }

async function api(action, params) {
    if (!params) params = {};
    var fd = new FormData();
    fd.append('action', action);
    for (var k in params) fd.append(k, params[k]);

    var r = await fetch(location.href, { method:'POST', body: fd });
    var t = await r.text();
    var j;
    try { j = JSON.parse(t); }
    catch (e) { throw new Error('Server returned non-JSON: ' + t.slice(0,200)); }
    if (!r.ok || !j.ok) throw new Error(j.error || ('HTTP ' + r.status));
    return j;
}

function getNextQid(){
    var max = 0;
    for (var i=0;i<DATA.length;i++){
        var q = Number(DATA[i].qid) || 0;
        if (q > max) max = q;
    }
    return max + 1;
}

function createTdText(text){
    var td = document.createElement('td');
    td.textContent = text || '';
    return td;
}

function renderTable() {
    var tbody = document.querySelector('#tbl tbody');
    tbody.innerHTML = '';

    for (var i=0;i<DATA.length;i++){
        var it = DATA[i];
        var answers = Array.isArray(it.answers) ? it.answers.slice(0,6) : [];
        while (answers.length < 6) answers.push('');

        var tr = document.createElement('tr');
        tr.dataset.qid = it.qid;

        var tdLevel = document.createElement('td');
        tdLevel.className = 'level';
        tdLevel.textContent = String(Number(it.level)||0);
        tr.appendChild(tdLevel);

        var tdQ = document.createElement('td');

        var qDiv = document.createElement('div');
        qDiv.className = 'q';
        qDiv.textContent = it.question || '';
        (function(qid){
            qDiv.addEventListener('click', function(){ openEditor(qid); });
        })(it.qid);
        tdQ.appendChild(qDiv);

        var meta = document.createElement('div');
        meta.className = 'small muted';
		meta.textContent = '';
       // meta.textContent = 'qid: ' + (Number(it.qid)||0) +' · sort: ' + (Number(it.sort)||0) +' · node: ' + (Number(it.node)||0) +' · season: ' + (Number(it.season)||0);
        tdQ.appendChild(meta);

        tr.appendChild(tdQ);

        tr.appendChild(createTdText(answers[0]));
        tr.appendChild(createTdText(answers[1]));
        tr.appendChild(createTdText(answers[2]));
        tr.appendChild(createTdText(answers[3]));
        tr.appendChild(createTdText(answers[4]));
        tr.appendChild(createTdText(answers[5]));

        var tdA = document.createElement('td');
        tdA.className = 'actions';

        var btnUp = document.createElement('button');
        btnUp.className = 'btn';
        btnUp.title = 'Вверх';
        btnUp.type = 'button';
        btnUp.textContent = '↑';
        (function(qid){
            btnUp.addEventListener('click', function(){ moveRow(qid,'up'); });
        })(it.qid);

        var btnDown = document.createElement('button');
        btnDown.className = 'btn';
        btnDown.title = 'Вниз';
        btnDown.type = 'button';
        btnDown.textContent = '↓';
        (function(qid){
            btnDown.addEventListener('click', function(){ moveRow(qid,'down'); });
        })(it.qid);

        var btnDel = document.createElement('button');
        btnDel.className = 'btnDanger';
        btnDel.title = 'Удалить';
        btnDel.type = 'button';
        btnDel.textContent = '🗑';
        (function(qid){
            btnDel.addEventListener('click', function(){ deleteRow(qid); });
        })(it.qid);

        tdA.appendChild(btnUp);
        tdA.appendChild(btnDown);
        tdA.appendChild(btnDel);

        tr.appendChild(tdA);
        tbody.appendChild(tr);
    }
}

async function reloadData() {
    try {
        setStatus('Обновляю…');
        var j = await api('reload');
        DATA = j.data;
        renderTable();
        setStatus('Готово. Записей: ' + j.count);
    } catch (e) {
        setStatus('Ошибка: ' + e.message, false);
    }
}

async function deleteRow(qid) {
    if (!confirm('Удалить вопрос qid=' + qid + '?')) return;
    try {
        setStatus('Удаляю…');
        await api('delete', { qid: qid });
        await reloadData();
        setStatus('Удалено');
    } catch (e) {
        setStatus('Ошибка: ' + e.message, false);
    }
}

async function moveRow(qid, dir) {
    try {
        setStatus('Сортирую…');
        await api('move', { qid: qid, dir: dir });
        await reloadData();
        setStatus('Ок');
    } catch (e) {
        setStatus('Ошибка: ' + e.message, false);
    }
}

// ===== modal editor =====
var dlg = document.getElementById('dlg');
var isNew = false;

function fillForm(it){
    F('f_qid').value = it.qid || '';
    F('f_season').value = (it.season != null ? it.season : 1);
    F('f_level').value = (it.level != null ? it.level : 1);
    F('f_sort').value = (it.sort != null ? it.sort : 0);
    F('f_node').value = (it.node != null ? it.node : 0);

    F('f_question').value = it.question || '';
    F('f_correct').value = (it.correct != null ? it.correct : 0);

    F('f_desc').value = it.desc || '';
    F('f_aftertext').value = it.aftertext || '';
    F('f_clue').value = it.clue || '';
    F('f_image').value = it.image || '';
    F('f_admintips').value = it.admintips || '';
    F('f_qname').value = it.qname || 'System';

    var ans = Array.isArray(it.answers) ? it.answers : [];
    F('a1').value = ans[0] || '';
    F('a2').value = ans[1] || '';
    F('a3').value = ans[2] || '';
    F('a4').value = ans[3] || '';
    F('a5').value = ans[4] || '';
    F('a6').value = ans[5] || '';
}

function openEditor(qid) {
    var it = null;
    for (var i=0;i<DATA.length;i++){
        if (Number(DATA[i].qid) === Number(qid)) { it = DATA[i]; break; }
    }
    if (!it) { alert('Не найден qid=' + qid); return; }

    isNew = false;
    F('f_qid').readOnly = true;
    fillForm(it);
    dlg.showModal();
}

function newQuestion(){
    isNew = true;
    F('f_qid').readOnly = false;

    var it = {
        qid: getNextQid(),
        season: 1,
        level: 1,
        sort: 0,
        node: 0,
        question: '',
        answers: [],
        correct: 0,
        desc: '',
        aftertext: '',
        clue: '',
        image: '',
        admintips: '',
        qname: 'System'
    };
    fillForm(it);
    dlg.showModal();
    setTimeout(function(){ F('f_question').focus(); }, 0);
}

function closeDlg() { dlg.close(); }

async function saveDlg() {
    var qid = Number(F('f_qid').value || 0);
    if (!qid || qid < 1) { alert('qid должен быть > 0'); return; }

    if (isNew) {
        for (var i=0;i<DATA.length;i++){
            if (Number(DATA[i].qid) === qid) { alert('Такой qid уже существует: ' + qid); return; }
        }
    }

    var raw = [F('a1').value, F('a2').value, F('a3').value, F('a4').value, F('a5').value, F('a6').value];
    var cleaned = [];
    for (var i=0;i<raw.length;i++){
        var s = String(raw[i] || '').trim();
        if (s.length) cleaned.push(s);
    }

    var payload = {
        qid: qid,
        season: Number(F('f_season').value || 1),
        level: Number(F('f_level').value || 1),
        sort: Number(F('f_sort').value || 0),
        node: Number(F('f_node').value || 0),
        question: F('f_question').value || '',
        answers: cleaned,
        correct: Number(F('f_correct').value || 0),
        desc: F('f_desc').value || '',
        aftertext: F('f_aftertext').value || '',
        clue: F('f_clue').value || '',
        image: F('f_image').value || '',
        admintips: F('f_admintips').value || '',
        qname: F('f_qname').value || 'System'
    };

    try {
        setStatus('Сохраняю…');
        await api('update', { payload: JSON.stringify(payload) });
        dlg.close();
        await reloadData();
        setStatus('Сохранено');
    } catch (e) {
        setStatus('Ошибка: ' + e.message, false);
    }
}

renderTable();
setStatus('Готово. Записей: ' + DATA.length);
</script>

</body>
</html>

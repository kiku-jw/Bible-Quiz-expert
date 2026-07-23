
const AUDIO_URLS = {
  menu: 'sound/menu.mp3',
  level1: 'sound/level1.mp3',
  level2: 'sound/level2.mp3',
  level3: 'sound/level3.mp3',
  level4: 'sound/level4.mp3',
  level5: 'sound/level5.mp3',
  level6: 'sound/level6.mp3',
  win1: 'sound/win1.mp3',
  win2: 'sound/win2.mp3',
  win3: 'sound/win3.mp3',
  win4: 'sound/win4.mp3',
  win5: 'sound/win5.mp3',
  win6: 'sound/win6.mp3',
  lose: 'sound/lose.mp3',
  half: 'sound/half.mp3',
  clue: 'sound/clue.mp3',
  ask: 'sound/ask.mp3',
  selected: 'sound/selected.mp3',
  paused: 'sound/paused.mp3'
};

const ICONS = {
  music: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  musicOff: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3.153A3 3 0 0 1 18 16c0 .4-.07.783-.2 1.146"/><circle cx="6" cy="18" r="3"/><path d="M9 5l12-2v3"/></svg>`,
  volumeLow: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>`,
  volumeMed: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  volumeHigh: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  mic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>`,
  half: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  pause: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
  pauseBig: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>`,
  list: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  target: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
};

const MOCK_SEASON_1 = [
  { qid: 1, season: 1, level: 1, sort: 10, node: 0, question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2, desc: "A geography question.", aftertext: "Paris is known as the City of Light.", clue: "Home to the Eiffel Tower.", qname: "System" },
  { qid: 2, season: 1, level: 1, sort: 20, node: 0, question: "Symbol 'O'?", answers: ["Gold", "Oxygen", "Osmium", "Oil"], correct: 1, desc: "Chemistry.", aftertext: "Essential for breathing.", clue: "It is in the air.", qname: "System" },
  { qid: 3, season: 1, level: 2, sort: 30, node: 0, question: "Who wrote Romeo & Juliet?", answers: ["Dickens", "Shakespeare", "Austen", "Twain"], correct: 1, desc: "Literature.", aftertext: "16th Century.", clue: "Bard of Avon.", qname: "System" }
];

const TIMER_OPTIONS = [30, 45, 60, 75, 90, 105, 120, 135, 150];

// --- Global State ---

const state = {
	timerHidden: false,
  phase: 'SETUP',
  questions: [],
  seasonId: 1,
  players: [],
  currentPlayerIndex: 0,
  currentQuestionIndex: 0,
  newPlayerName: '',

  settings: {
    musicEnabled: false,
    musicVolume: 0.5,
    timerDuration: 120
  },

  targetGoal: 60,

  // Game Play State
  shuffledAnswers: [],
  hiddenAnswers: [],
  selectedAnswer: null, // index in shuffled array
  isAnswerFinal: false,
  showResult: false,
  clueVisible: null,
  timeLeft: 120,
  isPaused: false,

  // UI State
  isEditorOpen: false,
  isJumpMenuOpen: false,
  isMenuVisible: true,
  askBlinking: false,

  // Internal Refs
  timers: {
    game: null,
    ask: null,
    menu: null,
    musicResume: null,
    sfxDelay: null,
    resultDelay: null
  },

  audio: {
    bgm: null,
    currentTrack: null,
    selected: null,
    paused: null,
    activeSfx: new Set()
  }
};

// --- Audio Manager ---

const AudioController = {
  stopMusic(fade = false) {
    if (state.timers.musicResume) {
      clearTimeout(state.timers.musicResume);
      state.timers.musicResume = null;
    }

    const sound = state.audio.bgm;
    if (sound) {
      if (fade && sound.playing && sound.playing()) {
        sound.fade(sound.volume(), 0, 500);
        setTimeout(() => {
          if (state.audio.bgm === sound) {
            sound.stop();
            sound.unload();
          }
        }, 500);
      } else {
        sound.stop();
        sound.unload();
      }
      state.audio.bgm = null;
      state.audio.currentTrack = null;
    }

    if (state.audio.selected) {
      state.audio.selected.stop();
      state.audio.selected.unload();
      state.audio.selected = null;
    }
  },

  playMusic(level) {
    if (!state.settings.musicEnabled) {
      this.stopMusic();
      return;
    }

    if (typeof Howl === 'undefined') return;

    let src = '';
    let loop = false;

    if (level === 0) {
      src = AUDIO_URLS.menu;
      loop = true;
    } else {
      const safeLevel = Math.max(1, Math.min(level, 6));
      src = AUDIO_URLS[`level${safeLevel}`];
    }

    if (state.audio.currentTrack === src && state.audio.bgm?.playing && state.audio.bgm.playing()) {
      state.audio.bgm.volume(state.settings.musicVolume);
      return;
    }

    if (state.audio.bgm) {
      state.audio.bgm.stop();
      state.audio.bgm.unload();
    }

    try {
      const sound = new Howl({
        src: [src],
        html5: true,
        loop: loop,
        volume: state.settings.musicVolume
      });
      sound.play();
      state.audio.bgm = sound;
      state.audio.currentTrack = src;
    } catch (e) {}
  },

  playSelected() {
    if (typeof Howl === 'undefined') return;
    if (state.audio.selected) {
      state.audio.selected.stop();
      state.audio.selected.unload();
    }
    const sound = new Howl({
      src: [AUDIO_URLS.selected],
      html5: true,
      volume: 1.0,
      onend: function () { this.unload(); }
    });
    sound.play();
    state.audio.selected = sound;
  },

  playSfx(type, level = 1) {
    if (typeof Howl === 'undefined') return;
    let src = '';
    if (type === 'wrong') src = AUDIO_URLS.lose;
    else if (type === 'correct') src = AUDIO_URLS[`win${Math.max(1, Math.min(level, 6))}`];
    else if (type === 'half') src = AUDIO_URLS.half;
    else if (type === 'clue') src = AUDIO_URLS.clue;
    else if (type === 'ask') src = AUDIO_URLS.ask;

    if (!src) return;

    const sound = new Howl({
      src: [src],
      html5: true,
      volume: 1.0,
      onend: function () {
        state.audio.activeSfx.delete(this);
        this.unload();
      }
    });
    state.audio.activeSfx.add(sound);
    sound.play();
  },

  stopAllSfx() {
    state.audio.activeSfx.forEach(s => {
      s.stop();
      s.unload();
    });
    state.audio.activeSfx.clear();
    if (state.audio.selected) {
      state.audio.selected.stop();
      state.audio.selected.unload();
      state.audio.selected = null;
    }
  },

  updateVolume() {
    if (state.audio.bgm) state.audio.bgm.volume(state.settings.musicVolume);
    if (state.audio.paused) state.audio.paused.volume(state.settings.musicVolume);
  },

  togglePauseAudio(isPaused) {
    if (isPaused) {
      this.stopMusic(false);
      if (state.settings.musicEnabled && typeof Howl !== 'undefined') {
        const sound = new Howl({
          src: [AUDIO_URLS.paused],
          html5: true,
          loop: true,
          volume: state.settings.musicVolume
        });
        sound.play();
        state.audio.paused = sound;
      }
    } else {
      if (state.audio.paused) {
        state.audio.paused.stop();
        state.audio.paused.unload();
        state.audio.paused = null;
      }
    }
  }
};

function escapeHtml(s){
  s = (s ?? '') + '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
          .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}


// --- Render ---

const app = document.getElementById('app');

/**
 * ВАЖНО:
 * - Полный render() делаем только при событиях (клик, переход вопроса, и т.д.)
 * - На тике таймера НЕ делаем render(), чтобы не мигало и не закрывались селекты.
 */
function updateTimerUI() {
  const num = document.querySelector('.timer .num');
  if (num) num.textContent = String(state.timeLeft);

  const timerBox = document.querySelector('.timer');
  if (timerBox) {
    if (state.timeLeft <= 10) timerBox.classList.add('danger');
    else timerBox.classList.remove('danger');
  }
}

function renderHeader() {
  const isSetup = state.phase === 'SETUP';
  const showJumper = !isSetup && state.questions && state.questions.length > 0;

  const seasonsHtml = [1, 2, 3].map(id => `
    <button onclick="loadSeason(${id})" class="btn-xs ${state.seasonId === id ? 'active' : ''}">${id}</button>
  `).join('');

  const timerOptsHtml = TIMER_OPTIONS.map(t =>
    `<option value="${t}" ${state.settings.timerDuration === t ? 'selected' : ''}>${Math.floor(t / 60)}m ${t % 60}s</option>`
  ).join('');

  let jumpMenuHtml = '';
	if (showJumper) {
	  const items = state.questions.map((q, i) => `
		<button type="button" class="jump-item ${i === state.currentQuestionIndex ? 'active' : ''}"
		  onclick="jumpToQuestion(${i})">
		  <span class="jump-n">${i + 1}.</span>
		  <span class="jump-t">${escapeHtml(q.question || '')}</span>
		</button>
	  `).join('');

	  jumpMenuHtml = `
		<div class="jump">
		  <button type="button" onclick="toggleJumpMenu()" class="btn btn-icon">
			${ICONS.list} <span>Q ${state.currentQuestionIndex + 1}</span>
		  </button>

		  ${state.isJumpMenuOpen ? `
			<div class="jump-dd">
			  ${items || `<div class="jump-empty">No questions</div>`}
			</div>
		  ` : ``}
		</div>
	  `;
	}


  return `
    <header id="main-header" class="header ${state.isMenuVisible ? '' : 'is-hidden'}">
      <div id="menu-trigger" style="position:absolute;left:0;top:0;right:0;height:10px;z-index:9999;"></div>
	  <div class="container header-row">
        <div class="header-left">
          <div class="pill">
            <span class="pill-title">SEASON</span>
            <div class="pill-btns">${seasonsHtml}</div>
            <label class="file-label" for="season-file">
              LOAD <input id="season-file" name="season-file" type="file" accept=".txt,.json" onchange="handleFileUpload(this)" />
            </label>
          </div>

          ${isSetup ? `<button onclick="openEditor()" class="btn btn-icon" type="button">${ICONS.edit} EDIT</button>` : ''}

          <div class="pill">
            <span class="pill-title">${ICONS.clock}</span>
            <select id="timerDuration" name="timerDuration" onchange="updateSetting('timerDuration', parseInt(this.value,10))" class="select">
              ${timerOptsHtml}
            </select>
          </div>

          <div class="pill">
            <span class="pill-title">${ICONS.target}</span>
            <input id="targetGoal" name="targetGoal" type="number" min="1" max="999" value="${state.targetGoal}" onchange="updateGoal(this.value)" class="input-num" />
          </div>

          ${jumpMenuHtml}
        </div>

        <div class="header-right">
          <button onclick="togglePause()" class="round-btn ${state.isPaused ? 'is-paused' : ''}" title="Pause" type="button">
            ${ICONS.pause}
          </button>

          <div class="pill">
            <button onclick="toggleMusic()" class="btn-xs ${state.settings.musicEnabled ? 'active' : ''}" title="Music" type="button">
              ${state.settings.musicEnabled ? ICONS.music : ICONS.musicOff}
            </button>
            <div style="width:1px;height:18px;background:var(--border2)"></div>
            <button onclick="updateSetting('musicVolume', 0.2)" class="btn-xs ${state.settings.musicVolume === 0.2 ? 'active' : ''}" type="button">${ICONS.volumeLow}</button>
            <button onclick="updateSetting('musicVolume', 0.5)" class="btn-xs ${state.settings.musicVolume === 0.5 ? 'active' : ''}" type="button">${ICONS.volumeMed}</button>
            <button onclick="updateSetting('musicVolume', 1.0)" class="btn-xs ${state.settings.musicVolume === 1.0 ? 'active' : ''}" type="button">${ICONS.volumeHigh}</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderSetup() {
  const playersList = state.players.map((p, i) => `
    <div class="list-item">
      <span>${i + 1}. ${p.name}</span>
      <button onclick="removePlayer('${p.id}')" class="xbtn" title="remove" type="button">✕</button>
    </div>
  `).join('') || `<div style="color:var(--muted);text-align:center;font-style:italic;font-size:18px;">- - -</div>`;

  return `
    <div class="container center setup">
      <h1 class="title">
        <span class="t1">БИБЛЕЙСКИЙ</span>
        <span class="t2">ЭКСПЕРТ</span>
      </h1>

      <div class="card">
        <div class="row">
          <input
            type="text"
            id="new-player-input"
            name="new-player-input"
            class="input grow"
            placeholder="..."
            value="${state.newPlayerName}"
            oninput="state.newPlayerName=this.value"
            onkeydown="if(event.key==='Enter') addPlayer()"
            autocomplete="off"
          />
          <button onclick="addPlayer()" class="btn btn-primary" style="min-width:56px;font-weight:900;font-size:20px;" type="button">+</button>
        </div>

        <div class="list">${playersList}</div>

        <button onclick="startGame()" ${state.players.length < 2 ? 'disabled' : ''}
          class="btn start ${state.players.length < 2 ? '' : 'btn-warning'}" type="button">
          НАЧАТЬ ИГРУ
        </button>
      </div>
    </div>
  `;
}

function renderGame() {
  if (!state.questions.length) return `<div class="container" style="color:#f87171;text-align:center">Error: No Questions</div>`;
  const q = state.questions[state.currentQuestionIndex];
  if (!q) return `<div class="container" style="color:#f87171;text-align:center">Error: Invalid Question Index</div>`;

  const player = state.players[state.currentPlayerIndex];
  const hasImage = q.image && q.image.trim() !== '' && (q.qname !== 'afterimage' || state.showResult);
  const nextPlayerName = state.players[(state.currentPlayerIndex + 1) % state.players.length].name;
  const isLastQ = state.currentQuestionIndex >= state.questions.length - 1;
  const totalScore = state.players.reduce((sum, p) => sum + p.score, 0);

  const answersHtml = state.shuffledAnswers.map((ans, idx) => {
    if (state.hiddenAnswers.includes(idx)) return `<div style="height:64px;opacity:0;pointer-events:none"></div>`;

    const letter = String.fromCharCode(65 + idx);

    let cls = 'answer';
    if (state.showResult) {
      if (ans.originalIndex === q.correct) cls += ' correct';
      else if (state.selectedAnswer === idx) cls += ' wrong';
      else cls += ' dim';
    } else if (state.selectedAnswer !== null) {
      if (state.selectedAnswer === idx) cls += ' selected';
      else if (state.isAnswerFinal) cls += ' dim';
    }

    return `
      <button onclick="handleAnswer(${idx})" ${state.showResult || state.isAnswerFinal || state.isPaused ? 'disabled' : ''} class="${cls}" type="button">
        <span class="letter">${letter}:</span>
        <span style="">${ans.text}</span>
      </button>
    `;
  }).join('');

  const lifelineBtn = (icon, label, active, action, blinking = false) => `
    <button onclick="${action}" ${!active || state.showResult || state.isAnswerFinal ? 'disabled' : ''} class="life ${(!active ? 'disabled' : '')} ${blinking ? 'blink' : ''}" type="button">
      <div>${icon}</div>
      <div style="font-size:11px;font-weight:900;letter-spacing:.08em">${label}</div>
    </button>
  `;
	const progressPercent = state.targetGoal > 0 ? Math.min(100, Math.round((totalScore / state.targetGoal) * 100)) : 0;
	const showProgressText = progressPercent >= 35; //%
	
  return `
    <div class="container game">
      <div class="topline">
        <div>Вопрос: <b>${state.currentQuestionIndex + 1}</b> из <b>${state.questions.length}</b></div>
        <div class="timer ${state.timeLeft <= 10 ? 'danger' : ''}" id="timer-box">
		  <div class="num ${state.timerHidden ? 'is-hidden' : ''}" id="timer-num">${state.timeLeft}</div>
        </div>
        <div>Уровень <b>${q.level}</b></div>
      </div>

      <div class="question">
        <h2>${q.question}</h2>
        ${q.desc ? `<div class="desc">${q.desc}</div>` : ''}
      </div>

      <div class="${hasImage ? 'game-grid' : ''}" style="">
        ${hasImage ? `<div class="imgbox"><img src="img/${q.image}"/></div>` : ''}
        <div class="answers-clip">
		  <div class="answers ${hasImage ? 'with-image' : 'two-col'}">
			${answersHtml}
		  </div>
		</div>
      </div>

      <div class="lifelines">
        ${state.showResult ? `
          <div class="resultbox fade-in">
            ${q.aftertext ? `<p>${q.aftertext}</p>` : ``}
            <div class="NextFinalBox">
              <button onclick="nextQuestion()" class="btn btn-warning NextFinal" type="button">
                ${isLastQ ? "ФИНАЛ" : `&#9654;&#9654;`}
              </button>
            </div>
          </div>
        ` : `
          <div style="width:100%;display:flex;flex-direction:column;align-items:center;">
            ${state.clueVisible ? `<div class="clue fade-in"><span>${state.clueVisible}</span></div>` : ``}
            <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap">
              ${lifelineBtn(ICONS.half, "50 / 50", player.lifelines.half, "useHalf()")}
              ${lifelineBtn(ICONS.help, "НАМЁК", player.lifelines.clue && q.clue, "useClue()")}
              ${lifelineBtn(ICONS.mic, "ПОМОЩЬ", player.lifelines.phone, "usePhone()", state.askBlinking)}
            </div>
          </div>
        `}
      </div>

      <div class="scoreline">
        <div class="scorecard goalbox" title="${totalScore} / ${state.targetGoal}">
          <div class="goalprogress" style="width:${progressPercent}%;">
			${showProgressText ? `${progressPercent}<span>%</span>` : ``}
		  </div>
		  <div class="goaltext"><b>${totalScore}</b> / ${state.targetGoal}</div>
        </div>

        ${state.players.map((p, i) => `
          <div class="scorecard ${i === state.currentPlayerIndex ? 'active' : ''}">
            <div class="name" title="${p.score}">${p.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderGameOver() {
  const totalScore = state.players.reduce((sum, p) => sum + (p.score || 0), 0);
  const isRecord = totalScore >= state.targetGoal;

  const sortedPlayers = [...state.players].sort((a, b) => (b.score || 0) - (a.score || 0));
  const percentage = state.targetGoal > 0 ? Math.min((totalScore / state.targetGoal) * 100, 100) : 0;

  const rows = sortedPlayers.map((p, i) => {
    const isTop = i === 0 && (p.score || 0) > 0;
    return `
      <div class="go-row">
        <div class="go-left">
          <div class="go-rank ${isTop ? 'top' : ''}">${i + 1}</div>
          <div class="go-name">${escapeHtml(p.name || '')}</div>
        </div>
        <div class="go-score">${p.score || 0}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="overlay fade-in">
      <div class="go-modal">
        <div class="go-sub">ИТОГИ СЕЗОНА</div>

        <div class="go-title ${isRecord ? 'record' : ''}">
          ${isRecord ? 'НОВЫЙ РЕКОРД!' : 'ХОРОШАЯ ИГРА!'}
        </div>

        <div class="go-big">
          <div class="go-bigbox">
            <div class="go-label">Общий счёт</div>
            <div class="go-value ${isRecord ? 'green' : ''}">${totalScore}</div>
          </div>

          <div class="go-sep"></div>

          <div class="go-bigbox dim">
            <div class="go-label">Цель</div>
            <div class="go-value dim">${state.targetGoal}</div>
          </div>
        </div>

        <div class="go-progress">
          <div class="go-progress-head">
            <span>0</span>
            <span>Прогресс</span>
            <span>${state.targetGoal}</span>
          </div>
          <div class="go-bar">
            <div class="go-barfill ${isRecord ? 'record' : ''}" style="width:${percentage}%"></div>
          </div>
        </div>

        <div class="go-table-title">Вклад участников</div>
        <div class="go-table">
          ${rows || `<div class="go-empty">Нет игроков</div>`}
        </div>

        <button type="button" onclick="resetToSetup()" class="btn btn-warning" style="width:100%;margin-top:18px;padding:14px;border-radius:999px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;">
          В главное меню
        </button>
      </div>
    </div>
  `;
}


function renderEditor() {
  const list = state.questions.map((q, idx) => `
    <div class="list-item" style="background:rgba(15,23,42,.92);border:1px solid var(--border);">
      <div style="display:flex;flex-direction:column;align-items:center;width:34px;">
        <button onclick="moveQuestion(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="btn-xs" type="button">▲</button>
        <div style="font-size:12px;color:var(--muted);font-family:ui-monospace, monospace">${idx + 1}</div>
        <button onclick="moveQuestion(${idx}, 1)" ${idx === state.questions.length - 1 ? 'disabled' : ''} class="btn-xs" type="button">▼</button>
      </div>
      <div style="flex:1;min-width:0;overflow:hidden;">
        <div style="font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${q.question}</div>
      </div>
      <button onclick="deleteQuestion(${q.qid})" class="btn" style="background:#7f1d1d;border-color:#7f1d1d;color:#fecaca;" type="button">${ICONS.trash}</button>
    </div>
  `).join('');

  return `
    <div class="overlay" style="z-index:110;">
      <div class="modal" style="max-width:900px;width:100%;max-height:80vh;overflow:auto;text-align:left;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
          <h2 style="margin:0;">Editor (Simplified)</h2>
          <div style="display:flex;gap:10px;">
            <button onclick="saveQuestions()" class="btn btn-primary" type="button">Export JSON</button>
            <button onclick="closeEditor()" class="btn" type="button">Close</button>
          </div>
        </div>
        <div style="margin-top:14px;color:var(--muted);font-size:14px;">Editing via text file is recommended for advanced details.</div>
        <div class="list" style="max-height:none;margin-top:12px;">${list}</div>
      </div>
    </div>
  `;
}

function render() {
  if (!app) return;

  let content = renderHeader();

  content += `<main id="main-content" class="container main ${state.isPaused ? 'is-paused' : ''}">`;

  if (state.phase === 'SETUP') content += renderSetup();
  else if (state.phase === 'PLAYING') content += renderGame();
  else if (state.phase === 'GAME_OVER') content += renderGameOver();

  content += `</main>`;

  if (state.isPaused) {
    content += `
      <div class="overlay fade-in">
        <div class="modal">
          <div style="color:var(--yellow);margin-bottom:8px">${ICONS.pauseBig}</div>
          <h2>ИГРОВАЯ ПАУЗА</h2>
          <button onclick="togglePause()" class="btn btn-warning" style="width:100%;padding:14px;border-radius:999px;font-weight:900;font-size:18px;" type="button">Продолжить</button>
        </div>
      </div>
    `;
  }

  if (state.isEditorOpen) content += renderEditor();

  app.innerHTML = content;
	
	const header = document.getElementById('main-header');
	const zone = document.getElementById('menu-trigger');

	if (zone) {
	  zone.onmouseenter = showMenu;
	}
	if (header) {
	  header.onmouseenter = showMenu;
	  header.onmouseleave = hideMenuDelayed;
	}

}

// --- Logic ---

function addPlayer() {
  if (!state.newPlayerName.trim()) return;
  if (state.players.length >= 10) return;
  state.players.push({
    id: Date.now().toString(),
    name: state.newPlayerName,
    score: 0,
    lifelines: { half: true, clue: true, phone: true }
  });
  state.newPlayerName = '';
  render();
  document.getElementById('new-player-input')?.focus();
}

function removePlayer(id) {
  state.players = state.players.filter(p => p.id !== id);
  render();
}

function startGame() {
  if (state.players.length < 2) return alert("Min 2 players");
  if (!state.questions.length) return alert("No questions");

  state.questions.sort((a, b) => (a.level !== b.level ? a.level - b.level : a.sort - b.sort));
  state.currentQuestionIndex = 0;
  state.currentPlayerIndex = 0;
  state.phase = 'PLAYING';
  prepareQuestion(state.questions[0]);
}

function prepareQuestion(q) {
  let answers = (q.answers || []).map((text, i) => ({ text, originalIndex: i })).filter(a => a.text);

  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }

	state.timerHidden = false;

  state.shuffledAnswers = answers;
  state.hiddenAnswers = [];
  state.selectedAnswer = null;
  state.isAnswerFinal = false;
  state.showResult = false;
  state.clueVisible = null;
  state.timeLeft = state.settings.timerDuration;
  state.askBlinking = false;

  clearInterval(state.timers.game);
  clearTimeout(state.timers.ask);

  AudioController.playMusic(q.level);
  render();
  startTimer(); // таймер после render(), чтобы updateTimerUI нашел элементы
}

function startTimer() {
  clearInterval(state.timers.game);

  state.timers.game = setInterval(() => {
    if (state.isPaused) return;
    if (state.isAnswerFinal || state.showResult) return;

    state.timeLeft = Math.max(0, state.timeLeft - 1);

    if (state.timeLeft === 10 && state.settings.musicEnabled && state.audio.bgm) {
      state.audio.bgm.fade(state.settings.musicVolume, 0, 10000);
    }

    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      clearInterval(state.timers.game);
      if (state.audio.bgm) state.audio.bgm.stop();
      updateTimerUI();
      return;
    }

    // ВАЖНО: НЕ render() тут! иначе будет мигать и закрывать селекты/меню.
    updateTimerUI();
  }, 1000);
}

function handleAnswer(idx) {
  if (state.showResult || state.isAnswerFinal || state.isPaused) return;
  const q = state.questions[state.currentQuestionIndex];

	if (!state.timerHidden){
		clearInterval(state.timers.game);
		state.timerHidden = true;
	}
  
  if (q.level < 3) {
    AudioController.stopMusic(true);
    state.selectedAnswer = idx;
    confirmAnswer(idx);
    return;
  }

  if (state.selectedAnswer !== idx) {
    AudioController.stopMusic();
    AudioController.playSelected();
    state.selectedAnswer = idx;
    render();
  } else {
    confirmAnswer(idx);
  }
}

function confirmAnswer(idx) {
  state.isAnswerFinal = true;
  AudioController.stopAllSfx();
  clearInterval(state.timers.game);
  render();

  const q = state.questions[state.currentQuestionIndex];
  const isCorrect = state.shuffledAnswers[idx].originalIndex === q.correct;

  state.timers.sfxDelay = setTimeout(() => {
    AudioController.playSfx(isCorrect ? 'correct' : 'wrong', q.level);

    state.timers.resultDelay = setTimeout(() => {
      state.showResult = true;
      if (isCorrect) {
        let pts = 1;
        if (q.level === 2) pts = 2;
        else if (q.level >= 3 && q.level <= 4) pts = 3;
        else if (q.level >= 5) pts = 4;
        state.players[state.currentPlayerIndex].score += pts;
      }
      render();
    }, 1000);
  }, 1000);
}

function nextQuestion() {
  if (isTransitioning) return;
  AudioController.stopAllSfx();
  animateToNextQuestion(() => {
    const nextIdx = state.currentQuestionIndex + 1;
    if (nextIdx >= state.questions.length) {
      state.phase = 'GAME_OVER';
      AudioController.playMusic(0);
      render();
      return;
    }
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    state.currentQuestionIndex = nextIdx;
    // prepareQuestion сам вызывает render() и startTimer()
    prepareQuestion(state.questions[nextIdx]);
  });
}


function useHalf() {
  const p = state.players[state.currentPlayerIndex];
  const q = state.questions[state.currentQuestionIndex];
  AudioController.playSfx('half');

  const wrongIndices = state.shuffledAnswers
    .map((a, i) => ({ ...a, idx: i }))
    .filter(a => a.originalIndex !== q.correct)
    .map(a => a.idx);

  const toHide = wrongIndices.sort(() => 0.5 - Math.random()).slice(0, Math.ceil(wrongIndices.length / 2));
  state.hiddenAnswers = toHide;
  if (state.selectedAnswer !== null && toHide.includes(state.selectedAnswer)) state.selectedAnswer = null;
  p.lifelines.half = false;
  render();
}

function useClue() {
  const p = state.players[state.currentPlayerIndex];
  const q = state.questions[state.currentQuestionIndex];
  AudioController.stopMusic();
  AudioController.playSfx('clue');
  state.clueVisible = q.clue || "No clue.";
  p.lifelines.clue = false;
  render();

  state.timers.musicResume = setTimeout(() => {
    if (!state.isAnswerFinal && !state.isPaused) AudioController.playMusic(q.level);
  }, 2000);
}

function usePhone() {
  const p = state.players[state.currentPlayerIndex];
  AudioController.stopMusic();
  AudioController.playSfx('ask');
  p.lifelines.phone = false;
  state.askBlinking = true;
  render();

  state.timers.ask = setTimeout(() => {
    state.askBlinking = false;
    render();
  }, 35000);
}

// --- Menu & Settings Logic ---

function showMenu() {
  state.isMenuVisible = true;
  if (state.timers.menu) clearTimeout(state.timers.menu);
  renderHeaderUpdate();
}

function hideMenuDelayed() {
  if (state.timers.menu) clearTimeout(state.timers.menu);
  state.timers.menu = setTimeout(() => {
    state.isMenuVisible = false;
    renderHeaderUpdate();
  }, 3000);
}

function renderHeaderUpdate() {
  const h = document.getElementById('main-header');
  if (!h) return;
  if (state.isMenuVisible) h.classList.remove('is-hidden');
  else h.classList.add('is-hidden');
}

function toggleJumpMenu() {
  state.isJumpMenuOpen = !state.isJumpMenuOpen;
  render();
}

function jumpToQuestion(idx) {
  state.isJumpMenuOpen = false;
  AudioController.stopMusic();
  state.currentQuestionIndex = idx;
  prepareQuestion(state.questions[idx]);
}

function togglePause() {
  state.isPaused = !state.isPaused;
  AudioController.togglePauseAudio(state.isPaused);

  // при паузе/снятии паузы можно просто render (это не каждую секунду)
  render();

  // если сняли паузу — обновим таймер цифрой, чтобы сразу было корректно
  if (!state.isPaused) updateTimerUI();
}

function toggleMusic() {
  state.settings.musicEnabled = !state.settings.musicEnabled;
  if (!state.settings.musicEnabled) {
    AudioController.stopMusic();
    render();
    return;
  }
  // music ON
  if (state.phase === 'PLAYING') {
    if (!state.isAnswerFinal) {
      AudioController.playMusic(state.questions[state.currentQuestionIndex].level);
    }
  } else {
    // SETUP или GAME_OVER → menu.mp3
    AudioController.playMusic(0);
  }
  render();
}


function updateSetting(key, val) {
  state.settings[key] = val;

  if (key === 'timerDuration') {
    // если уже играем и вопрос не финализирован — обновим текущий таймер на новое значение
    if (state.phase === 'PLAYING' && !state.isAnswerFinal && !state.showResult) {
      state.timeLeft = state.settings.timerDuration;
      updateTimerUI();
    }
  }
	
  if (key === 'musicVolume') AudioController.updateVolume();
  render();
}

function updateGoal(val) {
  state.targetGoal = parseInt(val, 10) || 60;
  render();
}

function loadSeason(id) {
  fetch(`season_${id}.txt`)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(data => {
      state.questions = data;
      state.seasonId = id;
      render();
    })
    .catch(() => {
      if (id === 1) {
        state.questions = MOCK_SEASON_1;
        state.seasonId = 1;
        render();
      } else {
        alert(`Could not load season_${id}.txt`);
      }
    });
}

function handleFileUpload(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = JSON.parse(e.target.result);
      if (Array.isArray(json)) {
        state.questions = json;
        alert("Loaded " + json.length + " questions");
        render();
      }
    } catch (err) {
      alert("Invalid JSON");
    }
  };
  reader.readAsText(file);
}

function openEditor() { state.isEditorOpen = true; render(); }
function closeEditor() { state.isEditorOpen = false; render(); }
function deleteQuestion(qid) {
  if (confirm("Delete?")) {
    state.questions = state.questions.filter(q => q.qid !== qid);
    render();
  }
}
function moveQuestion(idx, dir) {
  if (idx + dir < 0 || idx + dir >= state.questions.length) return;
  const temp = state.questions[idx];
  state.questions[idx] = state.questions[idx + dir];
  state.questions[idx + dir] = temp;
  render();
}
function saveQuestions() {
  const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.questions, null, 2));
  const a = document.createElement('a');
  a.href = str;
  a.download = `season_${state.seasonId}.txt`;
  a.click();
}
function resetToSetup() {
  clearInterval(state.timers.game);
  state.phase = 'SETUP';
  AudioController.playMusic(0);
  render();
}

function updateTimerUI() {
  const num = document.getElementById('timer-num');
  if (num) num.textContent = String(state.timeLeft);

  const box = document.getElementById('timer-box');
  if (box) {
    if (state.timeLeft <= 10) box.classList.add('danger');
    else box.classList.remove('danger');
  }
}

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

function nextFrame(){
  return new Promise(r => requestAnimationFrame(() => r()));
}

function getGameRoot(){
  // контейнер текущего экрана игры
  // у тебя renderGame возвращает <div class="container game">
  return document.querySelector('.container.game');
}

let isTransitioning = false;

async function animateToNextQuestion(doSwitchFn){
	if (isTransitioning) return;
	isTransitioning = true;
	const root = getGameRoot();
	if (!root) { doSwitchFn(); isTransitioning = false; return; }
	const img = root.querySelector('.imgbox');
	if (img) img.classList.add('fade-out');
	const resultText = root.querySelector('.resultbox p');
	if (resultText) resultText.classList.add('fade-out');
	root.classList.remove('anim-in');
	root.classList.add('anim-out');
	await sleep(800);
	doSwitchFn();
	await sleep(0);
	const root2 = getGameRoot();
	if(root2){
		root2.classList.add('anim-prep');
		await nextFrame();
		root2.classList.remove('anim-prep');
		root2.classList.add('anim-in');
		await sleep(800);
		root2.classList.remove('anim-in');
	}
	isTransitioning = false;
}


// --- Init ---

window.addEventListener('DOMContentLoaded', () => {
  try {
    render();        // показать UI
    loadSeason(1);   // загрузить вопросы
    try { AudioController.playMusic(0); } catch (e) {}
    hideMenuDelayed();
  } catch (err) {
    console.error("Init error:", err);
    const container = document.getElementById('error-container');
    if (container) {
      container.textContent = "Initialization Error: " + err.message;
      container.classList.remove('hidden');
    }
  }
});

// Expose functions to global scope
window.addPlayer = addPlayer;
window.removePlayer = removePlayer;
window.startGame = startGame;
window.handleAnswer = handleAnswer;
window.nextQuestion = nextQuestion;
window.useHalf = useHalf;
window.useClue = useClue;
window.usePhone = usePhone;
window.loadSeason = loadSeason;
window.handleFileUpload = handleFileUpload;
window.toggleMusic = toggleMusic;
window.updateSetting = updateSetting;
window.updateGoal = updateGoal;
window.togglePause = togglePause;
window.openEditor = openEditor;
window.closeEditor = closeEditor;
window.deleteQuestion = deleteQuestion;
window.moveQuestion = moveQuestion;
window.saveQuestions = saveQuestions;
window.resetToSetup = resetToSetup;
window.jumpToQuestion = jumpToQuestion;
window.toggleJumpMenu = toggleJumpMenu;
window.state = state;

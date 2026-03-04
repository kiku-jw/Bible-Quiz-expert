# Bible Expert Quiz

Интерактивная библейская викторина с озвучкой, таймером, уровнями сложности и режимом редактирования вопросов.

## Автор

Автор викторины: Владислав ([t.me/car_mod](https://t.me/car_mod)).

## Репозиторий

GitHub: `https://github.com/kiku-jw/Bible-Quiz-expert`

## Запуск локально

```bash
python3 -m http.server 8080
```

Открой в браузере: `http://localhost:8080`

## Деплой на GitHub Pages (через Actions)

Проект публикуется автоматически workflow-файлом `.github/workflows/deploy-pages.yml` при каждом push в ветку `main`.

После первого push нужно один раз включить Pages:

1. Открой `Settings` репозитория.
2. Перейди в `Pages`.
3. В `Build and deployment` выбери `Source: GitHub Actions`.

## Структура

- `index.html` — точка входа
- `app.js` — логика игры
- `index.css` — стили
- `season_1.txt` — база вопросов (JSON)
- `sound/`, `img/` — ассеты
- `editor.php` — отдельный PHP-редактор (на GitHub Pages не исполняется)

## Важно

Для GitHub Pages добавлен файл `.nojekyll`, чтобы гарантированно отдавались все статические файлы без jekyll-обработки.

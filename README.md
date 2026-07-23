# Bible Expert — Russian Bible Quiz for Group Play

Bible Expert is a browser-based, Russian-language Bible quiz for groups of 2–10 participants. The included season contains 60 questions across six difficulty levels.

## Play

[Play Bible Expert on GitHub Pages](https://kiku-jw.github.io/Bible-Quiz-expert/)

Add at least two players, choose the timer and score target, then start the game. Questions rotate between players and award more points at higher difficulty levels.

## Current Features

- 60 Russian-language questions in the included season
- Six difficulty levels with shuffled answer choices
- Configurable 30–150 second question timer
- Per-player scoring and a shared score target
- One-use 50/50, clue, and group-help lifelines for each player
- Optional music and sound effects
- Pause, question navigation, and final score summary
- Loading a compatible local JSON question file in the browser

The microphone-shaped group-help button starts a timed help prompt; it does not record audio or use speech recognition.

## Question Editing Boundaries

The browser's **EDIT** panel is deliberately limited. It can reorder or remove questions from the in-memory list and export the result as JSON. It does not edit every question field or save changes back to this repository.

`editor.php` is a separate question-management tool that can add, update, delete, reorder, and write questions to `season_1.txt`. It has no authentication and is intended only for a trusted local PHP environment. The GitHub Pages workflow excludes it from the deployed site.

## Run Locally

The game must be served over HTTP so the browser can load `season_1.txt`:

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080>.

The app loads Howler.js and the Inter font from third-party CDNs. Music, sound effects, questions, and visual assets are stored in this repository.

## Pages Deployment

`.github/workflows/deploy-pages.yml` deploys the static game after a push to `main`. The workflow stages an allow-listed `_site` artifact containing:

- `index.html`
- `app.js`
- `index.css`
- `season_1.txt`
- `.nojekyll`
- `img/`
- `sound/`

Repository documentation, `editor.php`, and other source files are not published in the Pages artifact.

## Project Structure

- `index.html` — browser entry point and page metadata
- `app.js` — game state, rendering, scoring, lifelines, audio, and limited browser editing
- `index.css` — application styles
- `season_1.txt` — JSON question data
- `img/` and `sound/` — local game assets
- `editor.php` — trusted-local PHP editor; not deployed to GitHub Pages

## Author

The original quiz author is Vladislav ([t.me/car_mod](https://t.me/car_mod)).

## License

No open-source license is granted. See [LICENSE](LICENSE).

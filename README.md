# Django guessing-game deployment exercise

A small Django guessing-game application used to practice the framework and a basic Render deployment workflow.

> **Repository status:** historical learning/deployment exercise retained as part of the original Django practice work.

## Structure

- `base_guessing_game/` — Django project and game app;
- `render.yaml` — Render deployment configuration;
- `base.json` — retained project/example data;
- `static/` — shared static assets.

Django configuration reads its secret key, debug flag and allowed hosts from environment variables. A local SQLite database and generated static/runtime files should not be committed.

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# Unix/macOS: source .venv/bin/activate
pip install -r requirements.txt
cd base_guessing_game
python manage.py migrate
python manage.py runserver
```

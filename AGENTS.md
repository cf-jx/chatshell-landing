# Repository Guidelines

## Project Structure & Module Organization
The project is a static landing site. Core pages live in `index.html`, `privacy.html`, and `terms.html`, with behavior in `script.js` and styles in `style.css`. Images and icons are stored under `assets/`, and supporting notes or checklists live in `docs/`. Translation strings are embedded in `script.js` and referenced from markup via `data-i18n` keys, so keep those in sync when editing copy.

## Build, Test, and Development Commands
- `python -m http.server 8000` serves the site locally for manual QA.
- `node test-lang.js` runs basic language checks for translation coverage.
- `node check-trans.js` validates translation keys and common copy issues.

## Coding Style & Naming Conventions
Follow the existing indentation: HTML/CSS use 2 spaces, JavaScript uses 4 spaces. Keep class names in `kebab-case` and `data-i18n` keys in `snake_case` to match the current translation map. Prefer small, readable functions in `script.js`, and avoid adding new global variables unless necessary.

## Testing Guidelines
There is no formal test framework. After changes, verify the main sections in a browser, confirm the language toggle works, and run the translation scripts if text or i18n keys were touched. Keep visual regressions in check by reviewing desktop and mobile breakpoints.

## Commit & Pull Request Guidelines
Commit history follows a Conventional Commits style, typically `feat:`, `fix:`, `chore:`, or `refactor:` with short bilingual descriptions. Keep commits focused and descriptive. For pull requests, include a clear summary, list any text or pricing changes, and attach screenshots or short clips for visible UI updates. If translations were updated, mention that the i18n checks were run.

## Security & Configuration Tips
This repository is static and should not contain secrets. Keep external URLs and payment links in plain text only when they are intended for public use. Store any new images under `assets/` and reference them with relative paths.

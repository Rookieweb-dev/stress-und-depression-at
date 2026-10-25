# stress-und-depression-at

Website für stress-und-depression.at.

## Hosting

Cloudflare (Worker mit statischen Dateien), Konfiguration in `wrangler.jsonc`.
Jeder Push auf `main` wird automatisch veröffentlicht; Pull Requests bekommen eine Vorschau-Adresse.

Derzeit gibt es keinen Build-Schritt: ausgeliefert wird der Ordner `public/`.
Sobald ein Framework gewählt ist, `assets.directory` in `wrangler.jsonc` auf dessen Ausgabeordner (z. B. `./dist`) setzen
und in Cloudflare den Build-Befehl eintragen.

## Lokal arbeiten

Ohne Domain und ohne Cloudflare-Konto:

```sh
npx wrangler dev
```

Dann http://localhost:8787 öffnen. Das läuft genau wie später bei Cloudflare (inkl. `_headers` und 404-Seite);
Änderungen in `public/` sind nach einem Neuladen sichtbar.

## Domain

Bis die Domain bei Cloudflare liegt, ist die Seite nach dem ersten Deploy unter
`stress-und-depression-at.<konto>.workers.dev` erreichbar. Wenn die Domain bereit ist,
in `wrangler.jsonc` die `routes`-Zeile einkommentieren und `workers_dev` auf `false` setzen.

## Seiten (Demo)

Reines HTML/CSS in `public/`, eine Datei pro Seite (`ueber-mich.html` ist unter `/ueber-mich` erreichbar).
Kopf- und Fußzeile stehen in jeder Datei; bei Änderungen an Menü oder Notfall-Hinweis alle Seiten anpassen.

- Schriften: Literata und Atkinson Hyperlegible Next, selbst gehostet in `public/fonts/` (SIL Open Font License).
- `site.js`: Menü auf dem Handy und Kontaktformular.
- Das Kontaktformular versendet noch nichts. Dafür braucht es einen Server-Teil (z. B. Worker-Route, die per E-Mail weiterleitet).
- Gelb markierte Stellen sind Platzhalter (Foto, Texte, E-Mail, Telefon, Impressum, Datenschutz).
- Die Krisennummern auf `/notfall` vor dem Livegang noch einmal prüfen.

## Claude-Skills

In `.claude/skills/` liegen Anleitungen, die Claude bei Design-Arbeit an der Seite automatisch lädt:

- `frontend-design`: Anthropics offizieller Design-Skill (Apache 2.0, aus github.com/anthropics/skills).
- `praxis-website`: Regeln speziell für diese Seite (Zielgruppen, Tonfall, Barrierefreiheit, CSP).

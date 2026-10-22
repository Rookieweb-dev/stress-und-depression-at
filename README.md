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

## Claude-Skills

In `.claude/skills/` liegen Anleitungen, die Claude bei Design-Arbeit an der Seite automatisch lädt:

- `frontend-design`: Anthropics offizieller Design-Skill (Apache 2.0, aus github.com/anthropics/skills).
- `praxis-website`: Regeln speziell für diese Seite (Zielgruppen, Tonfall, Barrierefreiheit, CSP).

# stress-und-depression-at

Website für stress-und-depression.at.

## Hosting

Cloudflare (Worker mit statischen Dateien), Konfiguration in `wrangler.jsonc`.
Jeder Push auf `main` wird automatisch veröffentlicht; Pull Requests bekommen eine Vorschau-Adresse.

Derzeit gibt es keinen Build-Schritt: ausgeliefert wird der Ordner `public/`.
Sobald ein Framework gewählt ist, `assets.directory` in `wrangler.jsonc` auf dessen Ausgabeordner (z. B. `./dist`) setzen
und in Cloudflare den Build-Befehl eintragen.

Lokal testen: `npx wrangler dev`

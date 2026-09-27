# Reproduire le dossier / Reproduce the dossier

## Français

Les 19 chapitres français et anglais sont maintenus dans `website/portal/behind-scenes-data.cjs`. Le module `behind-scenes-content.cjs` produit les pages HTML et les deux documents Markdown de `docs/` à partir de cette même source. Les schémas et la bibliographie sont dans le module de rendu. Une correction éditoriale doit être faite dans ces sources, puis reconstruite.

```sh
cd website/portal
npm install
npm run build
```

Le build copie `static/` dans `site/`, compose les pages, ajoute la rubrique aux entrées IA, Frankenstein, coulisses et accueil, puis applique le design commun et le sitemap. L’ancienne copie historique du portail n’est pas la source à déployer.

Les fichiers média sont dans `static/assets/behind-scenes/`. L’image souvenir est fournie par Mehdi ; la capture et la vidéo proviennent de l’Alpha du jeu. La vidéo web est une conversion 720p du master 1080p, sans audio. La capture de l’incident contenant la barre latérale privée n’est pas publiée. Aucun historique brut de conversation ni configuration de passerelle n’est inclus.

`verify-behind-scenes.cjs` ouvre les deux langues en 390 et 1440 pixels, contrôle les chapitres, les ancres, les débordements et les erreurs JavaScript, puis produit les PDF avec les styles d’impression. Il contrôle aussi la lecture sans JavaScript. Ce script utilise le Playwright installé dans l’environnement de production ; adapter son import sur un autre poste. Servir `site/` sur `127.0.0.1:8766`, ou renseigner `PREVIEW_URL`. Les PDF sont générés uniquement avec le serveur local, puis un nouveau build les copie dans le site. Les vérifications concernent le site ; elles ne constituent pas un nouveau test des modèles ou du jeu.

Les originaux et registres métiers restent dans leurs projets respectifs. Le dossier public est daté du 27 septembre 2026 ; ses chiffres ne sont pas des compteurs en direct. Pour l’actualiser, relire les nouveaux registres avant de changer les statuts.

## English

The 19 French and English chapters live in `website/portal/behind-scenes-data.cjs`. `behind-scenes-content.cjs` generates both HTML pages and both Markdown editions under `docs/` from that shared source. Diagrams and the bibliography are maintained in the rendering module. Edit these sources and rebuild to update the publication.

Run the commands above from the portal folder. The build copies static assets, composes pages, links the new section from the AI hub, Frankenstein, behind-the-scenes and home pages, and applies the common design and sitemap. Deploy this portal rather than an obsolete historical checkout.

Media lives under `static/assets/behind-scenes/`. Mehdi supplied the keepsake illustration; the game image and footage come from the Alpha. The web video is a silent 720p conversion of the 1080p master. The incident screenshot with its private conversation sidebar is not published. No raw conversation history or bridge configuration is included.

`verify-behind-scenes.cjs` opens both languages at 390 and 1440 pixels, checks chapter presence, anchors, overflow and JavaScript errors, and generates PDFs using print styles. It also verifies reading without JavaScript. The script imports Playwright from the production environment; adjust that path elsewhere. Serve `site/` at `127.0.0.1:8766`, or set `PREVIEW_URL`. PDF generation runs only against the local server; rebuild afterward to copy the PDFs into the output. These are website checks, not fresh model or game benchmarks.

Originals and authoritative production registers remain in their own projects. This dossier is a September 27, 2026 snapshot, rather than live counters. Read updated registers before changing achievement statuses.

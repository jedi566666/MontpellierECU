# Source de la page Coulisses

Le fragment `coulisses.html` contient la page française intégrée au site existant. Le générateur du site lit ce fragment avec `fs.readFileSync` dans `build.cjs` pour produire `/coulisses/index.html`. Remplacer le fragment source, puis exécuter `node build.cjs` et `node build-locales.cjs` dans le projet web-mtp.

Le présent dossier conserve la source éditoriale ; il ne constitue pas à lui seul un site déployable.

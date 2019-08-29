# template.data.gouv.fr [![CircleCI](https://circleci.com/gh/etalab/template.data.gouv.fr.svg?style=svg)](https://circleci.com/gh/etalab/template.data.gouv.fr)

Template CSS pour *.beta.gouv.fr, doc.data.gouv.fr et compagnie.

[![npm version](https://badgen.net/npm/v/template.data.gouv.fr)](https://www.npmjs.com/package/template.data.gouv.fr)

## Développement

Pour bénéficier du rechargement automatique du CSS :

```bash
  yarn install && yarn dev
  open index.html
```

## Construire votre propre version du template

Commenter les parties qui ne vous sont pas utiles dans `src/css/index.css` puis lancer:
```bash
  yarn dist
```

## Importer le package NPM

Installer le package sur votre projet
```bash
  npm install template.data.gouv.fr
```

Puis importer le fichier
```
  import 'template.data.gouv.fr/dist/main.css'
```

## Utiliser la dernière version complète

En utilisant unpkg `<link href="https://unpkg.com/template.data.gouv.fr@1.2.2/dist/main.min.css" rel="stylesheet">`
## Licence

2019 DINSIC

Cette application est publiée sous [licence MIT](LICENSE).

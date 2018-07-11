# template.data.gouv.fr

Template CSS pour data.gouv.fr et compagnie.

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
  import 'template.data.gouv.fr/dist/style/main.css'
```

## Utiliser la dernière version complète

En utilisant unpkg `<link href="https://unpkg.com/template.data.gouv.fr@1.0.2/dist/style/main.css" rel="stylesheet">`

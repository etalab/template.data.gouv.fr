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

## Utiliser la dernière version complète

En utilisant rawgit `<link href="https://rawgit.com/etalab/template.data.gouv.fr/master/template.css" rel="stylesheet">`

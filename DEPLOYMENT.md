# Publication GitHub Pages

Ce site est statique et peut être publié avec GitHub Pages.

Avant publication, ne pas ajouter le dossier `assets/Portfolio/` au dépôt: il contient les originaux haute qualité. Le site utilise uniquement `assets/Portfolio-web/`.

Commandes principales:

```bat
git init
git add index.html styles.css script.js .gitignore DEPLOYMENT.md assets\Portfolio-web assets\hero-patisserie.png assets\profil-patisserie.jpg
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/VOTRE-DEPOT.git
git push -u origin main
```

Ensuite, dans GitHub:

1. Ouvrir le dépôt.
2. Aller dans `Settings`.
3. Aller dans `Pages`.
4. Dans `Build and deployment`, choisir `Deploy from a branch`.
5. Sélectionner `main` puis `/root`.
6. Enregistrer.

L'adresse du site sera généralement:

```text
https://VOTRE-UTILISATEUR.github.io/VOTRE-DEPOT/
```

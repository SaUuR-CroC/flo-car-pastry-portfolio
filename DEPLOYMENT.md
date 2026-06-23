# Mise à jour du portfolio sur GitHub

Le site est publié depuis la branche `main` du dépôt :

`https://github.com/SaUuR-CroC/flo-car-pastry-portfolio.git`

## Publier toutes les modifications

Ouvrir PowerShell, puis exécuter :

```powershell
cd "C:\Users\carbo\OneDrive\Bureau\portfolio_patisserie"

git add -A
git commit -m "Mise à jour complète du portfolio"
git pull --rebase origin main
git push origin main
```

## Vérifier la publication

```powershell
git status
```

Le résultat attendu est :

```text
nothing to commit, working tree clean
```

Si GitHub Pages est configuré sur la branche `main` et le dossier `/root`, le site sera automatiquement actualisé quelques minutes après le `git push`.

## Photos originales

Le dossier `assets/Portfolio/` contient les photos originales en haute définition. Il est exclu par `.gitignore` et ne doit pas être publié.

Le site utilise uniquement les images optimisées du dossier `assets/Portfolio-web/`.

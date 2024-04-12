# Projet HTML avec PostCSS et JavaScript utilisant Webpack

Ce projet est une base pour créer une application web utilisant HTML, CSS (avec PostCSS) et JavaScript, en utilisant Webpack comme outil de build.

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt ou téléchargez-le sur votre machine.
3. Dans le répertoire racine du projet, exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

## Utilisation

### Mode de développement

Pour démarrer un serveur de développement local avec rechargement automatique, exécutez la commande suivante :

```bash
npm start
```

Cela lancera le serveur de développement à l'adresse `http://localhost:8080` et ouvrira automatiquement votre navigateur par défaut.

### Construction pour la production

Pour construire votre projet pour la production, exécutez la commande suivante :

```bash
npm run build
```

Cela générera une version optimisée de votre application dans le répertoire `dist`.

## Structure du projet

- `src/` : Ce répertoire contient les fichiers sources de votre projet.
  - `index.html` : Fichier HTML principal de l'application.
  - `index.js` : Point d'entrée JavaScript.
  - `styles.css` : Fichier CSS principal.
- `dist/` : Ce répertoire contient les fichiers générés lors de la construction du projet pour la production.
- `webpack.config.js` : Configuration Webpack pour le projet.
- `package.json` : Fichier de configuration npm avec les dépendances du projet et les scripts de build.

## Personnalisation

Vous pouvez personnaliser ce projet en fonction de vos besoins spécifiques. Voici quelques points à prendre en compte :

- Ajoutez des dépendances supplémentaires via npm si nécessaire.
- Modifiez les fichiers HTML, CSS et JavaScript dans le répertoire `src` pour créer votre application.
- Personnalisez la configuration Webpack (`webpack.config.js`) selon vos besoins spécifiques.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
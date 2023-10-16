# Test technique Citopia
 
- Le test devra utilise ce repo comme base.
- Les travaux devront pouvoir être testable sans aucune modification à apporter au code, ni paramétrage et si besoin en suivant pas à pas une documentation.
- Utilisez tous les outils dont vous aurez besoin.
- Veillez à soigner votre historique git, comme s'il s'agissait d'une situation projet réelle.
 
## Finaliser l'exercice
- Créer une pull request sur le repo avec votre travail
 
## Imposé
Dans cet exercice vous devrez utiliser:
- [React Native](https://reactnative.dev)
- [Typescript](https://www.typescriptlang.org)
- [React hooks](https://fr.reactjs.org/docs/hooks-intro.html)
- [Redux](https://redux.js.org)
 
## Bonus
- [Redux Saga](https://redux-saga.js.org/)
 
## Exercices à réaliser
 
*R1 :* Créer un site factice de type webapp comportant les pages suivantes : Accueil, Informations.
- Sur la page d'accueil le contenu défini en R4
- Sur la page informations le contenu défini en R2
- L'app comportera une navigation (pour aller d'une page à l'autre) et pourra être facilement compilée pour le développement (avec Hot Reloading) et pour une mise en production simple.
 
*R2 :* Mettre en place un formulaire sur la page Informations comportant les champs suivants : Nom, prénom, date de naissance. L'idée est de répliquer la page "mes informations" d'un utilisateur.
- Les données de ce formulaire sont issues d'une api factice telle que celle proposée par https://reqres.in
 
*R3 :* Le formulaire défini en R2 ne comprend pas de bouton enregistrer, toutefois les modifications de données doivent être envoyées vers l'api pour être persistées côté serveur sans clic sur le bouton valider (utiliser une api factice telle que https://reqres.in)
 
*R4 :* Afficher sur la page d'accueil les informations issues du formulaire, sous la forme d'une phrase : "Bonjour *prenom* votre anniversaire est dans *nbJours* jours. Si cela est incorrect vous pouvez modifier les informations sur votre page informations". (lien vers la page informations dans cette dernière phrase)

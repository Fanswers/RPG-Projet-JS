<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="Css/style.css" rel="stylesheet">
  <title>Document</title>
</head>

<!-- Formulaire pour la création du personnage -->

<body>
  <form id="playerForm">
    <p>
      Pseudo
      <input type="text" name="name" id="playerName">
    </p>
    <P>
      <input type="radio" name="class" value="Warrior"> Warrior
    </p>
    <P>
      <input type="radio" name="class" value="Mage"> Mage
    </p>
    <P>
      <input type="radio" name="class" value="Rogue"> Rogue
    </p>
    <P>
      <input type="radio" name="class" value="Archer"> Archer
    </p>
    <button id="sendPlayer">Jouer</button>
  </form>

  <!-- Ecran avant un combat, accès au magasin possible -->

  <div id="entre2Combat" class="cacher">
    <button id="newCombat">Attaquer</button>
    <button id="shop">Magasin</button>
  </div>

  <!-- Ecran lors d'un combat, affichage des compétences selon la classe -->

  <div id="estEnCombat" class="cacher">
    <button id="attaque1" value="Boule de feu">Boule de feu</button>
    <button id="attaque2">Eclat de glace</button>
    <button id="attaque3">Position de défense</button>
  </div>

  <!-- Ecran lors de la victoire d'un combat -->
  <div id="victoireCombat" class="cacher">
    <h1>Vous avez gagné !</h1>
    <button id="terminerCombat">Terminer</button>
  </div>

  <!-- Ecran lors d'une défaite, fin de partie -->
  <div id="defaiteCombat" class="cacher">
    <h1>Vous êtes mort.</h1>
    <button id="nouvellePartie">Nouvelle partie</button>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="module" src="main.js?2"></script>
</body>

</html>
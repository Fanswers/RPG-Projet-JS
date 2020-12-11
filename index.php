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
  <div>
    <div id="start"></div>
  </div>

  <div>
    <form id="formSave" class="cacher">
      <div id="cardLoad">
        <p id="loadGameDisplay">SAUVEGARDE<br>Pseudo : <span id="savedName"></span> Classe :<span id="savedType"></span></p>
        <div id="loadSave"></div>
      </div>
      <div id="cardNew">
        <div id="newGame"></div>
      </div>
    </form>
  </div>

  <form id="playerForm" class="cacher">
    <p id="pseudo">
      <input type="text" name="name" id="playerName" placeholder="Entrez votre pseudo">
    </p>
    <div id="choiceClassAll">
      <div id=imgClass>
        <div class="img W"></div>
        <div class="img M"></div>
        <div class="img R"></div>
        <div class="img A"></div>
      </div>
      <div id="choiceClass">
        <P>
          <input type="radio" name="class" value="Warrior" class="choiceClass1"> Warrior
        </p>
        <P>
          <input type="radio" name="class" value="Mage" class="choiceClass"> Mage
        </p>
        <P>
          <input type="radio" name="class" value="Rogue" class="choiceClass"> Rogue
        </p>
        <P>
          <input type="radio" name="class" value="Archer" class="choiceClass"> Archer
        </p>
      </div>
    </div>
    <div id="sendPlayer"></div>
  </form>

  <!-- Affichage des actions -->
  <div class="combat">
    <div id="messages"></div>

    <!-- Ecran avant un combat, accès au magasin possible -->
    <div id="entre2Combat" class="cacher">
      <div id="imgMonster" class="IMG monster"></div>
      <div id="imgPlayer" class="IMG player"></div>
      <button id="newCombat">Attaquer</button>
      <button id="displayShop">Magasin</button>
    </div>

    <!-- Ecran lors d'un combat, affichage des compétences selon la classe -->

    <div id="estEnCombatWarrior" class="cacher">
      <button id="attaque1Warrior" value="Coup d'épée">Coup d'épée</button>
      <button id="attaque2Warrior" value="Coup lourd">Coup lourd</button>
      <button id="attaque3Warrior" value="Coup puissant">Coup puissant</button>
      <button id="attaque4Warrior" value="Position de défense">Position de défense</button>
    </div>

    <div id="estEnCombatMage" class="cacher">
      <button id="attaque1Mage" value="Projectile de feu">Projectile de feu</button>
      <button id="attaque2Mage" value="Boule de feu">Boule de feu</button>
      <button id="attaque3Mage" value="Tornade de feu">Tornade de feu</button>
      <button id="attaque4Mage" value="Position de défense">Position de défense</button>
    </div>

    <div id="estEnCombatRogue" class="cacher">
      <button id="attaque1Rogue" value="Coup de dague">Coup de dague</button>
      <button id="attaque2Rogue" value="Entaille">Entaille</button>
      <button id="attaque3Rogue" value="Coup critique">Coup critique</button>
      <button id="attaque4Rogue" value="Position de défense">Position de défense</button>
    </div>

    <div id="estEnCombatArcher" class="cacher">
      <button id="attaque1Archer" value="Flèche rapide">Flèche rapide</button>
      <button id="attaque2Archer" value="Flèches multiples">Flèches multiples</button>
      <button id="attaque3Archer" value="Pluie de flèches">Pluie de flèches</button>
      <button id="attaque4Archer" value="Position de défense">Position de défense</button>
    </div>
  </div>

  <!-- Affichage des données du joueur -->
  <div id="fightPlayerData" class="cacher">
    <p>Pv : <span id="pv"></span> PvMax : <span id="pvMax"></span></p>
    <p>Pm : <span id="pm"></span> PmMax : <span id="pmMax"></span></p>
  </div>

  <!-- Affichage du magasin -->
  <div id="shop" class="cacher">
    <p>~~~ SHOP ~~~</p>
    <p>Votre or : <span id="playerGold"></span></p>
    <p>Restaurer PV <button id="pvButton">5 gold</button></p>
    <p>Restaurer PM <button id="pmButton">5 gold</button></p>
    <p>Attaque +7 <button id="atkButton"><span id="spanAtkButton"></span> gold</button></p>
    <p>Defense +7 <button id="defButton"><span id="spanDefButton"></span> gold</button></p>
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
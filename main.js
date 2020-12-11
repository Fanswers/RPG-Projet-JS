import * as gestion from './Function/Gestion.js';

// Fonction de lancement du jeu
$("#start").click(gestion.start);

// Fonction de création d'une nouvelle partie
$("#newGame").click(gestion.newGame)

$("#loadSave").click(gestion.loadSave)

$('#sendPlayer').click(gestion.sendPlayer);

// Fonction de lancement de combat au clique du bouton concerné
$("#newCombat").click(gestion.newCombat);

// Terminer la fin d'un combat retour a l'accès du shop et au lancement d'un nouveau combat
$("#terminerCombat").click(function () {
    $("#messages").empty();
    $("#entre2Combat").toggleClass("cacher");
    $("#victoireCombat").toggleClass("cacher");
    $("#fightPlayerData").toggleClass("cacher");
    $("#affichagePlayerMonster").toggleClass("cacher");
})

// Fin de partie suite a la défaite du player, possibilité de lancer une nouvelle partie
$("#nouvellePartie").click(function () {
    $("#messages").empty();
    $("#defaiteCombat").toggleClass("cacher");
    $("#playerForm").toggleClass("cacher");
})

// // Fonction au clique du bouton qui lance l'attaque séléctionnée du Warrior 
$("#attaque1Warrior").click(gestion.atkWarrior1);
$("#attaque2Warrior").click(gestion.atkWarrior2);
$("#attaque3Warrior").click(gestion.atkWarrior3);
$("#attaque4Warrior").click(gestion.atkWarrior4);

// // Fonction au clique du bouton qui lance l'attaque séléctionnée du Mage
$("#attaque1Mage").click(gestion.atkMage1);
$("#attaque2Mage").click(gestion.atkMage2);
$("#attaque3Mage").click(gestion.atkMage3);
$("#attaque4Mage").click(gestion.atkMage4);

// // Fonction au clique du bouton qui lance l'attaque séléctionnée du Rogue
$("#attaque1Rogue").click(gestion.atkRogue1);
$("#attaque2Rogue").click(gestion.atkRogue2);
$("#attaque3Rogue").click(gestion.atkRogue3);
$("#attaque4Rogue").click(gestion.atkRogue4);

// // Fonction au clique du bouton qui lance l'attaque séléctionnée du Archer
$("#attaque1Archer").click(gestion.atkArcher1);
$("#attaque2Archer").click(gestion.atkArcher2);
$("#attaque3Archer").click(gestion.atkArcher3);
$("#attaque4Archer").click(gestion.atkArcher4);

//Affichage du magasin
$("#displayShop").click(gestion.displayShop);

//Bouton restaurer PV
$("#pvButton").click(gestion.pvButton);

//Bouton restaurer PM
$("#pmButton").click(gestion.pmButton);

//Bouton augmenter attaque
$("#atkButton").click(gestion.atkButton);

//Bouton augment defense
$("#defButton").click(gestion.defButton);
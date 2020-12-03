import { Personnage } from './Class/Personnage.js';
import { Monster } from './Class/Monster.js';

// Initialisation d'une variable player et monster hors fonction pour pouvoir les récupérer n'importe ou
let player = new Personnage("Warrior");
let monster;
let datastring;
let playerInfo;

$("#start").click(function () {
    $("#start").toggleClass("cacher");
    $("#formSave").toggleClass("cacher");
    $.ajax({
        type: 'get',
        url: 'getPlayer.php',
        data: datastring,
        success: function (data) {
            if (data != false) {
                choose(data)
            }
            else {
                $("#loadSave").toggleClass("cacher");
            }
        }
    })
});

function choose(data) {
    data = data.replace(/["']/g, "");
    dataArray = data.split(",");
    $("#savedName").text(dataArray[1]);
    $("#savedType").text(dataArray[0]);
}

$("#newGame").click(function (e) {
    e.preventDefault();
    $("#formSave").toggleClass("cacher");
    $("#playerForm").toggleClass("cacher");
})

$('#sendPlayer').click(function (e) {
    e.preventDefault();
    playerInfo = $('#playerForm').serializeArray();
    player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value']);
    monster = new Monster("Glout");
    $.ajax({
        url: 'savePlayer.php',
        method: 'POST',
        data: player
    })
    $("#playerForm").toggleClass("cacher");
    $("#entre2Combat").toggleClass("cacher");
});


// Fonction de lancement de combat au clique du bouton concerné
$("#newCombat").click(function () {
    $("#entre2Combat").toggleClass("cacher");
    $("#estEnCombat" + player.Type).toggleClass("cacher");
})



// Fonction de fin de combat lorsqu'une des deux entités (personnage ou monstre) atteint 0 point de vie.
function FinDeCombat() {
    if (player.Pv <= 0) {
        $("#estEnCombat" + player.Type).toggleClass("cacher");
        $("#defaiteCombat").toggleClass("cacher");
        GenerationMonstre()
    } else if (monster.Pv <= 0) {
        player.Gold += monster.Gold;
        $("#estEnCombat" + player.Type).toggleClass("cacher");
        $("#victoireCombat").toggleClass("cacher");
        GenerationMonstre()
    }
}

// Génération d'un nouveau monstre selon le résultat du combat, défaite/vitoire
function GenerationMonstre() {
    if (player.Pv <= 0) {
        monster = new Monster("Glout");
    } else if (monster.Type == "Glout") {
        monster = new Monster("Groco");
    } else if (monster.Type == "Groco") {
        monster = new Monster("Tankse");
    } else if (monster.Type == "Tankse") {
        monster = new Monster("Noxpul");
    }
}

// Terminer la fin d'un combat retour a l'accès du shop et au lancement d'un nouveau combat
$("#terminerCombat").click(function () {
    $("#entre2Combat").toggleClass("cacher");
    $("#victoireCombat").toggleClass("cacher");
})

// Fin de partie suite a la défaite du player, possibilité de lancer une nouvelle partie
$("#nouvellePartie").click(function () {
    $("#defaiteCombat").toggleClass("cacher");
    $("#playerForm").toggleClass("cacher");
})

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Warrior 
$("#attaque1Warrior").click(function () {
    if (player.Vitesse > monster.Vitesse) {
        console.log("Vous lancez " + $("#attaque1" + player.Type).val() + " !");
        monster.Pv -= player.Attaque;
        console.log("Le monstre a perdu " + player.Attaque + " points de vie !");
        if (monster.Pv > 0) {
            console.log("Le monstre vous attaque !");
            player.Pv -= monster.Attaque;
            console.log("Vous avez perdu " + monster.Attaque + " points de vie !");
        }
    } else {
        console.log("Le monstre vous attaque !");
        player.Pv -= monster.Attaque;
        console.log("Vous avez perdu " + monster.Attaque + " points de vie !");
        if (player.Pv > 0) {
            console.log("Vous lancez " + $("#attaque1" + player.Type).val() + " !");
            monster.Pv -= player.Attaque;
            console.log("Le monstre a perdu " + player.Attaque + " points de vie !");
        }
    }
    FinDeCombat()
})

$("#attaque2Warrior").click(function () {
    if (player.Pm > 3) {
        player.Pm -= 3;
        if (player.Vitesse > monster.Vitesse) {
            console.log("Vous lancez " + $("#attaque1" + player.Type).val() + " !");
            monster.Pv -= player.Attaque * 1.5;
            console.log("Le monstre a perdu " + (player.Attaque * 1.5) + " points de vie !");
            if (monster.Pv > 0) {
                console.log("Le monstre vous attaque !");
                player.Pv -= monster.Attaque;
                console.log("Vous avez perdu " + monster.Attaque + " points de vie !");
            }
        } else {
            console.log("Le monstre vous attaque !");
            player.Pv -= monster.Attaque;
            console.log("Vous avez perdu " + monster.Attaque + " points de vie !");
            if (player.Pv > 0) {
                console.log("Vous lancez " + $("#attaque1" + player.Type).val() + " !");
                monster.Pv -= player.Attaque * 1.5;
                console.log("Le monstre a perdu " + (player.Attaque * 1.5) + " points de vie !");
            }
        }
    } else {
        console.log("Vous n'avez pas assez de mana");
    }
    FinDeCombat()
})

$("#attaque3Warrior").click(function () {
    if (player.Pm > 6) {
        player.Pm -= 6;
        if (player.Vitesse > monster.Vitesse) {
            console.log("Vous lancez " + $("#attaque1" + player.Type).val() + " !");
            monster.Pv -= player.Attaque * 2;
            console.log("Le monstre a perdu " + (player.Attaque * 2) + " points de vie !");
            if (monster.Pv > 0) {
                console.log("Le monstre vous attaque !");
                player.Pv -= monster.Attaque;
                console.log("Vous avez perdu " + monster.Attaque + " points de vie !");
            }
        } else {
            console.log("Le monstre vous attaque !");
            player.Pv -= monster.Attaque;
            console.log("Vous avez perdu " + monster.Attaque + " points de vie !");
            if (player.Pv > 0) {
                console.log("Vous lancez " + $("#attaque1" + player.Type).val() + " !");
                monster.Pv -= player.Attaque * 3;
                console.log("Le monstre a perdu " + (player.Attaque * 2) + " points de vie !");
            }
        }
    } else {
        console.log("Vous n'avez pas assez de mana");
    }
    FinDeCombat()
})

$("#attaque4Warrior").click(function () {
    if (monster.Attaque > player.Defense) {
        player.Pv -= monster.Attaque - player.Defense;
        console.log("Vous avez perdu " + (monster.Attaque - player.Defense) + " points de vie !");
    } else {
        player.Pv -= 0;
        console.log("Vous avez perdu " + 0 + " points de vie !");
    }
    FinDeCombat()
})




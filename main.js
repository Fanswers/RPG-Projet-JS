import { Personnage } from './Class/Personnage.js';
import { Monster } from './Class/Monster.js';

// Initialisation d'une variable player et monster hors fonction pour pouvoir les récupérer n'importe ou
let player = new Personnage("Warrior");
let monster;
let datastring;
let playerInfo;
let dataArray;


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

$("#loadSave").click(function (e) {
    e.preventDefault();
    $("#formSave").toggleClass("cacher");
    player = new Personnage(dataArray[0], dataArray[1])
    player.Pv = parseInt(dataArray[2]);
    player.PvMax = parseInt(dataArray[3]);
    player.Defense = parseInt(dataArray[4]);
    player.Vitesse = parseInt(dataArray[5]);
    player.Esquive = parseInt(dataArray[6]);
    player.Attaque = parseInt(dataArray[7]);
    player.Pm = parseInt(dataArray[8]);
    player.PmMax = parseInt(dataArray[9]);
    player.Crit = parseInt(dataArray[10]);
    player.Gold = parseInt(dataArray[11]);
    player.Etape = parseInt(dataArray[12]);
    GenerationMonstre();
    $("#entre2Combat").toggleClass("cacher");
    $("#fightPlayerData").toggleClass("cacher");
    $("#imgMonster").toggleClass(monster.Type);
    $("#imgPlayer").toggleClass(player.Type);
    refreshPlayerData();
})

$('#sendPlayer').click(function (e) {
    e.preventDefault();
    playerInfo = $('#playerForm').serializeArray();
    player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value']);
    GenerationMonstre();
    $.ajax({
        url: 'savePlayer.php',
        method: 'POST',
        data: player
    })
    $("#playerForm").toggleClass("cacher");
    $("#entre2Combat").toggleClass("cacher");
    $("#fightPlayerData").toggleClass("cacher");
    $("#imgMonster").toggleClass(monster.Type);
    $("#imgPlayer").toggleClass(player.Type);
    refreshPlayerData();
});



// Fonction de lancement de combat au clique du bouton concerné
$("#newCombat").click(function () {
    $("#entre2Combat").toggleClass("cacher");
    $("#estEnCombat" + player.Type).toggleClass("cacher");
})



// Fonction de fin de combat lorsqu'une des deux entités (personnage ou monstre) atteint 0 point de vie.
function FinDeCombat() {
    refreshPlayerData();
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
        player.Etape = 1;
        monster = new Monster("Glout");
        console.log(player.Etape)
    } else if (player.Etape == 0) {
        player.Etape += 1;
        monster = new Monster("Glout");
        console.log(player.Etape)
    } else if (player.Etape == 1) {
        player.Etape += 1;
        monster = new Monster("Groco");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 2) {
        player.Etape += 1;
        monster = new Monster("Tankse");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 3) {
        player.Etape += 1;
        monster = new Monster("Noxpul");
        $("#imgMonster").toggleClass(monster.Type);
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

function refreshPlayerData() {
    $("#pv").text(player.Pv);
    $("#pm").text(player.Pm);
    $("#pvMax").text(player.PvMax);
    $("#pmMax").text(player.PmMax);
}

//Affichage du magasin
$("#displayShop").click(function(){
    shopRefresh();
    $("#shop").toggleClass("cacher");
})

//Rafraichir les données du shop
function shopRefresh(){
    let price = [2, 5, 9, 15];
    refreshPlayerData();
    $("#playerGold").text(player.Gold);
    $("#spanPvButton").text();
    $("#spanPmButton").text();
    $("#spanAtkButton").text(price[parseInt(player.shopAtk)]);
    $("#spanDefButton").text(price[parseInt(player.shopDef)]);
}

//Bouton restaurer PV
$("#pvButton").click(function(){
    player.Gold -= 5;
    player.Pv = player.PvMax;
    shopRefresh();
})

//Bouton restaurer PM
$("#pmButton").click(function(){
    player.Gold -= 5;
    player.Pm = player.PmMax;
    shopRefresh();
})

//Bouton augmenter attaque
$("#atkButton").click(function(){
    let price = [2, 5, 9, 15];
    player.Gold -= price[parseInt(player.shopAtk)];
    player.shopAtk += 1;
    player.Attaque += 7;
    shopRefresh();
})

//Bouton augment defense
$("#defButton").click(function(){
    let price = [2, 5, 9, 15];
    player.Gold -= price[parseInt(player.Def)];
    player.shopDef += 1;
    player.Defense += 7;
    shopRefresh();
})
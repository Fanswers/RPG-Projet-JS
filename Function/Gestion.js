import * as gestionCombat from './GestionCombat.js';
import { Personnage } from '../Class/Personnage.js';
import { Monster } from '../Class/Monster.js';
import * as atkPlayer from './AttaquePlayer.js';


let player = new Personnage("Warrior");
let monster;
let playerInfo;
let datastring;
let dataArray;

// Fonction de lancement du jeu
export function start() {
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
                $("#cardLoad").toggleClass("cacher");
            }
        }
    })
}


function choose(data) {
    data = data.replace(/["']/g, "");
    dataArray = data.split(",");
    $("#savedName").text(dataArray[1]);
    $("#savedType").text(dataArray[0]);
}

// Fonction de création d'une nouvelle partie
export function newGame(e) {
    e.preventDefault();
    $("#formSave").toggleClass("cacher");
    $("#playerForm").toggleClass("cacher");
}


export function loadSave(e) {
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
    player.shopAtk = parseInt(dataArray[13]);
    player.shopDef = parseInt(dataArray[14]);
    player, monster = gestionCombat.GenerationMonstre(player, monster);
    $("#entre2Combat").toggleClass("cacher");
    $("#imgPlayer").toggleClass(player.Type);
    refreshPlayerData(player);
}


export function sendPlayer(e) {
    e.preventDefault();
    playerInfo = $('#playerForm').serializeArray();
    player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value']);
    player, monster = gestionCombat.GenerationMonstre(player, monster);
    $.ajax({
        url: 'savePlayer.php',
        method: 'POST',
        data: player
    })
    $("#playerForm").toggleClass("cacher");
    $("#entre2Combat").toggleClass("cacher");
    $("#imgPlayer").toggleClass(player.Type);
    refreshPlayerData(player);
};

export function newCombat() {
    $("#entre2Combat").toggleClass("cacher");
    $("#estEnCombat" + player.Type).toggleClass("cacher");
}

//Attaques
//Warrior
export function atkWarrior1() {
    player, monster = atkPlayer.coupDepee(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkWarrior2() {
    player, monster = atkPlayer.coupLourd(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkWarrior3() {
    player, monster = atkPlayer.coupPuissant(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkWarrior4() {

    player, monster = atkPlayer.positionDefenseWarrior(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);

}

//Mage
export function atkMage1() {
    player, monster = atkPlayer.projectileDeFeu(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkMage2() {
    player, monster = atkPlayer.bouleDeFeu(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkMage3() {
    player, monster = atkPlayer.tornadeDeFeu(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkMage4() {
    player, monster = atkPlayer.positionDefenseMage(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

//Rogue
export function atkRogue1() {
    player, monster = atkPlayer.coupDeDague(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkRogue2() {
    player, monster = atkPlayer.entaille(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkRogue3() {
    player, monster = atkPlayer.coupCritique(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkRogue4() {
    player, monster = atkPlayer.positionDefenseRogue(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

//Archer
export function atkArcher1() {
    player, monster = atkPlayer.flecheRapide(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkArcher2() {
    player, monster = atkPlayer.flecheMultiple(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkArcher3() {
    player, monster = atkPlayer.pluieDeFleche(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}

export function atkArcher4() {
    player, monster = atkPlayer.positionDefenseArcher(player, monster);
    player, monster = gestionCombat.FinDeCombat(player, monster);
}


export function refreshPlayerData(player) {
    $("#pv").text(player.Pv);
    $("#pm").text(player.Pm);
    $("#pvMax").text(player.PvMax);
    $("#pmMax").text(player.PmMax);
}

//Affichage du magasin
export function displayShop() {
    shopRefresh();
    $("#shop").toggleClass("cacher");
}

//Rafraichir les données du shop
function shopRefresh() {
    let price = [2, 5, 9, 15];
    refreshPlayerData(player);
    autoSave(player);
    $("#playerGold").text(player.Gold);
    $("#spanPvButton").text();
    $("#spanPmButton").text();
    $("#spanAtkButton").text(price[parseInt(player.shopAtk)]);
    $("#spanDefButton").text(price[parseInt(player.shopDef)]);
}

export function pvButton() {
    if (player.Gold >= 5) {
        player.Gold -= 5;
        player.Pv = player.PvMax;
        shopRefresh();
    }
    else;
}

export function pmButton() {
    if (player.Gold >= 5) {
        player.Gold -= 5;
        player.Pm = player.PmMax;
        shopRefresh();
    }
    else;
}

export function atkButton() {
    let price = [2, 5, 9, 15];
    if (player.Gold >= price[parseInt(player.shopAtk)]) {
        player.Gold -= price[parseInt(player.shopAtk)];
        player.shopAtk += 1;
        player.Attaque += 7;
        shopRefresh();
    }
    else;
}

export function defButton() {
    let price = [2, 5, 9, 15];
    if (player.Gold >= price[parseInt(player.shopDef)]) {
        player.Gold -= price[parseInt(player.shopDef)];
        player.shopDef += 1;
        player.Defense += 7;
        shopRefresh();
    }
    else;
}


export function autoSave(player) {
    if (player.Pv > 0) {
        $.ajax({
            url: './savePlayer.php',
            method: 'POST',
            data: player
        })
    }
    else {
        $.ajax({
            url: './savePlayer.php',
            method: 'POST',
            data: null
        })
    }
}
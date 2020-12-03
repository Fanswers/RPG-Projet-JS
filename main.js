import { Personnage } from './Class/Personnage.js'
import { Monster } from './Class/Monster.js'

let player;
let monster;
//Recupération des données du formulaire
$("#sendPlayer").click(function (e) {
    e.preventDefault();
    let playerInfo = $("#playerForm").serializeArray();
    game(playerInfo);
})

function game(playerInfo) {
    //Creation du joueur
    player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value'])
    monster = new Monster("Glout");
    console.log(player.Type);
    console.log(player.Name);
    $("#playerForm").toggleClass("cacher");
    $("#entre2Combat").toggleClass("cacher");
}

function Combat(prsng, mnstr) {
    console.log(prsng.Attaque);
    console.log(mnstr.Attaque);
    while (mnstr.Pv > 0 && prsng.Pv > 0) {
        let choix;
        switch (choix) {
            case "1":
                if (prsng.Vitesse > mnstr.Vitesse) {
                    mnstr.Pv -= prsng.Attaque;
                    if (mnstr.Pv > 0) {
                        prsng.Pv -= mnstr.Attaque;
                    }
                } else {
                    prsng.Pv -= mnstr.Attaque;
                    if (prsng.Pv > 0) {
                        mnstr.Pv -= prsng.Attaque;
                    }
                }
                break;
            case "2":
                console.log(prsng.Pv);
                prsng.Pv -= mnstr.Attaque - prsng.Defense / 2;
                console.log(prsng.Pv);
                break;
        }
        if (mnstr.Pv <= 0 && prsng.Pv > 0) {
            console.log(prsng.Gold);
            prsng.Gold += mnstr.Gold;
            console.log(prsng.Gold);
            console.log("Vous avez gagné !");
        } else if (mnstr.Pv > 0 && prsng.Pv <= 0) {
            console.log("Vous avez perdu !");
        }
    }
}

// Fonction de lancement de combat au clique du bouton concerné
$("#newCombat").click(function () {
    $("#newCombat").toggleClass("cacher");
    $("#shop").toggleClass("cacher");
    $("#estEnCombat").toggleClass("cacher");
})

// Fonction au clique du bouton qui lance l'attaque séléctionnée 
$("#attaque1").click(function () {
    if (player.Vitesse > monster.Vitesse) {
        console.log("Vous lancez " + $("#attaque1").value + " !");
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
            console.log("Vous lancez " + $("#attaque1").value + " !");
            monster.Pv -= player.Attaque;
            console.log("Le monstre a perdu " + player.Attaque + " points de vie !");
        }
    }
    FinDeCombat()
})

// Fonction de fin de combat lorsqu'une des deux entités (personnage ou monstre) atteint 0 point de vie.
function FinDeCombat() {
    if (player.Pv <= 0) {
        $("#estEnCombat").toggleClass("cacher");
        $("#defaiteCombat").toggleClass("cacher");
        GenerationMonstre()
    } else if (monster.Pv <= 0) {
        player.Gold += monster.Gold;
        $("#estEnCombat").toggleClass("cacher");
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

$("#terminerCombat").click(function () {
    $("#newCombat").toggleClass("cacher");
    $("#shop").toggleClass("cacher");
    $("#victoireCombat").toggleClass("cacher");
})
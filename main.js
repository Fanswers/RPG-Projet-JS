import { Personnage } from './Class/Personnage.js'
import { Monster } from './Class/Monster.js'

let lancement = document.querySelector("#playerForm");

function Game() {
    let pers = new Personnage("Warrior");
    let mons = new Monster("Glout");
    Combat(pers, mons);
}

//Recupération des données du formulaire
$("#sendPlayer").click(function (e) {
    e.preventDefault();
    let playerInfo = $("#playerForm").serializeArray();
    game(playerInfo)
})

function game(playerInfo) {
    //Creation du joueur
    let player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value'])
    let mons = new Monster("Glout");
    console.log(player.Type);
    console.log(player.Name);
    $("#playerForm").toggleClass("cacher");
    Combat(player, mons);
}

function Combat(prsng, mnstr) {
    console.log(prsng.Attaque);
    console.log(mnstr.Attaque);
    while (mnstr.Pv > 0 && prsng.Pv > 0) {
        let choix = "1"
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

$("#playerForm").append(`
<form class='cacher'></form>
`)
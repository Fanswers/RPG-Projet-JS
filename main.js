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
    player.shopAtk = parseInt(dataArray[13]);
    player.shopDef = parseInt(dataArray[14]);
    GenerationMonstre();
    $("#entre2Combat").toggleClass("cacher");
    $("#fightPlayerData").toggleClass("cacher");
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
        $("#imgPlayer").toggleClass(player.Type);
        $("#imgMonster").toggleClass(monster.Type);
        player.Etape = 0;
        monster = new Monster("Glout");
        console.log(player.Etape)
    } else if (player.Etape == 0) {
        player.Etape += 1;
        monster = new Monster("Glout");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 1) {
        player.Etape += 1;
        $("#imgMonster").removeClass("Glout");
        monster = new Monster("Tankse");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 2) {
        player.Etape += 1;
        $("#imgMonster").toggleClass("Tankse");
        monster = new Monster("Groco");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 3) {
        player.Etape += 1;
        $("#imgMonster").toggleClass("Groco");
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
    GenerationMonstre()
})

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Warrior 
$("#attaque1Warrior").click(function () {
    if (player.Vitesse > monster.Vitesse) {
        $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
        monster.Pv -= player.Attaque;
        $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} points de vie !</p>`);
        if (monster.Pv > 0) {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        }
    } else {
        $("#messages").append(`<p>Le monstre vous attaque !</p>`);
        player.Pv -= monster.Attaque;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        if (player.Pv > 0) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
            monster.Pv -= player.Attaque;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} point de vie !</p>`);
        }
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");

    FinDeCombat()
})

$("#attaque2Warrior").click(function () {
    if (player.Pm > 3) {
        player.Pm -= 3;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
            monster.Pv -= player.Attaque * 1.5;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
                monster.Pv -= player.Attaque * 1.5;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque3Warrior").click(function () {
    if (player.Pm > 6) {
        player.Pm -= 6;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
            monster.Pv -= player.Attaque * 2;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
                monster.Pv -= player.Attaque * 3;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque4Warrior").click(function () {
    if (monster.Attaque > player.Defense) {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= monster.Attaque - player.Defense;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque - player.Defense} points de vie !</p>`);
    } else {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= 0;
        $("#messages").append(`<p>Vous avez perdu 0 point de vie.</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Mage
$("#attaque1Mage").click(function () {
    if (player.Vitesse > monster.Vitesse) {
        $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
        monster.Pv -= player.Attaque;
        $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} points de vie !</p>`);
        if (monster.Pv > 0) {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        }
    } else {
        $("#messages").append(`<p>Le monstre vous attaque !</p>`);
        player.Pv -= monster.Attaque;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        if (player.Pv > 0) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
            monster.Pv -= player.Attaque;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} point de vie !</p>`);
        }
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");

    FinDeCombat()
})

$("#attaque2Mage").click(function () {
    if (player.Pm > 3) {
        player.Pm -= 3;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
            monster.Pv -= player.Attaque * 1.5;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
                monster.Pv -= player.Attaque * 1.5;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque3Mage").click(function () {
    if (player.Pm > 6) {
        player.Pm -= 6;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque3" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
            monster.Pv -= player.Attaque * 2;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque3" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
                monster.Pv -= player.Attaque * 3;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque4Mage").click(function () {
    if (monster.Attaque > player.Defense) {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= monster.Attaque - player.Defense;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque - player.Defense} points de vie !</p>`);
    } else {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= 0;
        $("#messages").append(`<p>Vous avez perdu 0 point de vie.</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Rogue
$("#attaque1Rogue").click(function () {
    if (player.Vitesse > monster.Vitesse) {
        $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
        monster.Pv -= player.Attaque;
        $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} points de vie !</p>`);
        if (monster.Pv > 0) {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        }
    } else {
        $("#messages").append(`<p>Le monstre vous attaque !</p>`);
        player.Pv -= monster.Attaque;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        if (player.Pv > 0) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
            monster.Pv -= player.Attaque;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} point de vie !</p>`);
        }
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");

    FinDeCombat()
})

$("#attaque2Rogue").click(function () {
    if (player.Pm > 3) {
        player.Pm -= 3;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
            monster.Pv -= player.Attaque * 1.5;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
                monster.Pv -= player.Attaque * 1.5;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque3Rogue").click(function () {
    if (player.Pm > 6) {
        player.Pm -= 6;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque3" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
            monster.Pv -= player.Attaque * 2;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque3" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
                monster.Pv -= player.Attaque * 3;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque4Rogue").click(function () {
    if (monster.Attaque > player.Defense) {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= monster.Attaque - player.Defense;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque - player.Defense} points de vie !</p>`);
    } else {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= 0;
        $("#messages").append(`<p>Vous avez perdu 0 point de vie.</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Archer
$("#attaque1Archer").click(function () {
    if (player.Vitesse > monster.Vitesse) {
        $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
        monster.Pv -= player.Attaque;
        $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} points de vie !</p>`);
        if (monster.Pv > 0) {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        }
    } else {
        $("#messages").append(`<p>Le monstre vous attaque !</p>`);
        player.Pv -= monster.Attaque;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
        if (player.Pv > 0) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque1" + player.Type).val()} !</p>`);
            monster.Pv -= player.Attaque;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque} point de vie !</p>`);
        }
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");

    FinDeCombat()
})

$("#attaque2Archer").click(function () {
    if (player.Pm > 3) {
        player.Pm -= 3;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
            monster.Pv -= player.Attaque * 1.5;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque2" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 3 pm !</p>`);
                monster.Pv -= player.Attaque * 1.5;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 1.5} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque3Archer").click(function () {
    if (player.Pm > 6) {
        player.Pm -= 6;
        if (player.Vitesse > monster.Vitesse) {
            $("#messages").append(`<p>Vous lancez ${$("#attaque3" + player.Type).val()} !</p>`);
            $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
            monster.Pv -= player.Attaque * 2;
            $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            if (monster.Pv > 0) {
                $("#messages").append(`<p>Le monstre vous attaque !</p>`);
                player.Pv -= monster.Attaque;
                $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            }
        } else {
            $("#messages").append(`<p>Le monstre vous attaque !</p>`);
            player.Pv -= monster.Attaque;
            $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque} points de vie !</p>`);
            if (player.Pv > 0) {
                $("#messages").append(`<p>Vous lancez ${$("#attaque3" + player.Type).val()} !</p>`);
                $("#messages").append(`<p>Vous avez perdu 6 pm !</p>`);
                monster.Pv -= player.Attaque * 3;
                $("#messages").append(`<p>Le monstre a perdu ${player.Attaque * 2} points de vie !</p>`);
            }
        }
    } else {
        $("#messages").append(`<p>Vous n'avez pas assez de pm !</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

$("#attaque4Archer").click(function () {
    if (monster.Attaque > player.Defense) {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= monster.Attaque - player.Defense;
        $("#messages").append(`<p>Vous avez perdu  ${monster.Attaque - player.Defense} points de vie !</p>`);
    } else {
        $("#messages").append(`<p>Vous vous mettez en position défensive.</p>`);
        player.Pv -= 0;
        $("#messages").append(`<p>Vous avez perdu 0 point de vie.</p>`);
    }
    $("#messages").append(`<p>------------------------------------</p>`)
    $("#messages" + player.Type).toggleClass("cacher");
    $("#messages" + player.Type).toggleClass("cacher");
    FinDeCombat()
})

function refreshPlayerData() {
    $("#pv").text(player.Pv);
    $("#pm").text(player.Pm);
    $("#pvMax").text(player.PvMax);
    $("#pmMax").text(player.PmMax);
}

//Affichage du magasin
$("#displayShop").click(function () {
    shopRefresh();
    $("#shop").toggleClass("cacher");
})

//Rafraichir les données du shop
function shopRefresh() {
    let price = [2, 5, 9, 15];
    refreshPlayerData();
    $("#playerGold").text(player.Gold);
    $("#spanPvButton").text();
    $("#spanPmButton").text();
    $("#spanAtkButton").text(price[parseInt(player.shopAtk)]);
    $("#spanDefButton").text(price[parseInt(player.shopDef)]);
}

//Bouton restaurer PV
$("#pvButton").click(function () {
    if (player.Gold >= 5) {
        player.Gold -= 5;
        player.Pv = player.PvMax;
        shopRefresh();
    }
    else;
})

//Bouton restaurer PM
$("#pmButton").click(function () {
    if (player.Gold >= 5) {
        player.Gold -= 5;
        player.Pm = player.PmMax;
        shopRefresh();
    }
    else;
})

//Bouton augmenter attaque
$("#atkButton").click(function () {
    let price = [2, 5, 9, 15];
    if (player.Gold >= price[parseInt(player.shopAtk)]) {
        player.Gold -= price[parseInt(player.shopAtk)];
        player.shopAtk += 1;
        player.Attaque += 7;
        shopRefresh();
    }
    else;
})

//Bouton augment defense
$("#defButton").click(function () {
    let price = [2, 5, 9, 15];
    if (player.Gold >= price[parseInt(player.Def)]) {
        player.Gold -= price[parseInt(player.Def)];
        player.shopDef += 1;
        player.Defense += 7;
        shopRefresh();
    }
    else;
})

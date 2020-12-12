import * as gestion from './Gestion.js';
import { Personnage } from '../Class/Personnage.js';
import { Monster } from '../Class/Monster.js';

let monsterList = ["Glout", "Tankse", "Groco", "Noxpul"];



// Génération d'un nouveau monstre selon le résultat du combat, défaite/vitoire
export function GenerationMonstre(player, monster) {
    console.log("oui");
    if (player.Pv <= 0) {
        $("#imgPlayer").toggleClass(player.Type);
        $("#imgMonster").toggleClass(monster.Type);
        player.Etape = 0;
    } else {
        monster = new Monster(monsterList[Math.floor(Math.random()*4)]);
        $("#imgMonster").toggleClass(monster.Type);
    }
    return (player, monster);
}

// Fonction de fin de combat lorsqu'une des deux entités (personnage ou monstre) atteint 0 point de vie.
export function FinDeCombat(player, monster) {
    gestion.refreshPlayerData(player);
    if (player.Pv <= 0) {
        $("#estEnCombat" + player.Type).toggleClass("cacher");
        $("#defaiteCombat").toggleClass("cacher");
        $("#fightPlayerData").toggleClass("cacher");
        $("#affichagePlayerMonster").toggleClass("cacher");
        $("#messages").empty();
        player, monster = GenerationMonstre(player, monster);
    } else if (monster.Pv <= 0) {
        player.Gold += monster.Gold;
        $("#estEnCombat" + player.Type).toggleClass("cacher");
        $("#victoireCombat").toggleClass("cacher");
        $("#fightPlayerData").toggleClass("cacher");
        $("#affichagePlayerMonster").toggleClass("cacher");
        $("#messages").empty();
        $("#imgMonster").toggleClass(monster.Type);
        player, monster = GenerationMonstre(player, monster);
    }
    gestion.autoSave(player);
    return player, monster;
}


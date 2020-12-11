import * as gestion from './Gestion.js';
import { Personnage } from '../Class/Personnage.js';
import { Monster } from '../Class/Monster.js';



// Génération d'un nouveau monstre selon le résultat du combat, défaite/vitoire
export function GenerationMonstre(player, monster) {
    console.log("oui");
    if (player.Pv <= 0) {
        $("#imgPlayer").toggleClass(player.Type);
        $("#imgMonster").toggleClass(monster.Type);
        player.Etape = 0;
    } else if (player.Etape == 0) {
        monster = new Monster("Glout");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 1) {
        $("#imgMonster").removeClass("Glout");
        monster = new Monster("Tankse");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 2) {
        $("#imgMonster").removeClass("Tankse");
        monster = new Monster("Groco");
        $("#imgMonster").toggleClass(monster.Type);
    } else if (player.Etape == 3) {
        $("#imgMonster").removeClass("Groco");
        monster = new Monster("Noxpul");
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
        player, monster = GenerationMonstre(player, monster);
    } else if (monster.Pv <= 0) {
        player.Etape += 1;
        player.Gold += monster.Gold;
        $("#estEnCombat" + player.Type).toggleClass("cacher");
        $("#victoireCombat").toggleClass("cacher");
        player, monster = GenerationMonstre(player, monster);
    }
    gestion.autoSave(player);
    return player, monster;
}


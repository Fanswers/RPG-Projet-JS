
// Fonction au clique du bouton qui lance l'attaque séléctionnée du Warrior 
export function coupDepee(player, monster) {
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

    return player, monster;
}

export function coupLourd(player, monster) {
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
    
    return player, monster;
}

export function coupPuissant(player, monster) {
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
    
    return player, monster;
}

export function positionDefenseWarrior(player, monster) {
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
    
    return player, monster;
}

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Mage
export function projectileDeFeu(player, monster) {
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

    return player, monster;
}

export function bouleDeFeu(player, monster) {
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
    
    return player, monste;
}

export function tornadeDeFeu(player, monster) {
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

    return player, monste;
}

export function positionDefenseMage(player, monster) {
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
    
    return player, monster;
}

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Rogue
export function coupDeDague(player, monster) {
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

    return player, monster;
}

export function entaille(player, monster) {
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
    
    return player, monster;
}

export function coupCritique(player, monster) {
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
    
    return player, monster;
}

export function positionDefenseRogue(player, monster) {
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

    return player, monster;
}

// Fonction au clique du bouton qui lance l'attaque séléctionnée du Archer
export function flecheRapide(player, monster) {
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

    return player, monster;
}

export function flecheMultiple(player, monster) {
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
    
    return player, monster;
}

export function pluieDeFleche(player, monster) {
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
    
    return player, monster;
}

export function positionDefenseArcher(player, monster) {
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
    
    return player, monster;
}

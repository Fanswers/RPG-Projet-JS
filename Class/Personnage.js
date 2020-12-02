import { Entity } from './Entity.js';

export class Personnage extends Entity{
    constructor(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold) {
        super(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold);
        switch(Type)
        {
            case "Warrior":
                Pv = 140;
                Attaque = 40;
                Defense = 30;
                Vitesse = 10;
                Esquive = 2;
                Pm = 10;
                Crit = 5;
                Gold = 0;
                break;

            case "Mage":
                Pv = 100;
                Attaque = 40;
                Defense = 30;
                Vitesse = 10;
                Esquive = 2;
                Pm = 10;
                Crit = 5;
                Gold = 0;
                break;

            case "Rogue":
                Pv = 100;
                Attaque = 40;
                Defense = 30;
                Vitesse = 10;
                Esquive = 2;
                Pm = 10;
                Crit = 5;
                Gold = 0;
                break;

            case "Rogue":
                Pv = 100;
                Attaque = 40;
                Defense = 30;
                Vitesse = 10;
                Esquive = 2;
                Pm = 10;
                Crit = 5;
                Gold = 0;
                break;
        }
    }
}
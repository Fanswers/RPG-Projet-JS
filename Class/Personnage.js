import { Entity } from './Entity.js';

export class Personnage extends Entity {
    constructor(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold, Etape) {
        super(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold, Etape);
        switch (Type) {
            case "Warrior":
                this.Pv = 140;
                this.PvMax = 140;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.PmMax = 10;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                break;

            case "Mage":
                this.Pv = 100;
                this.PvMax = 140
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.PmMax = 10;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                break;

            case "Rogue":
                this.Pv = 100;
                this.PvMax = 140;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.PmMax = 10;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                break;

            case "Archer":
                this.Pv = 100;
                this.PvMax = 140;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.PmMax = 10;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                break;
        }
    }
}
import { Entity } from './Entity.js';

export class Personnage extends Entity {
    constructor(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold) {
        super(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold);
        switch (Type) {
            case "Warrior":
                this.Pv = 140;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.Crit = 5;
                this.Gold = 0;
                break;

            case "Mage":
                this.Pv = 100;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.Crit = 5;
                this.Gold = 0;
                break;

            case "Rogue":
                this.Pv = 100;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.Crit = 5;
                this.Gold = 0;
                break;

            case "Archer":
                this.Pv = 100;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 10;
                this.Crit = 5;
                this.Gold = 0;
                break;
        }
    }
}
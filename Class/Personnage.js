import { Entity } from './Entity.js';

export class Personnage extends Entity {
    constructor(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold, Etape, shopAtk, shopDef) {
        super(Type, Name, Pv, PvMax, Defense, Vitesse, Esquive, Attaque, Pm, PmMax, Crit, Gold, Etape, shopAtk, shopDef);
        switch (Type) {
            case "Warrior":
                this.Pv = 200;
                this.PvMax = 200;
                this.Attaque = 60;
                this.Defense = 30;
                this.Vitesse = 5;
                this.Esquive = 2;
                this.Pm = 10;
                this.PmMax = 10;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                this.shopAtk = 0;
                this.shopDef = 0;
                break;

            case "Mage":
                this.Pv = 170;
                this.PvMax = 170;
                this.Attaque = 40;
                this.Defense = 30;
                this.Vitesse = 10;
                this.Esquive = 2;
                this.Pm = 15;
                this.PmMax = 15;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                this.shopAtk = 0;
                this.shopDef = 0;
                break;

            case "Rogue":
                this.Pv = 160;
                this.PvMax = 160;
                this.Attaque = 55;
                this.Defense = 30;
                this.Vitesse = 20;
                this.Esquive = 3;
                this.Pm = 10;
                this.PmMax = 10;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                this.shopAtk = 0;
                this.shopDef = 0;
                break;

            case "Archer":
                this.Pv = 160;
                this.PvMax = 160;
                this.Attaque = 45;
                this.Defense = 30;
                this.Vitesse = 15;
                this.Esquive = 2;
                this.Pm = 12;
                this.PmMax = 12;
                this.Crit = 5;
                this.Gold = 0;
                this.Etape = 0;
                this.shopAtk = 0;
                this.shopDef = 0;
                break;
        }

        
    }

    
}
import { Entity } from './Entity.js';

export class Monster extends Entity {
  constructor(Type, Name, Pv, Defense, Vitesse, Esquive, Attaque, Pm, Crit, Gold) {
    super(Type, Name, Pv, Defense, Vitesse, Esquive, Attaque, Pm, Crit, Gold);
    switch (Type) {
      case 'Glout':
        this.Pv = 80;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 15;
        this.Pm = 15;
        this.Crit = 0, 1;
        this.Gold = 7;
        break;

      case 'Tankse':
        this.Pv = 120;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 40;
        this.Pm = 15;
        this.Crit = 0, 1;
        this.Gold = 9;
        break;

      case 'Groco':
        this.Pv = 150;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 45;
        this.Pm = 15;
        this.Crit = 0, 1;
        this.Gold = 11;
        break;

      case 'Noxpul':
        this.Pv = 180;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 55;
        this.Pm = 15;
        this.Crit = 0, 1;
        this.Gold = 16;
        break;
    }
  }
}
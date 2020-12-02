import { Entity } from './Entity.js';

export class Monster extends Entity {
  constructor(Type, Name, Pv, Defense, Vitesse, Esquive, Attaque, Pm, Crit, Gold) {
    super(Type, Name, Pv, Defense, Vitesse, Esquive, Attaque, Pm, Crit, Gold);
    switch (Name) {
      case 'Glout':
        this.Pv = 100;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 25;
        this.Pm = 15;
        this.Crit = 0,1;
        this.Gold = 2;
        break;

      case 'Groco':
        this.Pv = 100;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 25;
        this.Pm = 15;
        this.Crit = 0,1;
        this.Gold = 2;
        break;

      case 'Tankse':
        this.Pv = 100;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 25;
        this.Pm = 15;
        this.Crit = 0, 1;
        this.Gold = 2;
        break;

      case 'Noxpul':
        this.Pv = 100;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 25;
        this.Pm = 15;
        this.Crit = 0,1;
        this.Gold = 2;
        break;

      case 'Sacdor':
        this.Pv = 100;
        this.Defense = 5;
        this.Vitesse = 50;
        this.Esquive = 0, 3;
        this.Attaque = 25;
        this.Pm = 15;
        this.Crit = 0,1;
        this.Gold = 2;
        break;
    }
  }
}
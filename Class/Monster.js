import { Entity } from './Entity.js';

export class Monster extends Entity {
  constructor(Type, Name, Pv, Defense, Vitesse, Esquive, Attaque, Pm, Crit, Gold) {
    super(Type, Name, Pv, Defense, Vitesse, Esquive, Attaque, Pm, Crit, Gold);
    switch (Name) {
      case 'Glout':
        Pv = 100;
        Defense = 5;
        Vitesse = 50;
        Esquive = 0, 3;
        Attaque = 25;
        Pm = 15;
        Crit = 0, 1;
        Gold = 2;
        break;

      case 'Groco':
        Pv = 100;
        Defense = 5;
        Vitesse = 50;
        Esquive = 0, 3;
        Attaque = 25;
        Pm = 15;
        Crit = 0, 1;
        Gold = 2;
        break;

      case 'Tankse':
        Pv = 100;
        Defense = 5;
        Vitesse = 50;
        Esquive = 0, 3;
        Attaque = 25;
        Pm = 15;
        Crit = 0, 1;
        Gold = 2;
        break;

      case 'Noxpul':
        Pv = 100;
        Defense = 5;
        Vitesse = 50;
        Esquive = 0, 3;
        Attaque = 25;
        Pm = 15;
        Crit = 0, 1;
        Gold = 2;
        break;

      case 'Sacdor':
        Pv = 100;
        Defense = 5;
        Vitesse = 50;
        Esquive = 0, 3;
        Attaque = 25;
        Pm = 15;
        Crit = 0, 1;
        Gold = 2;
        break;
    }
  }
}
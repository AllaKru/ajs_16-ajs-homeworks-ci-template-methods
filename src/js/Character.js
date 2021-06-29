
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    // this.attack = attack;
    // this.defence = defence;

    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10 || (this.type !== 'Bowman'
      && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead'
      && this.type !== 'Zombie')) {
      throw new Error('Некорректные значения!');
    }
  }
}

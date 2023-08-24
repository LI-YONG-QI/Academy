class Character {
  constructor(public name: string, public life: number, public power: number) {}

  setLife(newLife: number) {
    this.life = newLife;
  }
}

export interface CharacterData {
  name: string;
  life: number;
  power: number;
}

class Player extends Character {
  constructor(data: CharacterData) {
    super(data.name, data.life, data.power);
  }
}

class Monster extends Character {
  constructor(data: CharacterData) {
    super(data.name, data.life, data.power);
  }
}

export { Character, Player, Monster };

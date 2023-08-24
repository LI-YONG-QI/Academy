class Character {
  constructor(public life: number, public power: number) {}
}

interface CharacterData {
  life: number;
  power: number;
}

class Player extends Character {
  constructor(data: CharacterData) {
    super(data.life, data.power);
  }
}

class Monster extends Character {
  constructor(data: CharacterData) {
    super(data.life, data.power);
  }
}

export { Character, Player, Monster };

import { Monster, Player } from "./character";

class Level {
  public id: number;
  public monster: Monster;
  public player: Player;
  public isPass: boolean = false;

  constructor(id: number, monster: Monster, player: Player) {
    this.id = id;
    this.monster = monster;
    this.player = player;
  }

  public fight() {
    this.monster.life -= this.player.power;
    if (this.monster.life <= 0) {
      this.isPass = true;
      return;
    }
    this.player.life -= this.monster.power;
  }
}

export { Level };

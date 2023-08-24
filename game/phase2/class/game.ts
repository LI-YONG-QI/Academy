import { Player, Monster } from "./character";
import { Level } from "./level";

class Game {
  fight(player: Player, level: Level): boolean {
    let isSuccess = true;
    const monster: Monster = level.monster;

    while (true) {
      monster.setLife(monster.life - player.power);

      //怪物死亡
      if (monster.life <= 0) {
        isSuccess = true;
        level.setIsPass(true);
        break;
      } else {
        player.setLife(player.life - monster.power);
      }

      //玩家死亡
      if (player.life <= 0) {
        isSuccess = false;
        break;
      }
    }

    return isSuccess;
  }
}

export { Game };

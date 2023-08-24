import { Player, Monster, Level } from "./class";

function createLevel(id: number): Level {
  const m = new Monster({ life: 10, power: 3 });
  const p = new Player({ life: 15, power: 5 });
  const thisLevel = new Level(id, m, p);
  return thisLevel;
}

function main() {
  const level1 = createLevel(1);

  console.log(`monster: {${level1.monster.life}, ${level1.monster.power}}`);
  console.log(`player: {${level1.player.life}, ${level1.player.power}}`);
  console.log(`fighting...`);

  while (!level1.isPass) {
    level1.fight();
    console.log(`...`);
  }

  console.log(`###END###`);
  console.log(`monster: {${level1.monster.life}, ${level1.monster.power}}`);
  console.log(`player: {${level1.player.life}, ${level1.player.power}}`);
}

main();

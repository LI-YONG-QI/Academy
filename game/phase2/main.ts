import { Game, Level, Player, Monster, CharacterData } from "./class";

function createGame(): Game {
  return new Game();
}

function createPlayer(name: string, life: number, power: number): Player {
  return new Player({ name, life, power });
}

function createLevel(id: number, monsterData: CharacterData): Level {
  const monster = new Monster(monsterData);
  return new Level(id, monster);
}

function test() {
  const game = createGame();
  const player = createPlayer("Jack", 10, 5);
  const level = createLevel(1, { name: "evil", life: 7, power: 3 });

  console.log(`Before Fight ...`);
  console.log(
    `Player name: ${player.name}, life: ${player.life}, power: ${player.power}`
  ); // Jack, 10, 5
  console.log(`Level is pass? -> ${level.isPass}`); // false

  const isSuccess = game.fight(player, level);
  console.log("After fight ...");
  console.log(`Fight result is ${isSuccess}`); // true
  console.log(`Player life is ${player.life}`); // 7
  console.log(`Level is pass? -> ${level.isPass}`); // true
}

function test2() {
  const game = createGame();
  const player = createPlayer("Jack", 10, 1);
  const level = createLevel(1, { name: "evil", life: 7, power: 8 });

  console.log(`Before Fight ...`);
  console.log(
    `Player name: ${player.name}, life: ${player.life}, power: ${player.power}`
  ); // Jack, 10, 5
  console.log(`Level is pass? -> ${level.isPass}`); // false

  const isSuccess = game.fight(player, level);
  console.log("After fight ...");
  console.log(`Fight result is ${isSuccess}`); // true
  console.log(`Player life is ${player.life}`); // 7
  console.log(`Level is pass? -> ${level.isPass}`); // true
}

test();

console.log("====================================");
test2();

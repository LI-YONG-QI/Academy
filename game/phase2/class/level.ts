import { Monster } from "./character";

class Level {
  public isPass: boolean = false;
  constructor(public id: number, public monster: Monster) {}

  setIsPass(status: boolean) {
    this.isPass = status;
  }
}

export { Level };

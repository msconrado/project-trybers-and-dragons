import Race from './Race';

class Halfling extends Race {
  private __maxLifePoints: number;
  private static _halflingCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 60;
    Halfling.halflingCount();
  }

  private static halflingCount() {
    this._halflingCount += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._halflingCount;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Halfling;

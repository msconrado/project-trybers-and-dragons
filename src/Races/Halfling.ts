import Race from './Race';

class Halfling extends Race {
  private __maxLifePoints: number;
  private static _halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 60;
    Halfling.halflingInstances();
  }

  private static halflingInstances() {
    this._halflingInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._halflingInstances;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Halfling;

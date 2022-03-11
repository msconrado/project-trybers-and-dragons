import Race from './Race';

class Orc extends Race {
  private __maxLifePoints: number;
  private static _orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 74;
    Orc.orcCount();
  }

  private static orcCount() {
    this._orcCount += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._orcCount;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Orc;

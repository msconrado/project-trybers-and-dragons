import Race from './Race';

class Orc extends Race {
  private __maxLifePoints: number;
  private static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 74;
    Orc.orcInstances();
  }

  private static orcInstances() {
    this._orcInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._orcInstances;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Orc;

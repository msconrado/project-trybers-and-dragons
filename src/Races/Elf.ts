import Race from './Race';

class Elf extends Race {
  private __maxLifePoints: number;
  private static _elffInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 99;
    Elf.elfInstances();
  }

  private static elfInstances() {
    this._elffInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._elffInstances;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Elf;

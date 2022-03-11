import Race from './Race';

class Elf extends Race {
  private __maxLifePoints: number;
  private static _elfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 99;
    Elf.elfCount();
  }

  private static elfCount() {
    this._elfCount += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._elfCount;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Elf;

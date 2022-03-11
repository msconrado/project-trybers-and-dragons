import Race from './Race';

class Dwarf extends Race {
  private __maxLifePoints: number;
  private static _dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 80;
    Dwarf.dwarfCount();
  }

  private static dwarfCount() {
    this._dwarfCount += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._dwarfCount;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Dwarf;

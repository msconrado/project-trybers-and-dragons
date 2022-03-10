import Race from './Race';

class Dwarf extends Race {
  private __maxLifePoints: number;
  private static _dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.__maxLifePoints = 80;
    Dwarf.dwarfInstances();
  }

  private static dwarfInstances() {
    this._dwarfInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._dwarfInstances;
  }

  public get maxLifePoints(): number {
    return this.__maxLifePoints;
  }
}

export default Dwarf;

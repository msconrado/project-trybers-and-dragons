import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _hability: EnergyType;
  private static _rangerCount = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Ranger.rangerCount();
  }

  private static rangerCount() {
    this._rangerCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._rangerCount;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Ranger;

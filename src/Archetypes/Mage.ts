import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _hability: EnergyType;
  private static _mageCount = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Mage.mageCount();
  }

  private static mageCount() {
    this._mageCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._mageCount;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Mage;

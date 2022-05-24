import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public static _count = 0;
  private _damageType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._count += 1;
    this._damageType = 'mana';
  }

  get energyType(): EnergyType {
    return this._damageType;
  }

  static createdArchetypeInstances(): number {
    return this._count;
  }
}
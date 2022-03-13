import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    private _player1: Fighter,
    private _monstersOrPlayer: SimpleFighter[] | Fighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    this._monstersOrPlayer.forEach((monster) => {
      for (
        let index = 0;
        this._player1.lifePoints > 0 && monster.lifePoints > 0;
        index += 1
      ) {
        this._player1.attack(monster);
        monster.attack(this._player1);
      }
    });

    return super.fight();
  }
}

export default PVE;

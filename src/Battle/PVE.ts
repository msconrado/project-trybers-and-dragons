import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    public player: Fighter,
    public monstersOrPlayer: Monster[] | Fighter | SimpleFighter,
  ) {
    super(player);
  }
}

export default PVE;

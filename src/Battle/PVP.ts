import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    public player1: Fighter,
    public player2: Fighter,
  ) {
    super(player1);
  }
}

export default PVP;

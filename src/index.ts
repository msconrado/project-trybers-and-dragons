import { PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Goku');
const player2 = new Character('Vegeta');
const player3 = new Character('Piccolo');

for (let index = 0; index < 10; index += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

export { player1, player2, player3, monster1, monster2 };

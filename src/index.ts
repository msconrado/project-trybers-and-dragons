import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';

const player1 = new Character('Goku');

const player2 = new Character('Vegeta');

const player3 = new Character('Piccolo');

for (let index = 0; index < 10; index += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

export { player1, player2, player3, monster1, monster2 };

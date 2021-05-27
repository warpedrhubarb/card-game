import { cons, car } from '@hexlet/pairs';
import {
  cons as consList, l, random, head, reverse,
} from '@hexlet/pairs-data';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} has been killed`), log);
    }

    const card = customRandom(cards);

    const cardName = card('getName');
    const damage = card('damage', health2);

    const newHealth = health2 - damage;
    const message = `Player ${name1} used ${cardName} against ${name2} and caused ${damage} damage`;

    const stat = cons((order === 1 ? cons(health1, newHealth) : cons(newHealth, health1)), message);
    const newLog = cons(stat, log);

    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Start the battle');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

const make = (cards, customRandom = random) => (
  (player1, player2) => run(player1, player2, cards, customRandom)
);

export default make;

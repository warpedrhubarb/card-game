import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  cons as consList, l, random, head, reverse,
} from '@hexlet/pairs-data';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const newHealth = health2 - damage;
    const message = `Player ${name1} used ${cardName} against ${name2} and caused ${damage} damage`;

    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} has been killed`), log);
    }

    const stat = cons((order === 1 ? cons(health1, newHealth) : cons(newHealth, health1)), message);
    const newLog = cons(stat, log);

    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Start the battle');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards) => (name1, name2) => run(name1, name2, cards);

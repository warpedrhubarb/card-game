import { cons, car, cdr } from '@hexlet/pairs';
import { attach } from '@hexlet/tagged-types';
import { definer } from '../generic.js';

const defmethod = definer('SimpleCard');
const make = (name, damage) => attach('SimpleCard', cons(name, damage));

export default make;

defmethod('getName', (self) => car(self));
defmethod('damage', (self) => cdr(self));

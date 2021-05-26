import { cons, car, cdr } from '@hexlet/pairs';
import {
  cons as consList, l, head, tail,
} from '@hexlet/pairs-data';
import { attach, typeTag, contents } from '@hexlet/tagged-types';

let methods = l();

export const getMethod = (obj, methodName) => {
  const type = typeTag(obj);
  const iter = (methodsList) => {
    const current = head(methodsList);
    const rest = tail(methodsList);
    const currentName = car(contents(current));

    if (typeTag(current) === type && currentName === methodName) {
      return cdr(contents(current));
    }

    return iter(rest);
  };

  return iter(methods);
};

export const definer = (type) => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};

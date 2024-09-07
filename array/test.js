import {
  items,
  each,
  map,
  reduce,
  find,
  filter,
  nestedArray,
  flatten,
} from "./solutions.js";

each(items, (item) => {
  console.log(item * 2);
});

console.log(map(items, (item) => item + 2));

reduce(
  items,
  (acc, curr) => {
    acc += curr;
    return acc;
  },
  0
);

console.log(find(items, (item) => item>4))

console.log(filter(items, (item)=> item<4))

console.log(flatten(nestedArray))


"use strict";

const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/

function each(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i]);
    }
  }
}

function map(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    let arr = [];
    for (let i = 0; i < elements.length; i++) {
      arr.push(cb(elements[i]));
    }
    return arr;
  }
}

function reduce(elements, cb, startingValue) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    let a = startingValue;
    for (let i = 0; i < elements.length; i++) {
      a += cb(0, elements[i]);
    }
    console.log(a);
  }
}

function find(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    for (let i of elements) {
      if (cb(i)) return i;
    }
    return -1;
  }
}

function filter(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    let arr = [];
    for (let i of elements) {
      if (cb(i)) arr.push(i);
    }
    return arr;
  }
}

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

let arr = [];
function flatten(elements) {
    for(let i = 0; i<elements.length; i++){
        if(!Array.isArray(elements[i]) ) arr.push(elements[i])
        else flatten(elements[i]);
    }
    return arr;
}

export { items, each, map, reduce, find, filter, nestedArray, flatten };

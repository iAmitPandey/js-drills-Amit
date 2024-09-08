"use strict";

function keys(obj) {
  let keys = [];
  for (let i in obj) {
    keys.push(i);
  }
  return keys;
}

function values(obj) {
  let value = [];
  for (let i in obj) {
    value.push(obj[i]);
  }
  return value;
}

function mapObject(obj, cb) {
  let key = keys(obj);
  let len = Object.keys(obj).length;
  let newObj = {};
  for (let i = 0; i < len; i++) {
    newObj[key[i]] = cb(obj[key[i]]);
    // console.log(cb(obj[key[i]]))
  }
  return newObj;
}

function pairs(obj) {
  let ans = [];
  let key = keys(obj);
  let value = values(obj);
  for (let i = 0; i < key.length; i++) {
    ans.push([key[i], value[i]]);
  }
  return ans;
}

/* STRETCH PROBLEMS */

function invert(obj) {
  let swapedObj = {};
  let key = keys(obj);
  let value = values(obj);
  for (let i = 0; i < key.length; i++) {
    swapedObj[value[i]] = key[i];
  }
  return swapedObj;
}

function defaults(obj, defaultProps) {
  for (let key in defaultProps) {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}

export { keys, values, mapObject, pairs, invert, defaults };

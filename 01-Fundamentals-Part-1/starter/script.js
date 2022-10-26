"use strict";

const calcAvg = (a, b, c) => (a + b + c) / 3;

const checkWinner = (a, aName, b, bName) => {
  if (a >= b * 2) {
    return `${aName} wins (${a} vs. ${b})`;
  }
  if (b >= a * 2) {
    return `${bName} wins (${b} vs. ${a})`;
  }
  return `No team wins`;
};

// const a = calcAvg(44, 23, 71);
const a = calcAvg(85, 54, 41);
const b = calcAvg(23, 34, 27);

console.log(a);
console.log(b);
console.log(checkWinner(a, "Dolphins", b, "Koalas"));

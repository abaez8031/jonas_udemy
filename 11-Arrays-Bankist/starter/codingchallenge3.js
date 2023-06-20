///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calculateAverageHumanAge = ages =>
  ages.map(age => age <= 2 ? age * 2 : (age * 4) + 16
  ).filter(age => age >= 18).reduce((acc,age, i, arr) =>
    acc + age / arr.length, 0)

console.log(calculateAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calculateAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

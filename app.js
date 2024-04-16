console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return plusNumber + number;
  };
}
const plus15 = plus(15);

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// forEach is a different way to iterate

users.forEach((user) => {
  console.log(user.name);
});

/*users.forEach((user) => {
  console.log(user.name);
});*/

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//Map is looking for objects with names scores

const namesAndScores = users.map((element) => {
  return {
    name: element.name,
    score: element.score,
  };
});

//let namesAndScores = users.map(({ name, score }) => ({ name, score }));

console.log(namesAndScores);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Filter we look at each element and answer this question:
//Should we keep this element? (yes, or no)

const userActive = users.filter((user) => {
  console.log(user);
  return user.isActive;
});

//const userActive = users.filter((user) => user.isActive === true);

console.log(userActive);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

// Sort re-arrange the order of the element in the array
//It does so based on some provided criteria
// .sort() will change the array directly

users.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  } else {
    return 0;
  }
});

//users.sort((a, b) => b.score - a.score);

console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

// Reduce simplify all the information down to one single piece of info.

const sumScore = users.reduce((accumulator, currentUser) => {
  return accumulator + currentUser.score;
}, 0);
let averageScore = sumScore / users.length;

console.log(sumScore);
console.log(averageScore);

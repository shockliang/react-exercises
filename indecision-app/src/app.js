// import "./utils";
// import subtract, { square, add } from "./utils";

// console.log("app.js is running!");
// console.log(square(4));
// console.log(add(1, 3));
// console.log(subtract(100, 19));

import isSenior, { isAdult, canDrink } from "./person";

console.log(
  `20 years old is adult: ${isAdult(20)}, and can drink:${canDrink(20)}`
);

console.log(`66 years old is senior: ${isSenior(66)}`);

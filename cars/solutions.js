"use strict";

const isValidArg = (inventory) => {
  if (inventory !== null && inventory !== undefined) {
    if (
      inventory.length > 0 &&
      inventory.some(
        (item) =>
          typeof item === "object" && item !== null && !Array.isArray(item)
      )
    ) {
      return true;
    }
  }
  return false;
};

// ==== Problem #1 ====

// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

let year, maker, model;
const carsInfo = (inventory) => {
  if (isValidArg(inventory)) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].id == 33) {
        year = inventory[i].car_year;
        maker = inventory[i].car_make;
        model = inventory[i].car_model;
        return inventory[i];
      } else continue;
    }
  }
};
console.log(`Car 33 is a ${year}  ${maker}  ${model}`);

export { carsInfo };

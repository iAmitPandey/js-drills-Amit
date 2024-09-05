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
  } else {
    console.log("Invalid arguement");
    return;
  }
};

// ==== Problem #1 ====

// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

let info = [];
const carsInfo = (inventory) => {
  if (isValidArg(inventory)) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].id == 33) {
        info.push(inventory[i].car_year);
        info.push(inventory[i].car_make);
        info.push(inventory[i].car_model);

        return inventory[i];
      } else continue;
    }
    console.log(info);
  }
};

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");

const lastCarInfo = (inventory) => {
  if (isValidArg(inventory)) {
    let data = inventory[inventory.length - 1];
    console.log(data.car_make);
    console.log(data.car_model);
    console.log(`Last car is a ${data.car_make}  ${data.car_model}`);
  }
};

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const carModels = (inventory) => {
  if (isValidArg(inventory)) {
    let modelData = [];
    for (let obj of inventory) {
      modelData.push(obj.car_model);
    }
    modelData.sort();
    console.log(modelData);
    return modelData;
  }
};

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const carYear = (inventory) => {
  if (isValidArg(inventory)) {
    let modelData = [];
    for (let obj of inventory) {
      modelData.push(obj.car_year);
    }
    modelData.sort();
    console.log(modelData);
    return modelData;
  }
};

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const olderCar = (inventory) => {
  if (isValidArg(inventory)) {
    let yearData = carYear(inventory);
    let olderCarsData = [];
    for (let car of yearData) {
      if (car < 2000) olderCarsData.push(car);
    }
    console.log(olderCarsData.length);
    return olderCarsData;
  }
};

// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const BMWAndAudi = (inventory) => {
  if (isValidArg(inventory)) {
    let carModel = [];
    for (let obj of inventory) {
      if (obj.car_make == "Audi" || obj.car_make == "BMW") {
        carModel.push(obj.car_model);
      }
    }
    console.log(JSON.stringify(carModel))
    // console.log(carModel)
    return carModel;
  }
};

export { carsInfo, lastCarInfo, carModels, carYear, olderCar, BMWAndAudi };

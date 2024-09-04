"use strict";
//    function that accesses and returns the email addresses of all individuals.

const emailAddressOfAll = (employee) => {
  let regex = /^[a-z0-9_.+-]+@[a-z]+.[a-z]+$/gi;

  if (employee && employee.hasOwnProperty("email")) {
    if (employee.email == "") {
      console.log("Email is empty");
      return;
    }
    if (regex.test(employee.email)) {
      // console.log(employee.email);
      return employee.email;
    } else {
      console.log("Invalid email");
      return;
    }
  } else {
    console.log("No email id");
    return;
  }
};

// function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const hobbyInAge = (employee, age) => {
  if (age && employee.hasOwnProperty("age")) {
    let hobbies = [];
    if (employee.hobbies && employee.hobbies.length > 0) {
      for (let i = 0; i < employee.hobbies.length; i++) {
        hobbies.push(employee.hobbies[i]);
      }
      console.log(hobbies, "\n");
    }
  } else {
    return;
  }
};

// function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

const displayNamesOfStudent = (employee) => {
  if (employee && employee.hasOwnProperty("isStudent")) {
    employee.country && employee.country == "Australia"
      ? console.log(employee.name)
      : "";
  } else {
    console.log("Not a student");
  }
};

// function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const nameAndCity = (arrayOfObjects) => {
  if (arrayOfObjects) {
    if (arrayOfObjects.length < 4) {
      console.log("Element not found");
    } else {
      console.log(arrayOfObjects[3].name, arrayOfObjects[3].city);
    }
  } else {
    console.log("No data");
  }
};

// Implement a loop to access and print the ages of all individuals in the dataset.

const ageOfAll = (arrayOfObjects) => {
  if (arrayOfObjects) {
    if (arrayOfObjects.length == 0) console.log("Empty");
    else {
      for (let i = 0; i < arrayOfObjects.length; i++) {
        let name = arrayOfObjects[i].name;
        let age = arrayOfObjects[i].age;
        console.log(`Age of ${name} is ${age}`);
      }
    }
  } else console.log("Null Input");
};

// function to retrieve and display the first hobby of each individual in the dataset.

const firstHobby = (arrayOfObjects) => {
  if (arrayOfObjects && arrayOfObjects.length > 0) {
    for (let i = 0; i < arrayOfObjects.length; i++) {
      let hobbies = arrayOfObjects[i].hobbies;
      console.log(hobbies[0]);
    }
  } else console.log("Error");
};

// function that accesses and prints the names and email addresses of individuals aged 25.

const userInfo = (employee) => {
  if (employee && Object.keys(employee).length > 0) {
    let name = employee.name;
    let email = employee.email;

    console.log(`Name: ${name}\nEmail: ${email}\n\n `);
  } else {
    console.log("Data not found");
  }
};

// Implement a loop to access and log the city and country of each individual in the dataset.

const cityAndCountry = (employee) => {
  if (employee && Object.keys(employee).length > 0) {
    let city = employee.city;
    let country = employee.country;

    console.log(city, country);
  }else{
    console.log("No data")
  }
};

export {
  emailAddressOfAll,
  hobbyInAge,
  displayNamesOfStudent,
  nameAndCity,
  ageOfAll,
  firstHobby,
  userInfo,
  cityAndCountry,
};

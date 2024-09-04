import arrayOfObjects from './persons.js';
import {emailAddressOfAll, hobbyInAge, displayNamesOfStudent} from './solutions.js'


//    function that accesses and returns the email addresses of all individuals.

for(let i = 0; i<arrayOfObjects.length; i++){
    emailAddressOfAll(arrayOfObjects[i]);
    emailAddressOfAll(undefined);
    emailAddressOfAll(null);
    emailAddressOfAll({});
}

// function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

for(let i = 0; i<arrayOfObjects.length; i++){
    hobbyInAge(arrayOfObjects[i], arrayOfObjects[i].age);
    hobbyInAge(undefined, 0);
    hobbyInAge(null, null);
    hobbyInAge({}, 0);
}

// function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

for(let i = 0; i<arrayOfObjects.length; i++){
    displayNamesOfStudent(arrayOfObjects[i]);
    displayNamesOfStudent({})
    displayNamesOfStudent(null)
    displayNamesOfStudent(undefined)
}
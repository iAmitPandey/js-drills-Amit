import arrayOfObjects from './persons.js';
import {emailAddressOfAll} from './solutions.js'


//    function that accesses and returns the email addresses of all individuals.

for(let i = 0; i<arrayOfObjects.length; i++){
    emailAddressOfAll(arrayOfObjects[i]);
    emailAddressOfAll(undefined);
    emailAddressOfAll(null);
    emailAddressOfAll({});
}


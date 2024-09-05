import { inventory } from "./cars.js";
import { carsInfo, lastCarInfo, carModels } from "./solutions.js";



// ==== Problem #1 ====

carsInfo(inventory)
carsInfo([])
carsInfo(null)
carsInfo(undefined)
carsInfo([0]);
carsInfo({})


// ============== Problem #2 =================

lastCarInfo(inventory)
lastCarInfo([])
lastCarInfo({})
lastCarInfo(undefined)
lastCarInfo(null)



// ============== Problem #3 =================

carModels(inventory)
carModels([])
carModels(0)
carModels(null)
carModels(undefined)
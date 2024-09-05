import { inventory } from "./cars.js";
import { carsInfo, lastCarInfo, carModels, carYear, olderCar } from "./solutions.js";



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

// ============= Problem #4 =================

carYear(inventory)
carYear([])
carYear(0)
carYear(null)
carYear(undefined)
carYear({})



// ==== Problem #5 ====

olderCar(inventory)
olderCar([])
olderCar({})
olderCar(null)
olderCar(undefined)
olderCar(0)
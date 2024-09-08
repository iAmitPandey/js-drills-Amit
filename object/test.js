import { testObject } from "./objects.js";
import { keys,values, mapObject, pairs, invert, defaults } from "./solution.js";


console.log(keys(testObject))

console.log(values(testObject))

console.log(mapObject(testObject, (item)=>{
    return (typeof(item) ==="string"? item += ' D': item +=1)

}))

console.log(pairs(testObject))

console.log(invert(testObject))

console.log(defaults(testObject, {country: "India"}))
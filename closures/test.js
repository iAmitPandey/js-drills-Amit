import { counterFactory, limitFunctionCallCount, cacheFunction } from "./solutions.js";

const counter = counterFactory();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1



const limitFunctionCall = limitFunctionCallCount((data)=> data, 3)

for(let i=0; i<10; i++){
    console.log(limitFunctionCall("hello"))
}

let cache = cacheFunction((data)=>data*10)
console.log(cache(5))
console.log(cache(4))
console.log(cache(3))
console.log(cache(5))

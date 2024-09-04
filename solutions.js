import {arrayOfObjects} from './persons';

const  emailAddressOfAll = (arrayOfObjects) =>{
    if(!Array.isArray(arrayOfObjects)){
        console.log("Pass a valid array");
        return;
    }
    let email=[];
    for(let i=0;i<arrayOfObjects.length;i++){
        email.push(arrayOfObjects[i].email);
    }
    return email;
}




export { emailAddressOfAll};


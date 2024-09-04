'use strict'
//    function that accesses and returns the email addresses of all individuals.


const  emailAddressOfAll = (employee) =>{
    
        let regex =/^[a-z0-9_.+-]+@[a-z]+.[a-z]+$/gi;

        if(employee && employee.hasOwnProperty("email")){

            if(employee.email == ""){
                console.log("Email is empty");
                return;
            }
            if(regex.test(employee.email)){
                console.log(employee.email);
                return;
            }
            else{
                console.log("Invalid email");
                return;
            }
        }
        else{
            console.log("Employee has not an email id");
            return;
        }
}


// function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.


const hobbyInAge = (employee, age) =>{
    if(age && employee.hasOwnProperty("age")){

        let hobbies = [];
        if(employee.hobbies && employee.hobbies.length>0){
            for(let i = 0; i<employee.hobbies.length; i++){
                hobbies.push(employee.hobbies[i]);
            }
            console.log(hobbies , "\n")
        }
        
    }
    else{
        return;
    }
}

// function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

const displayNamesOfStudent = (employee) =>{
    if(employee && employee.hasOwnProperty("isStudent")){
        (employee.country && employee.country == "Australia") ? console.log(employee.name) : "";
    }else{
        console.log("Not a student");
    }
}

// function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const nameAndCity = (arrayOfObjects) =>{
    if(arrayOfObjects ){
        if(arrayOfObjects.length<4){
            console.log("Element not found");
        }else{
            console.log(arrayOfObjects[3].name ,  arrayOfObjects[3].city)
        }
    }else {
        console.log("No data")
    }
}


export { emailAddressOfAll, hobbyInAge, displayNamesOfStudent, nameAndCity};

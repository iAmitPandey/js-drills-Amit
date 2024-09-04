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



export { emailAddressOfAll};

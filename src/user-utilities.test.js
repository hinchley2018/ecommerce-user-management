//this allows us to use the functions exported from this module
const userUtilities = require('./user-utilities')

//Test createUser returns a valid user
function testCreateUserShouldReturnAValidUser(){
    
    let user = userUtilities.createUser("Jon", "Hinchley", "email@email.com","1234567890");

    //If it passes all our conditions, return passes    
    if ( 
        user.firstName === "Jon" &&
        user.lastName === "Hinchley" &&
        user.email === "email@email.com" &&
        user.phoneNumber === "1234567890"
    ){
        return "Passes"
    }
    //some condition failed return failed
    else {
        return "Failed"
    }
}

//Test getFormattedPhoneNumberShouldFormatNumber returns a valid user
function testGetFormattedPhoneNumberShouldFormatNumber(){
    
    let user = userUtilities.createUser();
    
    //If it passes all our conditions, return passes    
    if ( user.getFormattedPhoneNumber() === "123-456-7890"){
        return "Passes"
    }
    //some condition failed return failed
    else {
        return "Failed"
    }
}

//Test getFullName returns a formatted string
function testGetFullName(){
    
    let user = userUtilities.createUser("Jon", "Hinchley", "email@email.com", "1234567890");
    
    //If it passes all our conditions, return passes    
    if ( user.getFullName() === "Jon Hinchley"){
        return "Passes"
    }
    //some condition failed return failed
    else {
        return "Failed"
    }
}

//run all tests
console.log('Running testCreateUserShouldReturnAValidUser ->',testCreateUserShouldReturnAValidUser())
console.log('Running testGetFormattedPhoneNumberShouldFormatNumber ->', testGetFormattedPhoneNumberShouldFormatNumber())
console.log('Running testGetFullName -> ', testGetFullName())
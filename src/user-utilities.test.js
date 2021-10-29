//This is gets learners starting to think about testing
const userUtilities = require('./user-utilities')

//Test createUser returns a valid user
function testCreateUserShouldReturnAValidUser(){
    
    let user = userUtilities.createUser("Jon", "Hinchley", "email@email.com","1234567890");

    //If it passes all our conditions, return passes    
    if ( ){
        return "Passes"
    }
    else {//return failed
        return "Failed"
    }
}

//Test getFormattedPhoneNumberShouldFormatNumber returns a valid user
function testGetFormattedPhoneNumberShouldFormatNumber(){
    
    let userResult = userUtilities.createUser();
    
    
    //If it passes all our conditions, return passes    
    if ( true){
        return "Passes"
    }
    else {//return failed
        return "Failed"
    }
}

//run all tests
console.log('Running testCreateUserShouldReturnAValidUser ->',testCreateUserShouldReturnAValidUser())
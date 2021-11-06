//this allows us to use the functions exported from this module
const userUtilities = require('./user-utilities')

//Test createUser returns a valid user
function testCreateUserShouldReturnAValidUser(){
    process.stdout.write('Running testCreateUserShouldReturnAValidUser -----> ')
    let createUserResult = userUtilities.createUser("Jon", "Hinchley", "email@email.com","1234567890");

    //If it passes all our conditions, return passes    
    if ( 
        createUserResult.user.firstName === "Jon" &&
        createUserResult.user.lastName === "Hinchley" &&
        createUserResult.user.email === "email@email.com" &&
        createUserResult.user.phoneNumber === "1234567890"
    ){
        console.log('\x1b[32m%s\x1b[0m',"Passes")
    }
    //some condition failed return failed
    else {
        console.log('\x1b[31m%s\x1b[0m',"Failed")
    }
}

//Test getFormattedPhoneNumberShouldFormatNumber returns a valid user
function testGetFormattedPhoneNumberShouldFormatNumber(){
    process.stdout.write('Running testGetFormattedPhoneNumberShouldFormatNumber -----> ')
    let createUserResult = userUtilities.createUser("Jon", "User", "email@email.com","1234567890");
    
    //If it passes all our conditions, return passes    
    if ( createUserResult.user.getFormattedPhoneNumber() === "123-456-7890"){
        console.log('\x1b[32m%s\x1b[0m',"Passes")
    }
    //some condition failed return failed
    else {
        console.log('\x1b[31m%s\x1b[0m',"Failed")
    }
}

//Test getFullName returns a formatted string
function testGetFullName(){
    process.stdout.write('Running testGetFullName -----> ')
    let createUserResult = userUtilities.createUser("Jon", "Hinchley", "email@email.com", "1234567890");
    
    //If it passes all our conditions, return passes    
    if ( createUserResult.user.getFullName() === "Jon Hinchley"){
        console.log('\x1b[32m%s\x1b[0m',"Passes")
    }
    //some condition failed return failed
    else {
        console.log('\x1b[31m%s\x1b[0m',"Failed")
    }
}

//Test deleteOrder deletes the correct order
function testDeleteOrder(){
    process.stdout.write('Running testDeleteOrder -----> ')
    let createUserResult = userUtilities.createUser("Jon", "Hinchley", "email@email.com", "1234567890");
    
    createUserResult.addOrder("McMuffin",4);
    createUserResult.addOrder("Bacon McMuffin with Cheese", 7);
    console.debug("orders", createUserResult.getOrders())
    createUserResult.deleteOrder(0);
    console.debug("orders", createUserResult.getOrders())

    let orders = createUserResult.getOrders()
    //If it passes all our conditions, return passes    
    if ( orders[0].productDescription === "Bacon McMuffin with Cheese"){
        console.log('\x1b[32m%s\x1b[0m',"Passes")
    }
    //some condition failed return failed
    else {
        console.log('\x1b[31m%s\x1b[0m',"Failed")
    }
}

//run all tests
testCreateUserShouldReturnAValidUser()
testGetFormattedPhoneNumberShouldFormatNumber()
testGetFullName()
testDeleteOrder()
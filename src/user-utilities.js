
//createUser takes 4 args, and returns a user object, with helper functions
function createUser(firstName, lastName, email, phoneNumber) {
    //returns formatted full name
    function getFullName() {
        
    }

    //returns formatted phoneNumber
    function getFormattedPhoneNumber() {

    }
    
    //create user object, include helper functions
    let user = {
        firstName,
        lastName,
        email,
        phoneNumber,
        getFullName,
        getFormattedPhoneNumber
    }

    //return user object
    return user

}

//in server-side programming, tells js which functions are available for use
module.exports = {
    createUser
}
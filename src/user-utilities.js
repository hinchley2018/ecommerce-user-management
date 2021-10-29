
//createUser takes 4 args, and returns a user object, with helper functions
function createUser(firstName, lastName, email, phoneNumber) {
    let user = {
        firstName,
        lastName,
        email,
        phoneNumber
    }
    //returns formatted full name
    function getFullName() {
        
    }

    //returns formatted phoneNumber
    function getFormattedPhoneNumber() {

    }
    
    //add functions to user object
    user.getFormattedPhoneNumber = getFormattedPhoneNumber;
    user.getFullName = getFullName;

    //return user object
    return {
        user
    }
}

module.exports = {
    createUser
}
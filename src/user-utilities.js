
//createUser takes 4 args, and returns a user object, with helper functions
function createUser(firstName, lastName, email, phoneNumber) {

    //returns formatted phoneNumber
    function getFormattedPhoneNumber() {

    }
    
    //create user object, include helper functions
    let user = {
        firstName,
        lastName,
        email,
        phoneNumber,
        orders: [],
        //formats fullName
        getFullName: function() {
            return firstName + " " + lastName
        },
        getFormattedPhoneNumber
    }

    //returns user's orders
    function getOrders(){
        
    }

    //adds order to user's orders {id: Number, productDescription: string, quantity: Number}
    function addOrder(productDescription, quantity) {
        
    }

    //deletes order by id 
    function deleteOrder(orderId){
        
    }
    
    return {
        user,
        getOrders,
        addOrder,
        deleteOrder
    };

}

//in server-side programming, tells js which functions are available for use
module.exports = {
    createUser
}
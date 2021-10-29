
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
        orders: [],
        getFullName,
        getFormattedPhoneNumber
    }

    //returns user's orders
    function getOrders(){
        return orders;
    }

    //adds order to user's orders {id: Number, productDescription: string, quantity: Number}
    function addOrder(productDescription, quantity) {
        let order = {id: orders.length, productDescription, quantity}
        orders.push(order);
    }

    //deletes order by id 
    function deleteOrder(orderId){
        for (let index = 0; index < orders.length; index++) {
            if (index === orderId) {
                orders.pop()
            }
        }
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
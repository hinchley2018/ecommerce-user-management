//adds payment info 
def payment_info (cc, ba, ak):
    if (ba[1] !==== "") {
        user.payment_info[1] = ba
    } 
    If cc.equals(""):
        throw Error("Must have a valid credit card");
    elseif {
        user.payment_info['cc'] == cc:
    }
    <script src="https://js.stripe.com/v3/"></script>
    stripe.submit_payment_info(cc,ba,ak);

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
        deleteOrder,
        payment_info
    };

}

//in server-side programming, tells js which functions are available for use
module.exports = {
    createUser
}
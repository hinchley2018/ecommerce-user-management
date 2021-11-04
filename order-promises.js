//build this
const orderCreatedPromise = function (orderFromUI) {
    return new Promise((resolve, reject) => {
        let orderFromServer = {
            id: Math.ceil(Math.random() * 10000),
            ...orderFromUI
        }
        setTimeout(() => {
            console.log(`Order #${orderFromServer.id} created`)
            resolve(orderFromServer)
        }, 2000)
    });
}
//then this
const paymentProcessingPromise = function (order, paymentInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //if card is not expired
            if (new Date(paymentInfo.expirationDate) > new Date()) {
                console.log(`Order #${order.id} Payment Recieved`)
                console.log(`Charged $${paymentInfo.authorizedCharge} ${paymentInfo.currency} on card ${paymentInfo.cardNumber}`)
                resolve(order)
            }
            else {
                reject("Card Expired")
            }


        }, 2000)
    });
}
//then this
const warehouseProcessingPromise = function (order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order#${order.id} Processed`)
            resolve(order)
        }, 3000)
    });
}

//then this
const orderShippingPromise = function (orderId, shippingDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Shipped #${orderId} to ${shippingDetails.address}`)
            resolve()
        }, 3000)
    });
}

//then show how to make it reusable flow...
function handleCustomerOrder(orderFromUI) {
    //chain these together
    orderCreatedPromise(orderFromUI)
        .then((orderWithId) => {
            //return another promise for processing the next step
            return paymentProcessingPromise(orderWithId, orderWithId.paymentInfo)
        })
        .catch(err => { 
            console.log('\x1b[31m%s\x1b[0m', `Customer #${orderFromUI.customerId} Your Order Failed, Reason: ${err}`) 
            throw Error(`Abandoned customer: ${orderFromUI.customerId} order due to ${err}`)
        })
        .then((paidOrder) => {

            return warehouseProcessingPromise(paidOrder)
        })
        .then((processedOrder) => {

            return orderShippingPromise(processedOrder.id, processedOrder.shippingDetails)
        })
        .then(() => console.log("At your house"))
        .catch(err => console.error(err))
}


//first promise in chain
let customer1Order = {
    customerId: 1,
    products: [
        {
            "id": 2,
            "description": "Computers",
            "price": "$67.42"
        },
        {
            "id": 3,
            "description": "Garden",
            "price": "$90.68"
        },
    ],
    paymentInfo: {
        authorizedCharge: 158.10,
        currency: 'USD',
        cardNumber: "You Wish",
        expirationDate: "12/25/2040"
    },
    shippingDetails: {
        address: "1234 Can't Find Me Drive",
        zipCode: 12345
    }
}
handleCustomerOrder(customer1Order)

//we can handle any number of orders now
let customer4Order = {
    customerId: 4,
    products: [
        {
            "id": 9,
            "description": "Music",
            "price": "$59.79"
        },
        {
            "id": 10,
            "description": "Sports",
            "price": "$41.16"
        }
    ],
    paymentInfo: {
        authorizedCharge: 100.95,
        currency: 'USD',
        cardNumber: "Really...",
        expirationDate: "12/25/1978"
    },
    shippingDetails: {
        address: "4321 circle",
        zipCode: 54321
    }
}
handleCustomerOrder(customer4Order)
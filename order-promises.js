const orderCreatedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Order Created')
    }, 2000)
});
const paymentProcessingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Payment Recieved')
    }, 2000)
});
const orderProcessingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Order Processed')
    }, 3000)
});

const orderShippingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Order Shipped')
    }, 3000)
});

//first promise in chain
orderCreatedPromise
    .then(() => {
        //return another promise for processing the next step
        return orderProcessingPromise
    })
    .then((status) => {
        console.log(status)
        return orderShippingPromise
    })
    .then(() => console.log("At your house"))
    
const getProductsPromise = new Promise((resolve, reject) => {
    let productFromDb = [
        {
            "id": 1,
            "description": "Computers",
            "price": "$80.98"
        },
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
        {
            "id": 4,
            "description": "Toys",
            "price": "$2.02"
        },
        {
            "id": 5,
            "description": "Jewelry",
            "price": "$123.98"
        },
        {
            "id": 6,
            "description": "Movies",
            "price": "$55.67"
        },
        {
            "id": 7,
            "description": "Home",
            "price": "$57.36"
        },
        {
            "id": 8,
            "description": "Outdoors",
            "price": "$12.66"
        },
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
    ]
    setTimeout(() => {
        resolve(productFromDb)
    }, 2000)
});

const getDiscountedProductsPromise = function (products) {
    return new Promise((resolve, reject) => {
        let discountedProducts = [

            {
                "id": 4,
                "description": "Toys",
                "price": "$1.02"
            },
            {
                "id": 5,
                "description": "Jewelry",
                "price": "$23.98"
            },
            {
                "id": 6,
                "description": "Movies",
                "price": "$12.67"
            },
            {
                "id": 7,
                "description": "Home",
                "price": "$24.36"
            },

        ]
        //return only discounted products that exist in products list
        let results = discountedProducts.filter(discountedProduct => products.some(p => p.id === discountedProduct.id))
        resolve(results)
    })
}

//Lets display a product list
console.log("Request Products list")
getProductsPromise
    .then((productsFromPromise) => {
        console.log("Products list ---->")
        console.log(productsFromPromise)
    })

//this time diplay with discounts
console.log("Request Products list, then get the ones discounted")
getProductsPromise
    .then((products) => {
        //same products results
        //console.log(products)
        return getDiscountedProductsPromise(products)
    })
    .then((discountedProducts) => {
        console.log("Discounted Products list ---->")
        console.log(discountedProducts)
    })
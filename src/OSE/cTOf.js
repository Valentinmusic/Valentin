function validaterprice(price) {
    if (price <= 0) {
        console.log("Price can not be zero or under zero")
    }
    else if (price > 15) {
        console.log("Price is over the price range")
    }
    else {
        console.log("Price is valid")
    }
}

validaterprice(14)
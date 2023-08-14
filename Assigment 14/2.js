function calculateTotalCartValue(...args) {
    const array = [];

    for (const arg of args) {
        array.push(arg);
    }
    let total = 0;
    for (let price of array){
        total += price;
    }
    return total
}

let totalPrice = calculateTotalCartValue(125,20,30);

console.log("The total cart value is " + totalPrice)
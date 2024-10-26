const shoppingCart = [
    { name: "apple", quantity: 4 },
    { name: "banana", quantity: 2 },
    { name: "orange", quantity: 5 },
    { name: "milk", quantity: 1 },
    { name: "bread", quantity: 2 }
];

console.log(shoppingCart.reduce((sum, item) => sum + item.quantity, 0));
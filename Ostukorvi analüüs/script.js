let shoppingCart = [
    { name: "apple", quantity: 4 },
    { name: "banana", quantity: 2 },
    { name: "orange", quantity: 5 },
    { name: "milk", quantity: 1 },
    { name: "bread", quantity: 2 }
];

console.log(shoppingCart);

console.log(shoppingCart.reduce((sum, item) => sum + item.quantity, 0));

shoppingCart.push({ name: "yogurt", quantity: 3 });
console.log(shoppingCart);

shoppingCart.find(({name}) => name === "apple") ? shoppingCart.find(({name}) => name === "apple").quantity += 3 : shoppingCart.push({name: "apple", quantity: 3});
console.log(shoppingCart);

shoppingCart =  shoppingCart.filter(({name}) => name !== "banana");
console.log(shoppingCart);

let itemNames = shoppingCart.map(({name}) => name);
console.log(itemNames);

console.log(shoppingCart.find(({name}) => name === "apple") ? true : false);

console.log(shoppingCart.sort((a, b) => b.quantity - a.quantity));
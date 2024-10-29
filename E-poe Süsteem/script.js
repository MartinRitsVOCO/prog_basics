import Product from "./class/product.js";
import ShoppingCart from "./class/shoppingCart.js";

const productList = [
    new Product("Riis", 1.5, 1),
    new Product("Kartul", 0.8, 1),
    new Product("Õun", 2.5, 1),
    new Product("Piim", 1.2, 1),
    new Product("Maapähkel", 12, 1)
];

const shoppingCart = new ShoppingCart();

for (const product in productList) {
    shoppingCart.addItem(productList[product], Math.floor(Math.random() * 10) + 1);
}

shoppingCart.removeItem(productList[Math.floor(Math.random() * productList.length)].name);

console.log(shoppingCart.getTotal());
console.log(shoppingCart.listItems());
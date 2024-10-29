export default class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addItem = (product, quantity) => {
        product.quantity = quantity;
        this.products.push(product);
    }

    removeItem = (name) => {
        this.products = this.products.filter(item => item.name !== name);
    }

    getTotal = () => {
        return this.products.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    listItems = () => {
        return this.products.map(item => item.getInfo()).join('\n');
    }
}
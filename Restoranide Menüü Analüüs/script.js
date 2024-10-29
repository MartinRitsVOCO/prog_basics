function analyzeMenu(menu) {
    let cheapItems = menu.filter(item => item.price < 10).map(item => item.name);
    let totalCost = menu.filter(item => item.price < 10).reduce((sum, item) => sum + item.price, 0);
    menu.filter(item => item.price < 10).forEach(item => console.log(item.name + " on vaid " + item.price + "€"));
    return {
        cheapItems: cheapItems,
        totalCost: totalCost
    };
}

console.log(
    analyzeMenu([
    { name: "pizza", price: 12, dish: "main" },
    { name: "burger", price: 11, dish: "main" },
    { name: "salad", price: 5, dish: "side" },
    { name: "soup", price: 7, dish: "side" },
    { name: "sandwich", price: 6, dish: "main" },
]));
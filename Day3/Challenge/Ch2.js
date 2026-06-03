const products = [
    { name: "Mouse", price: 700 },
    { name: "Keyboard", price: 5000 },
    { name: "Monitor", price: 20000 },
    { name: "Speaker", price: 5000 }
];

const expensiveProducts =
    products.filter(product => product.price > 1000);

console.log(expensiveProducts);
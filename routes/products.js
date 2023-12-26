const express = require('express');
const { faker } = require('@faker-js/faker');

app.get('/products', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price()),
            image: faker.image.imageUrl()
        });
    }
    res.json(products);
});
app.get('/products/filter', (req, res) => {
    res.send('yo soy un filter');
});
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id,
        product: 'Producto 2', 
        price: 1000,
    });
});
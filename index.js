const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}` );
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId} = req.params;
    res.json(
        {
            categoryId, 
            productId,
            product: 'Producto 2', 
            price: 1000,
        }
    )
});


const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}` );
});

app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/products', (req, res) => {
    res.json([
    {
        product: 'Producto 1', 
        price: 1500,
    },
    {
        product: 'Producto 2', 
        price: 1000,
    },
    {
        product: 'Producto 3', 
        price: 2500,
    }
]);
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id,
        product: 'Producto 2', 
        price: 1000,
    });
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
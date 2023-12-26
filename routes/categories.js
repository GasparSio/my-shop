const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
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

module.exports = router;
const express = require('express');
const routerApi = require('./routes/index');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}` );
});

app.get('/', (req, res) => {
    res.send('hello world');
});

routerApi(app);



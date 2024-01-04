const express = require('express');
const routerApi = require('./routes/index');
const { errorhandler, logError, boomErrorhandler} = require('./middleware/error-handler');


const app = express();

const port = 3000;

//es un middleware para que podamos usar el res.json({})
app.use(express.json());

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}` );
});

app.get('/', (req, res) => {
    res.send('hello world');
});

routerApi(app);

app.use(logError);
app.use(boomErrorhandler);
app.use(errorhandler);






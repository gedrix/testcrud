const express = require('express');
const cors = require('cors');

const app = express();

//base de datos
require('./database/conf');

app.use(express.json());
app.use(cors());

//ruta 
app.use('/api/heroe', require('./routes/heroe'));

app.listen(3000, ()=> {
    console.log('el servidor esta corriendo en el puerto 3000');
})


const express = require('express');
const cors = require('cors');
const app = express();

//base de datos
require('./database/conf');

app.use(express.json());
app.use(cors());

//la ruta
//http://localhost:3000/api/heroe
app.use('/api/heroe', require('./routes/heroe'));


app.listen(3000, ()=> {
    console.log('El servidor esta corriendo en el puerto 3000');
})


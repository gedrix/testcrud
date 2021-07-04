const mongoose = require('mongoose');
//mongodb+srv://gedo:Gedo12345.@nodered.hfjwp.mongodb.net/producto?retryWrites=true&w=majority
//mongodb://localhost/hero
mongoose.connect('mongodb+srv://gedo:Gedo12345.@nodered.hfjwp.mongodb.net/heroe?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('conexion con base de datos exitorsa'))
    .catch(err => console.log(err));
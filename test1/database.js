const mongoose  = require('mongoose');


mongoose.connect('mongodb+srv://gedo:Gedo12345.@nodered.hfjwp.mongodb.net/producto?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(db => console.log('data base conection'))
    .catch(err => console.log(err));
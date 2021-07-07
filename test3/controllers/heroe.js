const Heroe = require('../models/heroe');


exports.listaHeroes = async(req, res) => {
    try {
        const heroeDB = await Heroe.find();
        res.json({
            msg: 'peticion exitoosa',
            heroeDB
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


exports.crearHeroe = async(req, res) => {
    try {
        let heroe;
        heroe = new Heroe(req.body);
        await heroe.save();

        res.json(heroe);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.obtenerHeroe = async(req, res) =>{
    try {
        let heroeDB = await Heroe.findById(req.params.id);

        if(!heroeDB){
            res.json(
                {
                    msg:'heroe no existe',
                    estado:'404'
                }
            )
        }

        res.json(heroeDB);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.modificarHeroe = async(req, res) =>{
    try {
        const {nombre, heroe, poder, debilidad, edad, foto, descripcion} = req.body;
        let heroeDB = await Heroe.findById(req.params.id);

        if(!heroeDB){
            res.json(
                {
                    msg:'heroe no existe',
                    estado:'404'
                }
            )
        }

        heroeDB.nombre = nombre;
        heroeDB.heroe = heroe;
        heroeDB.poder = poder;
        heroeDB.debilidad = debilidad;
        heroeDB.edad = edad;
        heroeDB.foto = foto;
        heroeDB.descripcion = descripcion;
        
        heroeDB = await Heroe.findByIdAndUpdate({_id:req.params.id}, heroeDB, {new:true});
        res.json(heroeDB);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

exports.eliminarHeroe = async(req, res) => {
    try {
        let heroeDB = await Heroe.findById(req.params.id);

        if(!heroeDB){
            res.json(
                {
                    msg:'heroe no existe',
                    estado:'404'
                }
            )
        }

        await Heroe.findByIdAndRemove({_id: req.params.id})

        res.json({
            msg: 'el heroe a sido eliminado'
        })

    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

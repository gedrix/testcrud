const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {

    // let producto;
    // producto = new Producto(req.body);
    // await producto.save();
    // res.send(producto);

    const objProducto = req.body;
    let producto = new Producto();

    if (objProducto.nombre && objProducto.descripcion && objProducto.precio) {
        // producto.nombre = objProducto.nombre;
        // producto.descripcion = objProducto.descripcion;
        // producto.precio = objProducto.precio;

        Object.keys(objProducto).forEach(val => producto[val] = objProducto[val]);

        //this.objProducto 

        //const {nombre, descripcion, precio}  = objProducto;
        await producto.save();
        res.send(producto);
    }
    res.json({
        mensaje: 'manda todos los datos',
        estado: "404"
    });
}


exports.listarProducto = async (req, res) => {

    try {
        const productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send('error');
    }
}

exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.json({
                mensaje: "no existe producto",
                estado: "200"
            })
        }
        producto.fechaCreacion = undefined;
        res.json(producto);
    } catch (error) {
        res.json({
            mensaje: "error"
        })
    }
}


exports.editarProducto = async (req, res) => {
    const { nombre, precio } = req.body;

    let producto = await Producto.findById(req.params.id);

    if (!producto) {
        res.status(404).json({ mensaje: 'error no existe producto' });
    }

    producto.nombre = nombre;
    producto.precio = precio;

    producto = await Producto.findByIdAndUpdate({ _id: req.params.id }, producto, { new: true })


    res.json(producto)


}


exports.eliminarProducto = async (req, res) => {


    let producto = await Producto.findById(req.params.id);

    if (!producto) {
        res.status(404).json({ mensaje: 'error no existe producto' });
    }


    producto = await Producto.findByIdAndRemove({ _id: req.params.id })


    res.json({ mensaje: "producto eliminado correctamente" })


}
const Cuentas = require('./model');

exports.getAllByClienteId = async function(req, res) {

    const ClienteId = req.params.clienteId;


    try {
        const all = await Cuentas.find({
            clienteId: ClienteId
        });
        return res.send(all);

    } catch (error) {
        return res.send(error)
    }

}


exports.getAllCuentas = async function(req, res) {


    try {
        const all = await Cuentas.find();
        return res.send(all);

    } catch (error) {
        return res.send(error)
    }

}

exports.getOneCuenta = async function(req, res) {

    const id = req.params.cuentaId;

    try {
        const one = await Cuentas.findOne({
            cuentaid: id //condicion
        });
        return res.send(one);

    } catch (error) {
        return res.send(error)
    }


}



exports.updateOneCuenta = async function(req, res) {
    const id = req.params.cuentaId;
    const update = await Cuentas.update({ cuentaid: id }, // Query parameter
        req.body, { upsert: true } // Options
    )
    return res.send('updated');
}


exports.deleteOneCuenta = async function(req, res) {
    const id = req.params.cuentaId


    try {
        const one = await Cuentas.deleteOne({
            cuentaid: id
        });
        return res.send(one);

    } catch (error) {
        return res.send(error)
    }

}

exports.createCuentas = async function(req, res) {
    const { nombre, email, password, estado, cuentaid } = req.body
    const cuentaNuevo = new Cuentas({
        nombre,
        email,
        password,
        estado,
        cuentaid
    });
    let result;

    try {

        result = await cuentaNuevo.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);
}



exports.addCuentas = async function(req, res) {

    //obtengo el params.body

    const { nombre, email, password, estado, cuentaid } = req.body

    //creamos un objeto = cuenta CON NEW//


    const nuevoCliente = new Cuentas({ nombre, email, password, estado, cuentaid })


    let result;

    try {

        result = await nuevoCuenta.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);








}
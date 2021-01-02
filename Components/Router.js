const express = require('express');
const router = express.Router();
const cors = require('cors');

const Controller = require('./Controller');




// agrego controlador para acceder a su funcionalidades//   

router.get('/one/:cuentaId', [cors()], Controller.getOneCuenta);
router.get('/all', [cors()], Controller.getAllCuentas);
router.post('/', [cors()], Controller.createCuentas);
router.delete('/:cuentaId', [cors()], Controller.deleteOneCuenta);
router.put('/:cuentaId', [cors()], Controller.updateOneCuenta);
router.get('/oneByClienteId/:clienteId', [cors()], Controller.getAllByClienteId);



//exporto router para ser utilizado con un require//
module.exports = router;
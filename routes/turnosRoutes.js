const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

router.get('/', turnosController.listarTurnos);
router.get('/:id', turnosController.obtenerTurnoPorId);
router.post('/', turnosController.registrarTurno);

module.exports = router;
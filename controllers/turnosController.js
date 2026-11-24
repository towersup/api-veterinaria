const turnosService = require('../services/turnosService');

const listarTurnos = (req, res) => {
    const lista = turnosService.obtenerTodos();
    res.status(200).json(lista);
};

const obtenerTurnoPorId = (req, res) => {
    const { id } = req.params;
    const turno = turnosService.obtenerPorId(id);

    if (!turno) {
        return res.status(404).json({ 
            error: `No se encontró ningún turno con el ID ${id}`
        });
    }

    res.status(200).json(turno);
};

const registrarTurno = (req, res) => {
    const { cliente, mascota, servicio, fecha, precioBase, prioritario } = req.body;

    if (!cliente || !mascota || !servicio || !fecha || precioBase === undefined) {
        return res.status(400).json({
            error: 'Faltan campos obligatorios: cliente, mascota, servicio, fecha y precioBase son requeridos.'
        });
    }

    if (typeof precioBase !== 'number' || precioBase <= 0) {
        return res.status(400).json({
            error: 'El precioBase debe ser un valor numérico mayor a cero.'
        });
    }

    const turnoCreado = turnosService.crearTurno({
        cliente,
        mascota,
        servicio,
        fecha,
        precioBase,
        prioritario
    });

    res.status(201).json(turnoCreado);
};

module.exports = {
    listarTurnos,
    obtenerTurnoPorId,
    registrarTurno
};
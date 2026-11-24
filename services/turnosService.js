let turnos = [];
let idActual = 1;

const N = 22;
const PORCENTAJE_RECARGO = N * 2;

const obtenerTodos = () => {
    return turnos;
};

const obtenerPorId = (id) => {
    return turnos.find(t => t.id === parseInt(id));
};

const crearTurno = (datos) => {
    const { cliente, mascota, servicio, fecha, precioBase, prioritario } = datos;

    let totalPagar = precioBase;
    const esPrioritario = prioritario === true;

    if (esPrioritario) {
        totalPagar = precioBase + (precioBase * (PORCENTAJE_RECARGO / 100));
    }

    const nuevoTurno = {
        id: idActual++,
        cliente,
        mascota,
        servicio,
        fecha,
        precioBase,
        prioritario: esPrioritario,
        porcentajeRecargoAplicado: esPrioritario ? `${PORCENTAJE_RECARGO}%` : '0%',
        totalPagar
    };

    turnos.push(nuevoTurno);
    return nuevoTurno;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearTurno
};
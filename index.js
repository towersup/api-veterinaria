const express = require('express');
const turnosRoutes = require('./routes/turnosRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/turnos', turnosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de Clínica Veterinaria corriendo en http://localhost:${PORT}`);
});
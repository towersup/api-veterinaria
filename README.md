# API REST - Clínica Veterinaria "Huellitas"

## Integrante del Equipo[cite: 3]
* **Nombre:** Torres Alzate Erik Daniel (Grupo 1 - Martes)[cite: 3, 5]
* **Número de lista oficial ($N$):** 22[cite: 2, 3, 5]
* **Porcentaje de recargo asignado ($N \times 2\%$):** 44%[cite: 3]

## Descripción del Negocio[cite: 1, 3]
Este proyecto gestiona el agendamiento de citas médicas y servicios de estética para mascotas en una clínica veterinaria[cite: 1]. Cada turno registra el nombre del dueño (`cliente`), nombre de la `mascota`, el `servicio` solicitado, la `fecha`, el `precioBase` y si requiere atención de urgencia (`prioritario`)[cite: 1]. Si el turno es prioritario, se aplica un recargo del **44%** sobre el precio base[cite: 3].

## Instrucciones de Ejecución
1. Instalar dependencias: `npm install`
2. Iniciar el servidor: `node index.js`

## Ejemplos de Prueba (`POST /api/turnos`)[cite: 3]

### 1. Caso Exitoso (Código 201 Created)[cite: 3]
**Petición (JSON):**
json
{
  "cliente": "Carlos Pérez",
  "mascota": "Max",
  "servicio": "Consulta General",
  "fecha": "2026-11-25 10:00",
  "precioBase": 50000,
  "prioritario": true
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let reservaSchema = new Schema(
    {
        nombresClient: { type: String, },
        apellidosClient: { type: String, },
        cedulaClient: { type: Number },
        ciudadOrigenClient: { type: String, },
        telefonoClient: { type: Number, },
        emailClient: { type: String, },
        numPersonas: { type: Number },
        infoHabitacion: { type: String },
        fechaIngreso: { type: String},
        fechaSalida: { type: String },
    },
    {
        collection: "Reservas",
    }
);

module.exports = mongoose.model("Reservas", reservaSchema);
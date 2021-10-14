const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let clienteSchema = new Schema(
    {
        nombres: { type: String, },
        apellidos: { type: String, },
        cedula: { type: Number },
        ciudadOrigen: { type: String, },
        telefono: { type: Number, },
        email: { type: String, },
    },
    {
        collection: "Clientes",
    }
);

module.exports = mongoose.model("Clientes", clienteSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
let UserSchema = new Schema(
  {
    name: { type: String, required: true, },
    email: { type: String, required: true, },
    password: { type: String, required: true, },
    date: { type: Date, default: Date.now, }
  },
  {
    collection: "Usuarios",
  }
);
module.exports = User = mongoose.model("Usuarios", UserSchema);

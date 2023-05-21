const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactScheme = new Schema({
    teamName: { type: String, required: true, minLength: 3, maxLength: 100 },
    system: { type: String, required: true, minLength: 3, maxLength: 100 },
    numbers: [String],
});

module.exports = mongoose.model("Contact", ContactScheme);

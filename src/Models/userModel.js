const mongoose = require("mongoose");

const userSchama = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true}
}, {timestamps: true, versionKey: false});

const userModel = mongoose.model("user", userSchama);

module.exports = {userModel};
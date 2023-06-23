const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Stream:{type:String, required: true},
    Grade:{type:Number, required: true},
    Phone:{type:Number, required: true},
    email:{type:String, required: true},
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;

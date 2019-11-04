'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String },
    photo: { type: String },
    idUser: { type: String },
    username: { type: String }
  },
  {
    timestamps: false,
    versionKey: false
  });

module.exports = schema
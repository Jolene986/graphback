const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  genus: {
    type: String,
    required: true
  },
  species: {
    type: String
  },
  commonName: {
    type: String
  },
  family: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  wows: {
    /*likes*/

    type: Number,
    default: 0
  },
  username: {
    type: String
  }
});
module.exports = mongoose.model("Plant", PlantSchema);

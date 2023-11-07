const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: {type: String, required: true, minLength: 1, maxLength: 40},
  message: {type: String, required: true, minLength:1, maxLength:  500},
  date: {type: Date, required: true}
});



// Export model
module.exports = mongoose.model("Message", MessageSchema);

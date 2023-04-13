
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const psSchema = new Schema({
Underscoreid:String , 


ptitle:String 



})

module.exports = {
  Ps : mongoose.model('ps', psSchema),
}


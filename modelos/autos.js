const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoSchema= new Schema({
    
    marca:  String ,
    modelo:  String , 
    transmision:  String , 
    color:  String , 
    precio: String

});

module.exports = mongoose.model('Auto', AutoSchema );
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const itemSchema = new Schema({
    name: {type: String, required:true}
},
{
    timestamps: true  
});


module.exports = model('Item', itemSchema);



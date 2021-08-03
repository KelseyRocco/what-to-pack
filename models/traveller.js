const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const travellerSchema = new Schema({
    name: {type: String, required:true}
},
{
    timestamps: true  
});


module.exports = model('Traveller', travellerSchema);
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const categorySchema = new Schema({
    name: {type: String, required:true}
},
{
    timestamps: true  
});


module.exports = model('Category', categorySchema);
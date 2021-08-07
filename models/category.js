const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const itemSchema = new Schema({
    name: {type: String, required:true}
},
{
    timestamps: true  
});



const categorySchema = new Schema ({
    name: {type: String, required:true},
    items: [itemSchema]
},
{
    timestamps: true
});




module.exports = model('Category', categorySchema);
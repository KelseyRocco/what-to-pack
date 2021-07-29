const { Schema, model } = require('mogoose');

const userSchema = new Schema({
    name: String,
    email: {type: String, required:true, lowercase:true, unique:true},
    password: String
},
{
    timestamps: true  

});

module.exportds = ('User', userSchema)
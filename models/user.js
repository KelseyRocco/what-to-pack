const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, lowercase:true, unique:true},
    password: String
},
{
    timestamps: true  
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

module.exports = mongoose.model('User', userSchema);

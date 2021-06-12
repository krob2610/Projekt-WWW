var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local: {
        name: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
        },
        password: {
            type:String,
            required:true,
        },
        role:{
            type:String,
            default: "user",
        }
    },
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);


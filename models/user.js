/**
 * Schema for users on database
 * **/
var Schema = require('mongoose').Schema;
 
var UserSchema = Schema({ 
    name: String
    , username: { type: String, required: true, unique: true } 
    , email: { type: String, required: true, unique: true }
    , password: String
    , created_at: {type: Date , default: Date.now()}
    , updated_at: Date
});

UserSchema.methods.completeData = function(){
    var greeting = this.username
        ? "My name is " + this.username
        : "I don't have a name";
    console.log(greeting);
};

UserSchema.statics.getAll = function (callback){
    return this.find({},callback);
};

module.exports = global.db.model('User', UserSchema );
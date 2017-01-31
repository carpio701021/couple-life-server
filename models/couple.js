/**
 * Schema for couples on database
 * **/
var Schema = require('mongoose').Schema;
 
var CoupleSchema = Schema({ 
    startDate : Date
    , created_at: {type: Date , default: Date.now()}
    , updated_at: Date
    , events : []
});


module.exports = global.db.model('Couple', CoupleSchema );
    


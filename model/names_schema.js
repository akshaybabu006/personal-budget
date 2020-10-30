const mongoose = require("mongoose")

const nameSchema= new mongoose.Schema({
    title: {
        type:String,
        required:true,
        trim: true,
    },
    relatedValue: {
        type: Number,
        trim: true,
        required:true,
    },
    color: {
        type: String,
        trim: true,
        required:true,
        validate: [HexValidate, 'not a valid hex color code. Format #000000']
    }
}, {collection:'budget'})


function HexValidate(h){
    if(h.charAt(0) === '#'){
        if(h.length === 7)
            return true;
        else
            return false;
    }
    else    
        return false;

}

module.exports = mongoose.model('names', nameSchema)
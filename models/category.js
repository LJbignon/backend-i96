const { Schema, model } = require("mongoose");
const Categories96Schema = Schema({
    name: {
        type:String,
        required:[true,"El nombre es obligatorio"],
        unique:true
    },
    state:{
        type:Boolean,
        default:false
    },
    producto:{

        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    }
})

module.exports = model("Category", Categories96Schema)
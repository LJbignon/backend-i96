const { Schema, model } = require("mongoose");
const Categories96Schema = Schema({
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    description:{
        type:String,
        required:[true,"La descripción es obligatoria"]
    },
    price:{
        type:Number,
        required:[true,"El precio es obligatorio"]
    },
    src:{
        type:String,
        required:[true,"La imagen es obligatoria"]
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }
})
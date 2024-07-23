const { Schema, model } = require("mongoose");
const User96Schema = Schema({
    user: {
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    email: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    password: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    admin:{
        type:Boolean,
        default:false
    },
    state:{
        type:Boolean,
        default:false
    },
    state2:{
        type:Boolean,
        default:false
    }
})
User96Schema.methods.toJSON=function () {
    const {__v,_id, ...usuario}=this.toObject();
    usuario.uid=_id;
    return usuario
}
module.exports = model("User", User96Schema)
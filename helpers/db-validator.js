const Usuario = require("../models/usuarios")
//validar email
const emailExiste=async(email)=>{
    const existeEmail= await Usuario.findOne({email:email});
    if (existeEmail) {
        throw new Error(`El email ${email} ya existe registrado!`)
    }

}
module.exports={
    emailExiste
}
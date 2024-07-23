const Usuario = require("../models/usuarios");
const bcryptjs = require("bcryptjs");
const {generarJWT} = require("../helpers/generar-jwt")
const login =async(req,res)=>{
    const {email, password} = req.body;
    console.log(email,password);
    try {
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.json({msg:"El usuario o contraseña es incorrecto"})
        }
        if (!usuario.state) {
            return res.json({
                msg:"Usuario inactivo"
            })
        }
        let validarPassword=bcryptjs.compareSync(password,usuario.password);
        if (!validarPassword) {
            return res.json({msg:"El usuario o contraseña es incorrecto"})
        }
        //generar el token
        const token = await generarJWT(usuario.uid);
        return res.json({
            msg:"Login OK",
            usuario,
            token
        })
    } catch (error) {
        return res.json({
            msg:"Contactar al administrador"
        })
    }

}
module.exports={
    login
}
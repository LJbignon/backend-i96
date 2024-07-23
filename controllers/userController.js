const Usuario = require("../models/usuarios")
const bcryptjs = require("bcryptjs")
const getUsers=async (req,res)=>{
    let users = await Usuario.find();
    res.status(200).json({users})
}
const getOneUser=async (req,res)=>{
    let {id}=req.params
    let user = await Usuario.findById({_id:id});
    res.status(200).json({user})
}
const createUser=async(req,res)=>{

    let {user,password,email}=req.body; 
    const usuario = new Usuario({user,password:bcryptjs.hashSync(password,10),email})
    let newUser =await usuario.save();
    res.status(201).json({newUser})
}
const updateUser=async(req,res)=>{
    let {id}=req.params;
    let resto=req.body;
    if (resto?.password) {
        resto.password=bcryptjs.hashSync(req.body.password,10)
        const usuario = await Usuario.findByIdAndUpdate(id,resto,{new:true})
        return res.status(203).json({usuario})
    }else{
        const usuario = await Usuario.findByIdAndUpdate(id,resto,{new:true})
        return res.status(203).json({usuario})
    }
    
    
}
const deleteUser=async(req,res)=>{
    let {id}=req.params;
    const usuario = await Usuario.findById(id)
    if (!usuario.state) {
        return res.json({msg:"El usuario ya esta inactivo"})
    }
    let usuarioInactivo = await Usuario.findByIdAndUpdate(id,{state:false},{new:true})
    return res.send(usuarioInactivo)
}
const enableUser =async(req,res)=>{
    let {id}=req.params;
    const usuario = await Usuario.findById(id)
    if (usuario.state) {
        
        return res.json({msg:"El usuario ya esta activo"})
    }
    let usuarioActivo =await Usuario.findByIdAndUpdate(id,{state:true},{new:true})
    return res.send({usuario:usuarioActivo})
}
module.exports={
    getUsers,createUser,updateUser,deleteUser,getOneUser,enableUser
}
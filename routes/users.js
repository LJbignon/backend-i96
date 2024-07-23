const {Router} = require("express")
const router = Router();
const {getUsers,createUser,updateUser,deleteUser,getOneUser,enableUser} = require("../controllers/userController")
// http://localhost:8080/api/users/createUser
const {check}=require("express-validator");
const {validarCampos} = require("../middlewares/validar_campos")
const {emailExiste} = require("../helpers/db-validator")
router.get("/readUsers",getUsers)
router.get("/readOneUser/:id",getOneUser)
router.post("/createUser",[
    check("user","El usuario es obligatorio").notEmpty(),
    check("email","No es un email valido").isEmail(),
    check("email").custom(emailExiste),
    check("password","La contraseña debe ser mayor a 6 digitos").isLength({min:6}),
    validarCampos
],createUser)
router.put("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)
router.post("/enableUser/:id",enableUser)

module.exports=router;
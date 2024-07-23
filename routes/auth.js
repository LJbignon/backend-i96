const {Router} = require("express")
const router = Router();
const {login} =require("../controllers/authController")
// http://localhost:8080/api/auth/login
router.post("/login",login)

module.exports=router;
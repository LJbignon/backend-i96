const jwt = require("jsonwebtoken")
const generarJWT=(uid)=>{
    return new Promise((resolve,reject)=>{
        const payload={uid};
        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            {
                expiresIn:"4h",
            },
            (err,token)=>{
                if (err) {
                    reject("No se puede crear el token")
                }else{
                    resolve(token)
                }
            }
        )
    })
}
module.exports={
    generarJWT
}
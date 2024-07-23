const express = require("express")
const cors = require("cors");
const dbConnection = require("../database/config");
class Server{
    constructor(){
        this.app=express()
        this.port=8080;
        this.authPath="/api/auth";
        this.usersPath="/api/users";
        /*this.productsPath="/api/products";*/
        this.categoriesPath="/api/categories";
        this.conectarDb();
        this.middlewares();
        this.routes();
    }
    async conectarDb(){
        await dbConnection();
    }
    middlewares(){
        //leer json
        this.app.use(express.json())
        //archivos staticos
        // this.app(express.static("public"))
    }
    routes(){
        this.app.use(this.authPath,require("../routes/auth"))
        this.app.use(this.usersPath,require("../routes/users"))
        this.app.use(this.categoriesPath,require("../routes/categories"))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor está activo en el puerto:",this.port);
        })
    }

}
module.exports=Server;

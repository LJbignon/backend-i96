const {Router} = require("express")
const router = Router();
const Category=require("../models/category")
router.get("/getCategories",async(req,res)=>{
    let categoria = await Category.find({})
    return res.json({categoria})
})
router.get("/getCategorie/:id",async(req,res)=>{
    let categoria = await Category.findById(id).populate()
    return res.json({categoria})
})

module.exports= router;
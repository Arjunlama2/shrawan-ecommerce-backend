const expres=require('express');


const router=expres.Router();

    router.get("/",(req,res)=>{
        res.send("product route")
    })

module.exports=router;
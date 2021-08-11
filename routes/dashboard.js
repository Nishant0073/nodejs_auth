const router = require("express").Router();

router.get("/",(req,res)=>{
    res.json({
        error: null,
        data:{
            title:"MY DASHBOARD!",
            content:"DASHBOARD CONTENT",
            user:req.user, //token payload information.
        },
    })
})


module.exports = router;

const express = require("express");
const router = express.Router();

// middleware that is specific to this router
const auth = function (req, res, next) {
  console.log("i am inside auth walal middleware");

  //for better understanding i add a dummy user
  req.user = { userId: 1, role: "admin" };

  if (req.user) {
    //if a valid user is there in req, then proceed to the next middleware
    next();
  } else {
    //if not a valid user
    res.json({
      success: false,
      message: "You are not logged in",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("i am inside Student wala middleware");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access Denied, this route is only for students"
    });
  }
};


const isAdmin=function(req,res,next){
    console.log("i am inside Admin wala middleware");

    if(req.user.role==="admin"){
        next();
    } else{
        res.json({
            success:false,
            message:"Access Denied, this route is only for admins"
        })
    }
}


//routes
router.get("/student",auth, isStudent,(req,res) => {
    console.log(" i am inside student route")
    res.send("Students Specific Page")
})

router.get("/admin",auth,isAdmin, (req,res) =>{
    console.log("i am inside admin route")
    res.send("Admin specific page")
})

module.exports = router;

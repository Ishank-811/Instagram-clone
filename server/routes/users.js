const express = require("express") ; 
const router = express.Router() ;
const auth = require("../middleware/auth") ; 
const {signin , signup , follow , unfollow , updateprofile }  = require("../controller/users.js"); 
router.patch("/unfollow" ,auth , unfollow);
router.patch("/follow" ,auth , follow);
router.post("/signin",signin) ; 
router.post("/signup",signup) ; 
router.patch("/updateprofile/:id" ,auth, updateprofile )

module.exports = router ;       
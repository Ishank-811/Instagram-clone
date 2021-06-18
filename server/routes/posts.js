const  express = require("express") ; 
const {createposts , getposts , myprofile ,  likeposts ,  unlikeposts ,  comments , userprofile , deleteposts}  = require("../controller/post.js"); 
const router   = express.Router() ; 
const auth = require("../middleware/auth") ; 
router.get("/:id/userprofile" ,auth, userprofile)
router.get("/" ,auth, getposts) ; 
router.post("/" ,auth,createposts) ;
router.get("/myprofile" ,auth , myprofile) ;
router.patch("/:id/likeposts" ,auth , likeposts);
router.patch("/:id/unlikeposts" ,auth , unlikeposts);
router.patch("/:id/comments" ,auth , comments);
router.delete("/:id" ,auth, deleteposts);
module.exports = router ;
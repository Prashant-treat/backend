import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";
import{upload} from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)   //add /api/v1/user is industry good practice

export default router    // default is used to name the router anything in the other files
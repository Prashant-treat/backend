import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)   //add /api/v1/user is industry good practice

export default router    // default is used to name the router anything in the other files
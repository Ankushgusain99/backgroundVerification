import { Router } from "express";
import { registerUser, loginUser, logoutUser} from "../controllers/credentials.controllers.js";

import { verifyJWT } from "../middlewares/auth.middlewares.js";
const router=Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/logout').post(verifyJWT ,logoutUser)

export default router
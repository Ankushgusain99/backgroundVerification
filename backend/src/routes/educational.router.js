import { Router } from "express";
import jwt from 'jsonwebtoken'
import { saveEducationalInfo } from "../controllers/educational.controller.js";

const router2=Router()

router2.route('/educationalInfo').post(saveEducationalInfo)

export default router2
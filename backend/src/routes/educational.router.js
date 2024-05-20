import { Router } from "express";
import jwt from 'jsonwebtoken'
import { educationalInfo } from "../controllers/educational.controller.js";

const router2=Router()

router2.route('/educationalInfo').post(educationalInfo)

export default router2
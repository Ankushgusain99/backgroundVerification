import { Router } from "express";
import jwt from 'jsonwebtoken'
import { createEducationalInfo } from "../controllers/educational.controller.js";

const router2=Router()

router2.route('/createEducationalInfo').post(createEducationalInfo)

export default router2
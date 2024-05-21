import { Router } from "express";
import jwt from 'jsonwebtoken'
import { createExperienceInfo } from "../controllers/experience.controller.js";

const router3=Router()

router3.route('/createExperienceInfo').post(createExperienceInfo)

export default router3
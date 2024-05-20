import { Router } from "express";
import jwt from 'jsonwebtoken'
import { saveExperienceInfo } from "../controllers/experience.controller.js";

const router3=Router()

router3.route('/experienceInfo').post(saveExperienceInfo)

export default router3
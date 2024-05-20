import { Router } from "express";
import jwt from 'jsonwebtoken'
import { registerpersonalInfo } from "../controllers/personal.controller.js";

const router1=Router()

router1.route('/registerInfo').post(registerpersonalInfo)

export default router1
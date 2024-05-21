import { Router } from "express";
import { uploadCreatedFiles } from "../controllers/upload.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router4=Router()

router4.route("/uploadCreatedFiles").post(
    upload.fields([
        {
            name: "identity",
        }, 
        {
            name: "educational",
        },
        {
            name:"experience",
        }
    ]),
    uploadCreatedFiles
    )
export default router4
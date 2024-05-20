import express from 'express'
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser';
const app = express();
app.use(morgan("dev"));
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true,
}));
app.use(express.json())

app.use(express.urlencoded({
  extended:true,
  limit:'16kb'
}))

app.use(cookieParser())


//routes import
import router from './src/routes/credentailsRoutes.routes.js';
import router1 from './src/routes/personalInfoRoutes.routes.js';
import router2 from './src/routes/educational.router.js';
import router3 from './src/routes/experience.routes.js';
//routes declaration
app.use('/api/v1/credentials',router)
app.use('/api/v1/personalInfo',router1)
app.use('/api/v1/educationalInfo',router2)
app.use('/api/v1/experienceInfo',router3)

export {app}
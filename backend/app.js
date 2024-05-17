import express from 'express'
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();
app.use(morgan("dev"));
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}));
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({
  extended:true,
  limit:'16kb'
}))

app.use(cookieParser())


//routes import
import router from './src/routes/credentailsRoutes.routes.js';


//routes declaration
app.use('/api/v1/credentials',router)

export {app}
import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/conf'
import cors from 'cors'
const app = express()
const port = process.env.Port || 3000
dotenv.config()
dbConnect()
const whitelist = ['http://localhost:3000/api/url'];

const corsOptions = {
  origin: function (origin:any, callback:any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

import url_routes from "../src/routes/url.routes"

app.use(express.json());
app.use('/api/url',url_routes);

app.listen(port,()=>{
  console.log(`running port ${port}`);
})

export default app
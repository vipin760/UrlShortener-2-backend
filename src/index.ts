import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/conf'
import cors from 'cors'
const app = express()
const port = process.env.Port || 3000
dotenv.config()
dbConnect()
app.use(cors({
  origin:"https://65c75e6f5586055c2b961700--teal-madeleine-225fa5.netlify.app",
  credentials: true,
  optionsSuccessStatus:200
}))

import url_routes from "../src/routes/url.routes"

app.use(express.json());
app.use('/api/url',url_routes);

app.listen(port,()=>{
  console.log(`running port ${port}`);
})

export default app
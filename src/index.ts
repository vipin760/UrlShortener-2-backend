import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/conf'
import cors from 'cors'
const app = express()
const port = process.env.Port || 3000
dotenv.config()
dbConnect()
app.use(cors({
  origin:"https://url-shortener-2-frontend-git-master-vipins-projects-f115abc8.vercel.app",
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus:200
}))


import url_routes from "../src/routes/url.routes"

app.use(express.json());
app.use('/api/url',url_routes);

app.listen(port,()=>{
  console.log(`running port ${port}`);
})

export default app
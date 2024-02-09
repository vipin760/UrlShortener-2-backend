import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})

// import express from 'express'
// import dotenv from 'dotenv'
// import { dbConnect } from './config/conf'
// import cors from 'cors'
// const app = express()

// const port = process.env.Port || 3000
// dotenv.config()
// dbConnect()
// app.use(cors({
//   origin:"http://localhost:4200",
//   credentials: true
// }))

// import url_routes from "../src/routes/url.routes"

// app.use(express.json());
// app.use('/api/url',url_routes);

// app.listen(port,()=>{
//   console.log(`running port ${port}`);
// })

// export default app
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = process.env.PORT || 8080;
app.get('/', function (_req, res) {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', function (_req, res) {
    return res.send('pong 🏓');
});
app.listen(port, function () {
    return console.log("Server is listening on ".concat(port));
});
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
//# sourceMappingURL=index.js.map
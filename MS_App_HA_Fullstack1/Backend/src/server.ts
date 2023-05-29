import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dataRouter from './routers/data.router'
import paginationRouter from './routers/pagination.router'
import { dataProps } from './models/data.modal';
const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:3000"]
}))


app.use('/api/data', dataRouter);
app.use('/api/pagination/', paginationRouter)

var port = 5000;

app.listen(port, () =>{
    console.log("http://localhost:"+port);
})
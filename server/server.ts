import express from 'express';
import 'reflect-metadata';
import { router } from "./routes";


import './database'

const app = express();

app.use(express.json())

app.use(router);


app.post('/envio',(req,res)=>{
    console.log(req.body)
    })

app.listen(8000, () => console.log('Server is running'));
app.listen(3001, () => console.log('Client'))


//cliente(solicitar) - server(receber) -> controller(requestResponse) -> SERVICE(validar) -> Repositories -> BD
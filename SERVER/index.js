import express from 'express';
import allRoutes from './routes';
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//app.use(express.json())

app.use('/api/v1/', allRoutes);

const port=process.env.PORT||8000;
const server=app.listen(port, ()=>console.log(`The server is listening on port ${port}`));

module.exports = server

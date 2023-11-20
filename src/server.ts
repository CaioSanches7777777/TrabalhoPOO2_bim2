import express,{ Router, Request, Response } from 'express';
import path from 'path';
import MainRouter from './routes/RouteMain';
import UserRouter from './routes/RouteUsuario';


const app = express();
app.use(express.json());


app.use(MainRouter);
app.use(UserRouter);


app.get('/', function(req: Request, res: Response) {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
})

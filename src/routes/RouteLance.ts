import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const LanceRouter = Router();

LanceRouter.get('/lance', function(req, res){
    res.send('Listar Lances')
})

LanceRouter.post('/lance', async function(req, res){
    const lance: Prisma.LanceCreateInput = req.body;
    
    const novoLance = await prisma.lance.create({
        data: lance
    })

    res.send('Cria Lances')

    res.status(200).json({
        status: "ok",
        user: novoLance
    })
})



export default LanceRouter;


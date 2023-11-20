import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const LeilaoRouter = Router();

LeilaoRouter.get('/leilao', function(req, res){
    res.send('Listar Leilao')
})

LeilaoRouter.post('/leilao', async function(req, res){
    const leilao: Prisma.LeilaoCreateInput = req.body;
    
    const novoLeilao = await prisma.leilao.create({
        data: leilao
    })

    res.send('Cria Leilao')

    res.status(200).json({
        status: "ok",
        user: novoLeilao
    })
})

LeilaoRouter.put('/leilao', function(req, res){
    res.send('Atualisa Leilao')
})

export default LeilaoRouter;


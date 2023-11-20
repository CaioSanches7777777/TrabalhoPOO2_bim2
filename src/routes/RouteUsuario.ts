import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const UserRouter = Router();

UserRouter.get('/usuario', function(req, res){
    res.send('Listar Usuarios')
})

UserRouter.post('/usuario', async function(req, res){
    const usuario: Prisma.UsuarioCreateInput = req.body;
    
    const novoUsuario = await prisma.usuario.create({
        data: usuario
    })

    res.send('Cria Usuarios')

    res.status(200).json({
        status: "ok",
        user: novoUsuario
    })
})

UserRouter.delete('/usuario', function(req, res){
    res.send('Deletar Usuarios')
})



export default UserRouter;


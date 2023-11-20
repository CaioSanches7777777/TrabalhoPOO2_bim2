import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ServicesUsuario from "../services/ServicesUsuario";

class ControllerUsuario{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const novoUsuario = await ServicesUsuario.CriarUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newuser: novoUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = ServicesUsuario.ListarUsuarios();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

}

export default new ControllerUsuario;
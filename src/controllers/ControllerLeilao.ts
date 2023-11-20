import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ServicesLeilao from "../services/ServicesLeilao";

class ControllerLeilao{

    constructor(){}

    async CriarLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.id !== ""){
            const novoLeilao = await ServicesLeilao.CriarLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newuser: novoLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async ListarLeiloes(req: Request, res: Response){
        const leiloes = ServicesLeilao.ListarLeiloes();

        res.status(200).json({
            status: 'ok',
            users: leiloes
        })
    }

}

export default new ControllerLeilao;
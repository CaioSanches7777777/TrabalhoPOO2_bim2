import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ServicesLance from "../services/ServicesLance";

class ControllerLance{

    constructor(){}

    async CriarLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.id !== ""){
            const novoLance = await ServicesLance.CriarLance(dados)
            res.status(200).json({
                status: 'ok',
                newuser: novoLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async ListarLances(req: Request, res: Response){
        const lances = ServicesLance.ListarLances();

        res.status(200).json({
            status: 'ok',
            users: lances
        })
    }

}

export default new ControllerLance;
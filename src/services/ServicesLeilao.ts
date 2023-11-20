import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServicesLeilao {
    constructor(){}

    async ListarLeiloes(id?: string){
        try{
            if(id){
                const leilao = prisma.leilao.findUnique({
                    where: {
                        id
                    }
                });
                return leilao;
            }else{
                const leiloes = prisma.leilao.findMany();
                return leiloes;
            }
        }catch(error){
        console.log(error);
        return null;
        }
    }

    async CriarLeilao(leilao: Prisma.LeilaoCreateInput){

        try{
            const novoLeilao = await prisma.leilao.create({
                data: leilao
            });
            console.log(novoLeilao);
            return novoLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    
    async AtualisaLeilao(id: string, leilao: Prisma.LeilaoUpdateInput){

        try{
            const leilaoUpdated = await prisma.leilao.update({
                where:{
                    id
                }, data: leilao
            });
            console.log(leilaoUpdated);
            return leilaoUpdated;

        }catch(error){
            console.log(error);
            return null;
        }
    }


}

export default new ServicesLeilao();
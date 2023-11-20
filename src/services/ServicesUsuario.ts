import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServicesUsuario {
    constructor(){}

    async ListarUsuarios(id?: string){
        try{
            if(id){
                const usuario = prisma.usuario.findUnique({
                    where: {
                        id
                    }
                });
                return usuario;
            }else{
                const usuarios = prisma.usuario.findMany();
                return usuarios;
            }
        }catch(error){
        console.log(error);
        return null;
        }
    }

    async CriarUsuario(usuario: Prisma.UsuarioCreateInput){

        try{
            const novoUsuario = await prisma.usuario.create({
                data: usuario
            });
            console.log(novoUsuario);
            return novoUsuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    
    async DeletarUsuario(id: string){
        try{
            if(!id){
                return console.log("Precisa de um id para deletar um usuário")
            }
            await prisma.usuario.delete({
                where:{
                    id
                }
            })

        }catch(error){
            console.log(error);
            return null;
        }
    }

}

export default new ServicesUsuario();
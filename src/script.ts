import { PrismaClient } from '@prisma/client'
import ServicesLance from './services/ServicesLance'
import ServicesLeilao from './services/ServicesLeilao'
import ServicesUsuario from './services/ServicesUsuario'

const prisma = new PrismaClient()

async function main() {

ServicesUsuario.CriarUsuario({email:"nome@email.com", nome: "Nome"})

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.findMany({
    include: {
      // vai ser adicionado a chamada os parametros das tabelas relacionadas
      courses: true,
      module: true,
    }
  })
  console.log(JSON.stringify(result))
}

main()
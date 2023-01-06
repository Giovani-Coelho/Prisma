import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.course.findMany({
    where: {
      name: {
        // ira procurar na tabela qual das colunas "name"  tem o parametro passado
        startsWith: "Curso",
        // "insensitive" faz com que ignore o caseSensitive
        mode: "insensitive"
      }
    }
  })
  console.log(result)
}

main()
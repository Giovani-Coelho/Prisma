import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// ira criar os dados da tabela curso e da tabela modulos, e automaicamente o relacionamento n - n
async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          duration: 300,
          name: "Curso de Java",
          description: "Aprenda Java"
        }
      },
      module: {
        create: {
          description: "Primeiros Passos com SpringBoot",
          name: "PrismaIo"
        }
      }
    }
  })
  console.log(result)
}

main()
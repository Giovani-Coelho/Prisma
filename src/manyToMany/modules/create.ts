import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// adiciona os dados na tabela modules e inseri os dados na tabela courses
async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Learning Node.js",
      name: "Node.js",
      CoursesModules: {
        create: {
          courses: {
            connect: {
              id: "6d16bd8b-1d1e-4387-981c-18790b4bcd3a"
            }
          }
        }
      }
    }
  })

  console.log(result)
}

main()
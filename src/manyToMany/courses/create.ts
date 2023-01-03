import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// inseri os dado a tabela course
async function main() {
  const result = await prisma.course.create({
    data: {
      duration: 200,
      name: "Dev Web",
      description: "Curso para se tornar um desenvolvedor web"
    }
  })
  console.log(result)
}

main()

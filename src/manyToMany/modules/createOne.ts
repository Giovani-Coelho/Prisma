import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// adiciona os dados a tabela modules apenas
async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "React",
      description: "Fundamentos do React"
    }
  })
  console.log(result)
}

main()

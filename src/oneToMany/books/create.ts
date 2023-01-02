import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      authors_id: "1e868fc2-c3f3-4847-ad69-79ee206cd00d"
    }
  })

  console.log(result)
}


main()
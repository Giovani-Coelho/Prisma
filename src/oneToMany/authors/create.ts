import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "NegoNey",
      books: {
        createMany: {
          data: [
            {
              name: "Estranho"
            },
            {
              name: "Sucumba"
            }
          ]
        }
      }
    }
  })

  console.log(result);
}

main()
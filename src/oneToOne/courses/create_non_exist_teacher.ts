
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de elixir",
      description: "back-end",
      duration: 200,
      teacher: {
        create: {
          name: "Rafa Moreira"
        }
      }
    }
  });

  console.log(result);
}

main()
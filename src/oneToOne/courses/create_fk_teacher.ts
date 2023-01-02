
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de react Native",
      description: "front-end",
      duration: 100,
      fk_id_teacher: "b4d07f51-ac62-4b57-92a6-af2043ffd53f"
    }
  });

  console.log(result);
}

main()
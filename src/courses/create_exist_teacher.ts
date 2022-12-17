
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "curso de react",
      description: "front-end",
      duration: 100,
      teacher: {
        connect: {
          id: "3c53f440-24e5-4409-815a-6f5eab408842"
        }
      }
    }
  });

  console.log(result);
}

main()
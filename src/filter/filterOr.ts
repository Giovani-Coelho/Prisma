import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.course.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "java",
            mode: "insensitive"
          }

        },
        {
          name: {
            contains: "prisma",
            mode: "insensitive"
          }
        }
      ],
      AND: {
        duration: 300
      }
    }
  })
  console.log(result)
}

main()
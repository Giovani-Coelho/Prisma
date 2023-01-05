import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.course.findMany({
    where: {
      id: "83c9b668-f3f2-4bda-aeb5-1cc3ea5ce8f0"
    },
    include: {
      CoursesModules: true

    }
  })
  console.log(JSON.stringify(result))
}

main()
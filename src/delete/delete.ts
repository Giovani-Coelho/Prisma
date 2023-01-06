import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "47313267-d813-4ccc-aed3-74fb8d94c4e8"
    }
  })

  console.log(result)
}

main()

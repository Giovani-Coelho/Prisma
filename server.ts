import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.course.create({
    data: {
      duration: 200,
      name: "curso de node",
      description: "cruso exelente"
    },
  })
  console.log(result)
}

async function findOne() {
  const course = await prisma.courses.findFirst()
  console.log(course)
}

async function update() {
  const result = await prisma.courses.update({
    where: {
      id: "c70b4715-6bbf-44c6-a9bf-8670e2bf7e38"
    },
    data: {
      duration: 300,
      name: "Curso de NodeJs"
    }
  })

  console.log(result)
}

//create()
// findOne()
update()
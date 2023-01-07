import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// adiona as chaves estranhggeiras para a tabela de relacionamento N - N
async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "ec4841ea-2333-41f2-9f7b-f86ea8cef97a",
      fk_id_module: "574a0dbd-3f6f-43a8-b84e-fee6719b6582"
    }
  })
  console.log(result)
}

main()
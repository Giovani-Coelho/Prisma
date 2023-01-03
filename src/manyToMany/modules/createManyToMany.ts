import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// adiona as chaves estranhggeiras para a tabela de relacionamento N - N
async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "83c9b668-f3f2-4bda-aeb5-1cc3ea5ce8f0",
      fk_id_module: "92fe3384-fef7-4eb9-8ae8-32fabf8445e6"
    }
  })
}

main()
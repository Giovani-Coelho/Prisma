import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// paginacao faz uma comunicacao entre cliente servidor, trafegando apenas o necessario 
// para que nao uma aplicacao com muitos dados nao fique muito sobrecarregada

async function main() {
  const result = await prisma.course.findMany({
    // entendendo paginacao:
    // tendo o seguinte array[1,2,3,4,5,6,7,8,9]
    // o skip fala para pular tantos itens
    skip: 0,
    // o take fala para pegar tantos itens
    take: 0

    // esta operacao apenas vai fazer uma busca caso queira que faca uma busca 
    // pulando tantos itens e pegandos tantos itens, tem que ser feito um loop
  })

  // loop para que seja pego todos os itens

  let skip = 0
  let exist = true

  while (exist) {
    const result = await prisma.course.findMany({
      skip: skip,
      take: 2
    })

    skip += 2

    // caso nao tenha mais itens a buscar
    if (result.length <= 0) {
      exist = false
    }

    console.log(result)
    console.log("------------------------------------------")
  }
}

main()
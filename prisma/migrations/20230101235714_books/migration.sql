-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "authors_id" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_name_key" ON "books"("name");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authors_id_fkey" FOREIGN KEY ("authors_id") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

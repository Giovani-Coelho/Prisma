# Aplication
These were files used to learn prism. It's not a project.

## Install Dependencies:

```sh 
yarn
````

OR

```sh 
npm install
```

## DataBase

- For this project you need to create a database in your postgres.

### Environment Variables

- create a file named `.env`
- in file you need to put this variable:

```sh
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/NAMEOFYOURDB?schema=public"
```

## Prisma

Install Prisma:

```sh
yarn add prisma 

# and prisma client

yarn add @prisma/client
```
Execute Prisma: 

```sh
yarn prisma init
```

when creating or modifying a table use:
```sh 
# to update prismaclient
yarn prisma generate
```

### Migration

Create a migration: 
```sh
yarn prisma migration dev
```

To run the migration:
```sh
yarn prisma migrate deploy
```

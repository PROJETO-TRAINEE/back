# To-Do List
API construída em Nest.JS para criação de uma lista de tarefas, a qual o usuário pode marcar uma tarefa como concluída ou não


---
# Guia

## 1. Sobre o Nest.JS
https://docs.nestjs.com/

## 2. Instalar o Node e o NPM
https://nodejs.org/pt/download/prebuilt-installer

### Verificar a versão do Node
``` powershell
node --version
```

### Verificar a versão do NPM
``` powershell
npm--version
```

## 3. Criar o Projeto 
``` powershell
nest new ToDoList
```


## 4. Executar a Aplicação
``` powershell
npm run start:dev
```

## 5. Prisma (ORM)
![Prisma](prismacjr.png)

https://docs.nestjs.com/recipes/prisma

### Instalar o Prisma
``` powershell
npx prisma init
```
### Criar Migração
``` powershell
npx prisma migrate dev
```
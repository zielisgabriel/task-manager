# Task Manager API

## Descrição
Esta é uma API para o gerenciamento de tarefas que implementa operações de CRUD (Create, Read, Update, Delete). A API foi desenvolvida utilizando **Node.js**, **Express**, **Knex.js**, **Zod**, **TypeScript** e **PostgreSQL**.

---

## Funcionalidades
- **Criar Tarefa**: Permite criar uma nova tarefa.
- **Listar Tarefas**: Retorna as lista de tarefas existentes.
- **Atualizar Tarefa**: Atualiza os detalhes de uma tarefa existente.
- **Excluir Tarefa**: Remove uma tarefa do sistema.

---

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de servidores web.
- **Knex.js**: Query builder para interação com o banco de dados.
- **Zod**: Biblioteca para validação de esquemas de dados.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **PostgreSQL**: Banco de dados relacional.

---

## Requisitos
- Node.js (v16 ou superior)
- PostgreSQL (v13 ou superior)
- NPM ou Yarn

---

## Configuração do Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/zielisgabriel/task-manager
   cd task-manager-api
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o Banco de Dados**:
   - Crie um banco de dados PostgreSQL.
   - Atualize as credenciais no arquivo `.env`:
     ```env
     DATABASE_URL=postgresql://usuario:senha@localhost:5432/task_manager_db
     ```

4. **Execute as migrações**:
   ```bash
   npm run knex migrate:latest
   ```

5. **Inicie o servidor**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

---

## Rotas da API

### **Criar Tarefa**
**POST** `/tasks`

**Corpo da Requisição**:
```json
{
  "task_name": "Estudar Node.js"
}
```

**Resposta**:
```json
{
  "id": "(uuid code)",
  "task_name": "Estudar Node.js"
  "status": "open",
  "created_at": "2025-01-14T12:00:00.000Z"
}
```

### **Listar Tarefas**
**GET** `/tasks`

**Resposta**:
```json
[
    {
      "id": "(uuid code)",
      "task_name": "Estudar Node.js"
      "status": "open",
      "created_at": "2025-01-14T12:00:00.000Z"
    }
]
```

### **Atualizar Tarefa**
**PUT** `/tasks/:id`

**Corpo da Requisição**:
```json
{
  "title": "Estudar TypeScript",
  "status": "close"
}
```

**Resposta**:
```json
{
  "id": 1,
  "title": "Estudar TypeScript",
  "status": "close",
  "updated_at": "2025-01-14T13:00:00.000Z"
}
```

### **Excluir Tarefa**
**DELETE** `/tasks/:id`

**Resposta**:
```
Status: 200, Ok 
```

---

## Scripts Disponíveis

- `npm run dev` ou `yarn dev`: Inicia o servidor em modo de desenvolvimento.
- `npm start` ou `yarn start`: Inicia o servidor em modo de produção.
- `npx knex migrate:latest`: Executa as migrações.

---

## Estrutura de Pastas
```
project
├── src
│   ├── controllers
│   │   └── taskController.ts
│   ├── database
│   │   ├── database.ts
│   │   └── migrations
│   │       └── 20250113204319_create.ts
│   └── server.ts
├── .env
├── env.config.ts
├── knexfile.ts
├── tsconfig.json
└── package.json
```
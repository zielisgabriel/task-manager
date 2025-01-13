import express, { Request, Response } from 'express'
import { ENV } from '../env.config.ts'
import { randomUUID } from 'node:crypto'
import { taskController } from './controllers/taskController.ts'
import { knex } from './database/database.ts'
// import { requestHandler } from './database/database.ts'

type Task = {
    id: string,
    task_name: string,
    status: string,
    create_at: Date,
}

const db: Task[] = []

const server = express()
server.use(express.json())
// server.use(requestHandler)


server.get('/tasks', async(req, res) => {
    const table = await knex('task_manager').select('*')

    res.status(200).send(table)
})

server.post('/tasks', async(req, res) => {
    const { task_name } = req.body

    const result = taskController({
        id: randomUUID(),
        task_name: task_name,
        status: 'open',
        create_at: new Date(),
    })
    
    await knex('task_manager').insert(result)

    res.status(201).send(result)
})

server.delete('/tasks/:id', (req, res) => {
    const task = db.findIndex((task) => {
        return task.id == req.params.id
    })

    delete db[task]

    res.status(404).send()
})

server.listen(ENV.PORT , () => console.log(`Server running in ${ENV.PORT}`))
import express, { Request, Response } from 'express'
import { ENV } from '../env.config.ts'
import { randomUUID } from 'node:crypto'
import { taskController, taskControllerPatch } from './controllers/taskController.ts'
import { knex } from './database/database.ts'


const server = express()
server.use(express.json())


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

server.delete('/tasks/:id', async(req, res) => {
    try {
        const { id } = req.params
        await knex('task_manager').where('id', '=', id).delete()
        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(404).send()
    }
})

server.patch('/tasks/:id', async(req, res) => {
    const { id } = req.params

    const { task_name, status } = req.body
    const result = taskControllerPatch({
        task_name,
        status,
    })
    
    await knex('task_manager').where('id', '=', id).update({
        task_name: result.task_name,
        status: result.status,
    })

    res.status(200).send()
})

server.listen(ENV.PORT , () => console.log(`Server running in ${ENV.PORT}`))
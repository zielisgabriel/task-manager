import { z } from 'zod'

export function taskController(task: any) {
    const params = z.object({
        id: z.string(),
        task_name: z.string(),
        status: z.string(),
        create_at: z.date(),
    })

    return params.parse(task)
}
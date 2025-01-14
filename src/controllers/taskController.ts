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

export function taskControllerPatch(task: any){
    const params = z.object({
        task_name: z.string().optional(),
        status: z.string().optional()
    })

    return params.parse(task)
}
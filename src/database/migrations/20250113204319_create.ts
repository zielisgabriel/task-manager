import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('task_manager', (table) => {
        table.uuid('id').primary,
        table.string('task_name', 200),
        table.string('status'),
        table.date('create_at')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('task_manager')
}


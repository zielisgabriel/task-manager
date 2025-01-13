// import { neon } from '@neondatabase/serverless'

// const sql = neon(ENV.DATABASE_URL)

// export const requestHandler = async (req, res) => {
//     const result = await sql`SELECT version()`;
//     const { version } = result[0];
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(version);
//   }


import { knex as setupKnex } from 'knex'
import { ENV } from '../../env.config'

export const config = {
    client: 'pg',
    connection: ENV.DATABASE_URL,
    searchPath: ['knex', 'public'],
    migrations: {
        directory: './src/database/migrations',
    }
}

export const knex = setupKnex(config)
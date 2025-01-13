import 'dotenv/config'

type Props = {
    PORT : number,
    DATABASE_URL: string
}

export const ENV: Props = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3333,
    DATABASE_URL: process.env.DATABASE_URL!
}
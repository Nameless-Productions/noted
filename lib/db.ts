import { Pool } from "pg";

export const pool = new Pool({
    connectionString: process.env.CONN_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
"use server";

import { pool } from "./db";

export default async function deleteTodo(id: number) {
    const client = await pool.connect();
    try{
        await client.query("DELETE FROM todos WHERE id = $1", [id]);
    }
    catch(err){
        console.warn("error while deleting todo: ", err);
    }
    finally{
        client.release();
    }
}
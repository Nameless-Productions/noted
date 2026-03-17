"use server";

import { pool } from "./db";

export default async function deleteTodo(id: number) {
    let client;
    try{
        client = await pool.connect();
        await client.query("DELETE FROM todos WHERE id = $1", [id]);
    }
    catch(err){
        console.warn("error while deleting todo: ", err);
    }
    finally{
        client?.release();
    }
}
"use server"

import { pool } from "./db";

export default async function deleteNote(id: number) {
    let client;
    try{
        client = await pool.connect();
        await client.query("DELETE FROM notes WHERE id = $1", [id]);
    }
    catch(err){
        console.warn("error while deleting note: ", err);
    }
    finally{
        client?.release();
    }
    
}
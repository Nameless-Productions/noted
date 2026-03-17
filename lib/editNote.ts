"use server"

import { pool } from "./db";

export default async function editNote(id: number, newContent: string) {
    newContent = btoa(newContent);
    let client;
    try{
        client = await pool.connect();
        await client.query("UPDATE notes SET content = $1 WHERE id = $2", [newContent, id]);
    }
    catch(err){
        console.warn("error while editing note: ", err);
    }
    finally{
        client?.release();
    }
    
}
import { pool } from "./db";

export default async function createNote(ownerId: number) {
    const client = await pool.connect();
    try{
        const title = btoa("Note title");
        const content = btoa("Note content")
        await client.query("INSERT INTO notes (title, content, ownerId) VALUES ($2, $3, $1)", [ownerId, title, content]);
    }
    catch(err){
        console.warn("error while creating note: ", err);
    }
    finally{
        client.release();
    }
}
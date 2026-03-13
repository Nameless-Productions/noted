import { pool } from "./db";

export default async function deleteNote(id: number) {
    const client = await pool.connect();
    try{
        await client.query("DELETE * FROM notes WHERE id = $1", [id]);
    }
    catch(err){
        console.warn("error while editing note: ", err);
    }
    finally{
        client.release();
    }
    
}
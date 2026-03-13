import { pool } from "./db";

export default async function getNotes(ownerId: number) {
    const client = await pool.connect();
    try{
        const res = await client.query("SELECT * FROM notes WHERE ownerId = $1", [ownerId]);
        const notes = res.rows.map((note) => ({
            id: note.id,
            tile: atob(note.tile),
            content: atob(note.content),
            ownerId: note.ownerId
        }));
        return notes;
    }
    catch(err){
        console.warn("Error while getting notes: ", client);
    }
    finally{
        client.release();
    }
}
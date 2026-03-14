import { pool } from "./db";

type Note = {
    id: number,
    title: string,
    content: string,
    ownerId: number
}

export default async function getNotes(ownerId: number) {
    const client = await pool.connect();
    try{
        const res: any = await client.query("SELECT * FROM notes WHERE ownerId = $1", [ownerId]);
        const notes: Note[] = res.rows.map((note: any) => ({
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
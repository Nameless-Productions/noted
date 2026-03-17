"use server"

import { pool } from "./db"

type Note = {
    ownerId: number,
    id: number,
    title: string,
    content: string
}

export default async function getNote(ownerId: number, id: number): Promise<Note | undefined> {
    const client = await pool.connect();
    try{
        const res = await client.query("SELECT * FROM notes WHERE ownerid = $1 AND id = $2", [ownerId, id]);
        if(res.rowCount == 0) return;
        const dbNote = res.rows[0];
        const note: Note = {
            id: dbNote.id,
            ownerId: dbNote.ownerid,
            title: atob(dbNote.title),
            content: atob(dbNote.content)
        }
        return note;
    }
    catch(err){
        console.warn("error while getting note: ", err);
    }
    finally{
        client.release();
    }
}
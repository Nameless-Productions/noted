"use server"

import { pool } from "./db";

type NoteRow = {
    id: number;
    title: string;
    content: string;
    ownerid: number;
};

type Note = {
    id: number;
    title: string;
    content: string;
    ownerId: number;
};

export default async function getNotes(ownerId: number) {
    let client;
    try {
        client = await pool.connect();
        const res = await client.query<NoteRow>("SELECT * FROM notes WHERE ownerid = $1", [ownerId]);
        const notes: Note[] = res.rows.map((note) => ({
            id: note.id,
            title: atob(note.title),
            content: atob(note.content),
            ownerId: note.ownerid,
        }));
        return notes;
    } catch (err) {
        console.warn("Error while getting notes: ", err);
    } finally {
        client?.release();
    }
}
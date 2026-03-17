"use server"

import { redirect } from "next/navigation";
import { pool } from "./db";
import { cookies } from "next/headers";
import { verifyToken } from "./jws";

export default async function createNote(ownerId: number, title: string): Promise<number | undefined> {
    const client = await pool.connect();
    try{
        const encodedTitle = btoa(title);
        const content = btoa("Note content")
        const res = await client.query("INSERT INTO notes (title, content, ownerid) VALUES ($2, $3, $1) RETURNING id", [ownerId, encodedTitle, content]);
        return res.rows[0].id;
    }
    catch(err){
        console.warn("error while creating note: ", err);
    }
    finally{
        client.release();
    }
}

export async function createNoteFormHandeler(formData: FormData) {
    const title = formData.get("title");
    if(!title) return redirect("/notes");
    
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    if(!token) return redirect("/login");
    const res: any = verifyToken(token);
    if(!res.userId) redirect("/login");
    const id = await createNote(res.userId, title.toString());
    if(!id) return redirect("/notes");
    redirect(`/notes/${id}`);
}
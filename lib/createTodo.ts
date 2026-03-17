"use server";

import { cookies } from "next/headers";
import { pool } from "./db";
import { verifyToken } from "./jws";
import { redirect } from "next/navigation";

export default async function createTodo(todo: string, ownerId: number): Promise<number | undefined> {
    todo = btoa(todo); // might make this stronger

    let client;
    try{
        client = await pool.connect();
        const res = await client.query("INSERT INTO todos (todo, owner_id) VALUES ($1, $2) RETURNING id", [todo, ownerId]);
        
        return res.rows[0].id;
    }
    catch(err){
        console.warn("Err while making todo: ", err);
    }
    finally{
        client?.release()
    }
}

export async function createTodoForm(formData: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    const jwtRes: any = verifyToken(token!);
    const uid = jwtRes?.userId;

    const todo = formData.get("todo");
    if(!todo) return;
    await createTodo(todo.toString(), uid);
    redirect("/todos");
}
import { pool } from "./db";

export default async function createTodo(todo: string, ownerId: number): Promise<number | undefined> {
    todo = btoa(todo); // might make this stronger

    const client = await pool.connect();
    try{
        const res = await client.query("INSERT INTO todos (todo, owner_id) VALUES ($1, $2) RETURNING id", [todo, ownerId]);
        
        return res.rows[0].id;
    }
    catch(err){
        console.warn("Err while making todo: ", err);
    }
    finally{
        client.release()
    }
}
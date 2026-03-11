import { pool } from "./db";


export default async function getTodos(ownerId: number) {
    const client = await pool.connect();
    try{
        const res = await client.query("SELECT * FROM todos WHERE owner_id = $1", [ownerId]);
        
        return res.rows;
    }
    catch(err){
        console.warn("Err while making todo: ", err);
    }
    finally{
        client.release()
    }
}
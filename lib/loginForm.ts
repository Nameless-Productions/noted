"use server"

import { Pool } from "pg";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createToken } from "./jws";

const pool = new Pool({
    connectionString: process.env.CONN_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default async function loginForm(formData: FormData){
    const client = await pool.connect();
    try {
        const username = formData.get("username");
        const password = formData.get("password");
        if(!username || !password) return;
        
        const response = await client.query("SELECT * FROM users WHERE username = $1", [username]);
        if(response.rowCount == 1){
            const passwHash = response.rows[0].password;
            const isValidPassword = await bcrypt.compare(password as string, passwHash);
            
            if(isValidPassword){
                const token = createToken({ 
                    userId: response.rows[0].id, 
                    username: response.rows[0].username 
                });
                
                
                const cookieStore = await cookies();
                cookieStore.set("auth-token", token, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7 // 7 days
                });
                
                redirect("/");
            }
            else{
                redirect("/login");
            }
        }
        else{
            redirect("/login");
        }
    } finally {
        client.release();
    }
}
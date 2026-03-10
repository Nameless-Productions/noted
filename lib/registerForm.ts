"use server";

import { redirect } from "next/navigation";
import { pool } from "./db";
import bcrypt from "bcrypt";

export default async function registerForm(formData: FormData) {
    const client = await pool.connect();
    try {
        const username = formData.get("username");
        const password = formData.get("password");
        if(!username || !password) return redirect("/register");

        const response = await client.query("SELECT * FROM users WHERE username = $1", [username]);
        if(response.rowCount == 1) return redirect("/register?error=exists");
        

        const passwHash = await bcrypt.hash(password as string, 10);
        

        await client.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, passwHash]);
        
        return redirect("/login");
    }
    catch(err) {
        console.error(err);
        return redirect("/register?error=other");
    }
    finally {
        client.release();
    }
}
"use server"

import { pool } from "./db";

type TodoRow = {
    id: number;
    todo: string;
    owner_id: number;
};

type Todo = {
    id: number;
    todo: string;
};

export default async function getTodos(ownerId: number): Promise<Todo[] | undefined> {
    const client = await pool.connect();
    try {
        const res = await client.query<TodoRow>("SELECT * FROM todos WHERE owner_id = $1", [ownerId]);

        const todos = res.rows.map((todo) => ({
            id: todo.id,
            todo: atob(todo.todo),
        }));

        return todos;
    } catch (err) {
        console.warn("Err while getting todos: ", err);
    } finally {
        client.release();
    }
}
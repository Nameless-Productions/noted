"use client";

import { createTodoForm } from '@/lib/createTodo';
import deleteTodo from '@/lib/deleteTodo';
import React, { useEffect, useState } from 'react'

type Todo = {
    todo: string,
    id: number
}

export default function TodosPage() {

    const [todos, setTodos] = useState<Todo[]>();

    async function updateTodos() {
        const res = await fetch("/api/todos");
        if(res.ok){
            const json = await res.json();
            setTodos(json.todos);
        }
    }

    useEffect(() => {
        updateTodos();
    }, []);


  return (<>
    <ul className='list-[square] list-inside'>
        {todos?.map((todo) => (
            <li key={todo.id} className='text-lg cursor-pointer' title='Click to delete' onClick={async () => {
                await deleteTodo(todo.id);
                location.href = "/todos"
            }}>{todo.todo}</li>
        ))}
    </ul>

    <br />

    <form action={createTodoForm}>
        <label htmlFor="todo">Todo:</label>
        <br />
        <input type="text" name='todo' id='todo' className='border rounded-lg active:rounded-lg p-0.5' required />
        <input type="submit" value="Create Todo" className='ml-1 border-2 p-0.5 rounded-lg bg-green-200 cursor-pointer' />
    </form>
  </>)
}

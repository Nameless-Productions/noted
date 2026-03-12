"use client";

import deleteTodo from '@/lib/deleteTodo';
import React from 'react'

type Todo = {
    todo: string,
    id: number
}

export default function TodoList({ todos }: { todos: Todo[] | undefined }) {
  return (<>
        <ul className='list-[square] list-inside'>
            {todos?.map((todo) => (
                <li key={todo.id} className='text-lg cursor-pointer' title='Click to delete' onClick={async () => {
                    await deleteTodo(todo.id);
                    location.href = "/todos"
                }}>{todo.todo}</li>
            ))}
        </ul>
  </>)
}

"use client";

import { createTodoForm } from '@/lib/createTodo'
import React from 'react'

export default function CreateTodoForm() {
  return (<>
    <form action={createTodoForm}>
        <label htmlFor="todo">Todo:</label>
        <br />
        <input type="text" name='todo' id='todo' className='border rounded-lg active:rounded-lg p-0.5' required />
        <input type="submit" value="Create Todo" className='ml-1 border-2 p-0.5 rounded-lg bg-green-200 cursor-pointer' />
    </form>
  </>)
}

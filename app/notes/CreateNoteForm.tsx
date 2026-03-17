"use client";

import { createNoteFormHandeler } from '@/lib/createNote';
import React from 'react'

export default function CreateNoteForm() {
  return (<>
    <form action={createNoteFormHandeler}>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" name='title' id='title' className='border rounded-lg active:rounded-lg p-0.5' required />
        <input type="submit" value="Create Note" className='ml-1 border-2 p-0.5 rounded-lg bg-green-200 cursor-pointer' />
    </form>
  </>)
}

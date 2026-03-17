"use client";

import deleteNote from '@/lib/deleteNote';
import editNote from '@/lib/editNote';
import getNote from '@/lib/getNote';
import React, { useEffect, useState } from 'react'

export default function NoteEditor({ id, ownerId }: { id: number, ownerId: number }) {
    const [content, setContent] = useState("loading...");

    async function updateNote() {
      const note = await getNote(ownerId, id);
      if(!note) return;
      setContent(note?.content);
    }

    useEffect(() => {
      updateNote();
    }, [])
  return (<>
    <p>Content:</p>
    <textarea value={content} onChange={(e) => setContent(e.target.value)} className='border-2 p-2 rounded-sm mb-3 mt-3 w-1/2' rows={5}></textarea>
    <br />
    <button onClick={() => {
        editNote(id, content)
        location.reload()
    }} className='border-2 p-1 pl-2 pr-2 mb-3 cursor-pointer bg-green-300 transition-all duration-100 hover:bg-green-400 rounded-xl'>Save</button>
    <br />
    <button onClick={async () => {
      await deleteNote(id);
      location.href = "/notes"
    }} className='border-2 p-1 pl-2 pr-2 mb-3 cursor-pointer bg-red-400 transition-all duration-100 hover:bg-red-500 rounded-xl'>Delete</button>

  </>)
}

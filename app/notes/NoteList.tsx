"use client";

import Link from 'next/link';
import React from 'react'

type Note = {
    id: number;
    title: string;
    content: string;
    ownerId: number;
};

export default function NoteList({ notes }: { notes: Note[] | undefined }) {
  return (<>
    <ul className='list-[square] list-inside'>
        {notes?.map(((note) => (
            <li key={note.id} className='cursor-pointer'><Link href={`/notes/${note.id}`}>{note.title}</Link></li>
        )))}
    </ul>
  </>)
}

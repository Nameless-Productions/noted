import getNotes from '@/lib/getNotes'
import { verifyToken } from '@/lib/jws';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'
import NoteList from './NoteList';

export default async function NotesPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    if(!token) return redirect("/login");
    const res: any = verifyToken(token);
    if(!res || !res.userId) return redirect("/login");
    const notes = await getNotes(res.userId);
  return (<>
    <NoteList notes={notes} />
  </>)
}

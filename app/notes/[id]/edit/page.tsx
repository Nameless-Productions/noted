import getNote from '@/lib/getNote';
import { verifyToken } from '@/lib/jws';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import NoteEditor from './NoteEditor';

export default async function NotePage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;
  const res: any = verifyToken(token!);
  const uid = res.userId;
  const note = await getNote(uid, id);
  if(!note) return redirect("/notes");
  return (<>

    <NoteEditor id={note.id} ownerId={uid} />

    <br />
    <Link href={`/notes/${note.id}`} className='border-2 p-1 pl-2 pr-2 bg-gray-200 transition-all duration-100 hover:bg-gray-300 rounded-xl'>Exit</Link>
  </>)
}

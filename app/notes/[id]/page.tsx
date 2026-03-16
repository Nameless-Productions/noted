import getNote from '@/lib/getNote';
import { verifyToken } from '@/lib/jws';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function NotePage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;
  const res: any = verifyToken(token!);
  const uid = res.userId;
  const note = await getNote(uid, id);
  if(!note) return redirect("/notes");
  return (<>
    <p className='text-xl font-bold'>{note.title}</p>
    <br />
    <p>{note.content}</p>
  </>)
}

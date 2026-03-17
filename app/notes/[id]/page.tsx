import getNote from '@/lib/getNote';
import { verifyToken } from '@/lib/jws';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export default async function NotePage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;
  const res: any = verifyToken(token!);
  const uid = res.userId;
  const note = await getNote(uid, id);
  if(!note) return redirect("/notes");

  const html = await unified().use(remarkParse).use(remarkRehype).use(rehypeSanitize).use(rehypeStringify).process(note.content);

  return (<>
    <p className='text-xl font-bold'>{note.title}</p>
    <br />
    <article className='prose' dangerouslySetInnerHTML={{__html: String(html)}}></article>
    <br />
    <Link href={`/notes/${note.id}/edit`} className='inline-flex items-center border-2 p-1 pl-2 pr-2 bg-gray-200 transition-all duration-100 hover:bg-gray-300 rounded-xl'><Image src="/edit.svg" alt='edit icon' width="20" height="20" className='mr-1'></Image>Edit</Link>
  </>)
}

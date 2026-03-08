import Link from 'next/link';
import React from 'react'

export default function Navbar() {
    const pages = [{title: "Home", href: "/"}, {title: "Todos", href: "/todos"}, {title: "Notes", href: "/notes"}];

  return (
    <nav className='flex border-b-2 border-black space-x-3 p-2 bg-gray-100 items-center text-black'>
        <Link href="/" className='font-bold text-2xl transition-all duration-300 hover:font-normal'>Noted</Link>
        {pages.map((page) => (
            <Link className='text-lg text-black hover:font-bold transition-all duration-200' href={page.href} key={page.href}>{page.title}</Link>
        ))}
    </nav>
  )
}

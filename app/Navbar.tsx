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

        <details className='relative ml-auto'>
          <summary className='text-lg text-black hover:font-bold transition-all duration-200 cursor-pointer list-none [&::-webkit-details-marker]:hidden'>
            Profile
          </summary>

          <div className='absolute right-0 mt-2 w-44 rounded-md border border-gray-300 bg-white shadow-md z-50'>
            <Link href="/me" className='block px-4 py-2 hover:bg-gray-100'>My profile</Link>
            <Link href="/settings" className='block px-4 py-2 hover:bg-gray-100'>Settings</Link>
            <Link href="/logout" className='block px-4 py-2 hover:bg-gray-100'>Log out</Link>
          </div>
        </details>
    </nav>
  )
}

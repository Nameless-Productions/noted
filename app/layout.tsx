import React from 'react';
import './globals.css';
import Navbar from './Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Noted",
  description: "Noted is a note-taking app built for people who just want to write. No cluttered menus, no endless features you'll never use. Just a clean space to get your thoughts down. Your thoughts, captured.",
  icons: {
    icon: "/logo.svg"
  },
  openGraph: {
    title: "Noted",
    description: "Noted is a note-taking app built for people who just want to write. No cluttered menus, no endless features you'll never use. Just a clean space to get your thoughts down. Your thoughts, captured.",
    images: ["https://noted.thenamelessdev.com/logo.svg"]
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='m-3'>
          {children}
        </main>
        <p>&copy; {new Date().getFullYear()} Nameless Productions. Litcensed under the MIT license</p>
      </body>
    </html>
  )
}

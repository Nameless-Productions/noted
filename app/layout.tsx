import React from 'react';
import './globals.css';
import Navbar from './Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Noted",
  description: "Take notes like never! Noted lets you take notes, make todos as easily as a few clicks. Just log in, write the note and you are done!",
  openGraph: {
    title: "Noted",
    description: "Take notes like never! Noted lets you take notes, make todos as easily as a few clicks. Just log in, write the note and you are done!"
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

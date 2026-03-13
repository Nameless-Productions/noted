import React from 'react';
import './globals.css';
import Navbar from './Navbar';

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

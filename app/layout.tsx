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
      </body>
    </html>
  )
}

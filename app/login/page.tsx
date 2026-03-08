"use client"

import React from 'react'

export default function LoginPage() {
  return (<>
    <div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'>
        <p className='text-3xl font-bold'>Login</p>
        <br />
        <form action="/api/login" method='POST'>

            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" placeholder='thenamelessdev' id='username' name='username' className='border-2 rounded-xl active:rounded-xl p-1' required />

            <br />

            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id='password' name='password' className='border-2 rounded-xl active:rounded-xl p-1' required />
            <br />
            <input type="submit" value="Login" className='mt-4 border-2 rounded-full p-2 bg-gray-300 transition-all duration-300 hover:bg-gray-400 cursor-pointer w-30' />
        </form>
    </div>
  </>)
}

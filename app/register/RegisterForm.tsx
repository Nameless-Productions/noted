"use client"

import React, { useState } from 'react'
import registerForm from "@/lib/registerForm";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const [error] = useState(searchParams.get("error"));

  return (
    <div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'>
        <p className='text-3xl font-bold'>Register</p>
        <br />
        <form action={registerForm}>

            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" placeholder='thenamelessdev' id='username' name='username' className='border-2 rounded-xl active:rounded-xl p-1' required />

            <br />

            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id='password' name='password' className='border-2 rounded-xl active:rounded-xl p-1' required />
            <br />
            <input type="submit" value="Register" className='mt-4 border-2 rounded-full p-2 bg-gray-300 transition-all duration-300 hover:bg-gray-400 cursor-pointer w-30' />

            {error == "exists" && <p className='text-red-600'>User already exists</p>}
            {error == "other" && <p className='text-red-600'>An error occured</p>}

            <br />
            <p>Already have an account? Log in <Link href="/login" className='text-blue-400 underline'>here</Link></p>
        </form>
    </div>
  )
}

import { Suspense } from 'react';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'><p className='text-3xl font-bold'>Loading...</p></div>}>
      <RegisterForm />
    </Suspense>
  )
}

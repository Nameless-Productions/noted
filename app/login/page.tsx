import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'><p className='text-3xl font-bold'>Loading...</p></div>}>
      <LoginForm />
    </Suspense>
  )
}

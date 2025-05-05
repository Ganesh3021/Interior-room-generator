import { SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
        <SignUp/>
    </div>
  )
}

export default page
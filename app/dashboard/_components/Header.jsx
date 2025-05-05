"use client"
import { UserButton } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <div className='shadow-sm flex justify-between items-center pt-2'>
        <div className='flex items-center pl-9'>
          <Image src='/visual.png' alt="Website Logo" width={90} height={90} />
        </div>
        <h1 className='font-bold text-xl flex-grow text-center text-white'>
          Ai Interior Room Design Generator
        </h1>
        
      </div>
      
      {/* Navigation Buttons */}
      {/*<div className="flex justify-center space-x-6 p-2 bg-black text-white shadow-lg">
        <Link href="/">
          <button className="relative py-1 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Home
          </button>
        </Link>
        <Link href="/about">
            <button className="relative py-1 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              About Us
            </button>
        </Link>
        <Link href="/tech-stack">
          <button className="relative py-1 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Tech Stack
          </button>
        </Link>
        <Link href="/learn-more">
          <button className="relative py-1 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Learn More
          </button>
        </Link>
      </div>*/}
    </>
  )
}

export default Header

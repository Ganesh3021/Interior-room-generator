"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

function Emptystate() {
  const router = useRouter();

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/bg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black'></div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative w-full h-full flex items-center justify-center'
      >
        <motion.div
          className='relative flex items-center justify-center w-full h-full flex-col z-10 text-center'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Intro Text */}
          <div className="absolute top-5 w-full text-center px-4 z-20">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-200 drop-shadow-lg">
              Try Our Both Models 
            </h2>
          </div>

          {/* Interior Room Generator Button (Right Center) */}
          <motion.div className="absolute right-10 top-1/2 transform -translate-y-1/2 pr-28 flex flex-col items-center space-y-4">
            {/* Title above the image */}
            <h3 className="text-lg md:text-xl font-semibold text-cyan-300 pb-2">Interior Room Design Generator</h3>

            {/* Image above the button */}
            <img
              src="/out.png"
              alt="Image Generator Icon"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl pb-5"
            />
            <Link href={'/dashboard/create-new'}>
              <button className="group relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>

                <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none w-72 h-20 justify-between">
                  <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125"></span>
                  <span className="inline-flex flex-col gap-1 text-left">
                    <span className="text-sm font-medium text-cyan-500">Interior Room Design Generator</span>
                  </span>
                  <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute -bottom-2 left-1/2 h-px w-5/6 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm transition-all duration-300 group-hover:w-full"></div>
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Divider Line */}
          <div className="absolute left-1/2 top-16 transform -translate-x-1/2 h-[calc(100%-5rem)] border-l-4 border-cyan-500"></div>

          {/* Image Generator Button (Left Center) */}
          <motion.div className="absolute left-10 top-1/2 transform -translate-y-1/2 pl-28 flex flex-col items-center space-y-4">
            {/* Title above the image */}
            <h3 className="text-lg md:text-xl font-semibold text-cyan-300 pb-2">Prompt To Image Generator</h3>

            {/* Image above the button */}
            <img
              src="/aiart.jpg"
              alt="Image Generator Icon"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl pb-3.5"
            />

            <Link href={'https://prompt-to-image-generator-theta.vercel.app/'}>
              <button className="group relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>

                <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none w-72 h-20 justify-between">
                  <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125"></span>
                  <span className="flex-col gap-1 text-left">
                    <span className="text-sm font-medium text-cyan-500">Image Generator</span>
                  </span>
                  <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute -bottom-2 left-1/2 h-px w-5/6 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm transition-all duration-300 group-hover:w-full"></div>
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Emptystate;

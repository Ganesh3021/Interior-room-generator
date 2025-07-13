"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/fav.ico" sizes="any" />
        <title>AI Interior Design</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative flex items-center justify-center min-h-screen w-full"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay muted playsInline className="w-full h-full object-cover">
            <source src="/frontt.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Image Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/welcom.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-start w-full pt-0 px-4 text-center">
          {/* Logo */}
          <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        className="mb-6">
            <Image
              src="/visual.png" // Your logo file should be in the public directory
              alt="Visual AI Logo"
              width={250} // Adjust the size as needed
              height={250} // Adjust the size as needed
              className="object-contain"
            />
          </motion.h1>

          {/* Title */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-extrabold top-0 font-family-raleway "
          >
            Welcome to Visual AI
          </motion.h1> 

          {/* Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-10"
          >
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"
              >
                <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                  <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
                  <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                    <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
                        <path
                          fill="currentColor"
                          d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
                  Let's Get Started
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

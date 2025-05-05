"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Card = ({ name, role, tech, email }) => {
  return (
    <div className="group before:hover:scale-95 before:hover:h-96 before:hover:w-96 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-96 before:h-32 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-96 h-96 relative bg-slate-50 flex flex-col items-center justify-center gap-4 text-center rounded-2xl overflow-hidden shadow-lg">
      <div className="w-32 h-32 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500" />
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
        <span className="text-3xl font-semibold">{name}</span>
        <p className="text-lg text-gray-700">{role}</p>
        <p className="text-gray-500 mt-2">{tech}</p>
        <a href={`mailto:${email}`} className="text-blue-500 mt-4 block">{email}</a>
      </div>
    </div>
  );
};

export default function About() {
  const router = useRouter();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-6"
      
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        <Card 
          name="Rupam Debnath"
          role="Front-End Developer"
          tech="Stack Used: JavaScript, React, Tailwind CSS, Universe.io"
          email="rupamdeb987@gmail.com"
        />
        <Card 
          name="Ganesh Baba"
          role="Back-End Developer"
          tech="Stack Used: JavaScript, Firebase, Replicate AI"
          email="ganeshtodker89@gmail.com"
        />
      </div>

      {/* Custom Animated Button */}
      <button 
        onClick={() => router.push("/dashboard/create-new")}
        className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group mt-10"
      >
        Go Back
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right" />
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right" />
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right" />
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Go Back</span>
      </button>
    </div>
  );
}

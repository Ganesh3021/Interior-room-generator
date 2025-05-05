"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div 
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black "
      
    >
      <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-80 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-white bg-black rounded-full px-4 py-2 shadow-lg">
          VISUAL AI Interior Design: How It Works
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This advanced Stable Diffusion-based model has been fine-tuned specifically for interior design image generation.
          By leveraging cutting-edge AI techniques, it transforms text prompts—or even image inputs—into high-quality,
          realistic interior design concepts.
        </p>
        
        <h2 className="text-2xl font-semibold mb-3 text-white bg-black rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition">
          How It Works
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            <strong>Text Encoding (CLIP):</strong> The model processes your text input, converting it into numerical representations.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            <strong>Latent Space Processing:</strong> The AI refines an initial noise pattern into a structured image.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            <strong>Specialized Fine-Tuning for Interior Design:</strong> Trained on high-quality interior images for realistic results.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            <strong>Diffusion Process (Denoising with U-Net):</strong> Gradually enhances the image for realism.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            <strong>Final Image Output:</strong> A high-resolution rendering decoded from latent space.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-white bg-black rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition">
          Key Features & Capabilities
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            ✅ <strong>Text-to-Image:</strong> Generate interior designs from detailed descriptions.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            ✅ <strong>Image-to-Image (Inpainting):</strong> Modify existing room designs with AI-powered refinements.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            ✅ <strong>Style Customization:</strong> Choose from styles like modern, Scandinavian, rustic, and industrial.
          </li>
          <li className="hover:bg-[#d1e1f6] transition p-2 rounded-md">
            ✅ <strong>Adjustable Elements:</strong> Fine-tune lighting, furniture placement, colors, and textures.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3 text-white bg-black rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition">
          Try It for Yourself!
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Enter a prompt like:
        </p>
        <blockquote className="p-4 italic bg-gray-100 border-l-4 border-gray-500 text-gray-900">
          📌 "Cozy bohemian living room with warm lighting, indoor plants, and wooden furniture."
        </blockquote>
        <p className="text-lg text-gray-700 mt-4">
          Within seconds, you’ll receive a beautifully rendered interior concept!
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Would you like expert tips on crafting prompts for even better results? Let me know—I’d be happy to help.
        </p>
      </div>

      {/* Back Button with Hover Effect */}
      <button
        onClick={() => router.push("/dashboard/create-new")}
        className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group mt-10"
      >
        Go Back
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        Go Back
        </span>
      </button>
    </div>
  );
}

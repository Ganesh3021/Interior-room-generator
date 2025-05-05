import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import React from 'react';
import Image from 'next/image';

function ImageModal({ imageUrl, isOpen, onClose }) {
    // Function to handle image download
    const handleDownload = async () => {
        if (!imageUrl) return;

        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'generated-image.jpg'; // Default filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url); // Clean up
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader className="flex justify-center">
                    <AlertDialogTitle>Generated Image</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="flex flex-col items-center justify-center space-y-4">
                    {imageUrl ? (
                        <div className="flex justify-center">
                            <Image src={imageUrl} width={300} height={300} alt='Generated Image' unoptimized />
                        </div>
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
                <AlertDialogFooter>
                    {imageUrl && (
                        <button
                            className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 mt-5 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
                            onClick={handleDownload}
                        >
                            Download
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                className="w-5 h-5 animate-bounce"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                ></path>
                            </svg>
                        </button>
                    )}
                    <button
                        className="overflow-hidden relative w-32 p-2 h-12 mt-5 bg-red-500  text-white border-none rounded-3xl text-xl font-bold cursor-pointer relative z-10 group"
                        onClick={onClose}
                    >
                        Close
                        <span
                            className="absolute w-36 h-32 -top-8 -left-6 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                        ></span>
                        <span
                            className="absolute w-36 h-32 -top-8 -left-6 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                        ></span>
                        <span
                            className="absolute w-36 h-32 -top-8 -left-6 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
                        ></span>
                        <span
                            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                        >Close</span>
                    </button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ImageModal

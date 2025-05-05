"use client";
import Image from "next/image";
import React, { useState } from "react";

function ImageSelection({ selectedImage }) {
  const [file, setFile] = useState();

  const onFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      selectedImage(selectedFile);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start h-full px-4 pt-2 overflow-hidden">
      <label className="text-white font-extrabold text-2xl mb-4 ml-2">
        Select Image of Your Room
      </label>

      <div className="relative group transition-all duration-300 hover:scale-105 ml-2 mt-2">
        <label htmlFor="upload-image" className="cursor-pointer">
          <div
            className={`border-2 border-dashed rounded-3xl w-[350px] h-[360px] flex items-center justify-center 
              transition-all duration-300 
              ${file ? "bg-zinc-900" : "bg-zinc-800"} 
              hover:border-yellow-400 border-4`}
          >
            {!file ? (
              <Image
                src="/image-upload.png"
                width={240}
                height={240}
                alt="Upload"
                className="opacity-80"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={220}
                height={280}
                alt="Preview"
                className="object-contain rounded-2xl"
              />
            )}
          </div>
        </label>

        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;

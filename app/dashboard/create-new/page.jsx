"use client";
import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";
import ImageModal from "./_components/ImageModal";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";

function Createnew() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [outputImage, setOutputImage] = useState();

  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const GenerateAiImage = async () => {
    setLoading(true);
    try {
      const base64Image = await getBase64Image(formData.image);
      if (!base64Image) {
        setLoading(false);
        return;
      }

      const result = await axios.post("/api/redesign-room", {
        imageUrl: base64Image, // Base64 string
        roomType: formData?.roomType,
        designType: formData?.designType,
        userEmail: "",
      });

      if (result.data?.result) {
        setOutputImage(result.data.result);
      }
    } catch (error) {
      console.error("Error generating image:", error.message || error);
    }
    setLoading(false);
  };

  const getBase64Image = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
    >
      {/* Transparent Header */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/20">
        <nav className="space-x-6 text-white flex-1 flex justify-center items-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/learn-more" className="hover:underline">Learn More</a>
        </nav>
        <div className="flex items-center">
          <UserButton />
        </div>
      </header>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/main.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
      </div>

      {/* Main Content */}
      <motion.div className="relative z-10 p-6 max-w-6xl mx-auto pt-28">
        <motion.h2
          className="font-extrabold text-5xl text-center text-white drop-shadow-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Transform Your Room with AI
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 text-lg mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Select your space, pick your design style, and let our AI redesign your room in seconds.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <ImageSelection
            selectedImage={(value) => onHandleInputChange(value, "image")}
          />
          <motion.div className="flex flex-col gap-6">
            <RoomType
              selectedRoomType={(value) =>
                onHandleInputChange(value, "roomType")
              }
            />
            <DesignType
              selectedDesignType={(value) =>
                onHandleInputChange(value, "designType")
              }
            />

            <motion.div
              className="mt-12 flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={GenerateAiImage}
                className="relative bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 ease-in-out text-white font-bold px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-white animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z" />
                  </svg>
                )}
                {loading ? "Generating..." : "Generate"}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <CustomLoading loading={loading} />
        <ImageModal
          imageUrl={outputImage}
          isOpen={!!outputImage}
          onClose={() => setOutputImage(null)}
        />
      </motion.div>
    </motion.div>
  );
}

export default Createnew;

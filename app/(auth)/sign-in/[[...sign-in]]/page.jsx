import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* SignIn Component Overlay */}
      <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
        <SignIn />
      </div>
    </div>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-wide leading-tight">
          NexaVR build tools{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-200 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-l text-center text-neutral-400 max-w-3xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex flex-col sm:flex-row justify-center my-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/"
            className="flex items-center justify-center bg-white text-black py-3 px-6 rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 text-sm sm:text-base font-medium"
          >
            Start for Free
          </a>

          <a
            href="/"
            className="flex items-center justify-center py-3 px-6 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-105 text-sm sm:text-base font-medium"
          >
            Documentation
            <span className="ml-2">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="flex mt-5 justify-center px-4 sm:px-8">
        <img
          src="https://img.freepik.com/premium-photo/boy-is-standing-with-his-vr-mask-by-city_875722-22704.jpg"
          alt="Description"
          className="rounded-lg w-full max-w-3xl border shadow-sm"
        />
      </div>
    </>
  );
}

export default HeroSection;

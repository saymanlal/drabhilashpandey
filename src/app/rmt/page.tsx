// src/app/page.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 12457;
    const duration = 2000;
    const increment = end / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-300 to-yellow-300">
      
      {/* Top bar */}
      <div className="w-full p-4 flex items-center justify-between relative">
        {/* Left logos */}
        <div className="flex items-center gap-4">
          <Image src="/bjplogo.png" alt="Logo 1" width={60} height={60} />
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="/tricolor.png"
              alt="Logo 2"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right image */}
        <div className="absolute right-4 top-0.5 sm:top-1 md:top-1 w-42 h-24 sm:w-96 sm:h-72 md:w-96 md:h-72">
          <Image
            src="/modimohan.png"
            alt="Modi Mohan"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative flex flex-col items-center text-center flex-grow gap-4 px-4 py-4 sm:py-6 md:py-8">
        {/* Left Photo */}
        <div className="absolute left-4 top-152 sm:top-3/8 md:top-3/8 w-20 h-20 sm:w-96 sm:h-96 md:w-96 md:h-96 overflow-hidden rounded-full">
          <Image
            src="/abhilaash.png"
            alt="Abhilaash"
            fill
            className="object-cover"
          />
        </div>

        {/* Central Title & Tagline */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 drop-shadow-lg">
            2025
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-800 drop-shadow-[3px_3px_5px_rgba(0,0,0,0.4)]">
            रोजगार महोत्सव 2.0
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl text-gray-700 font-semibold mt-2">
            “रोजगार के अनेक अवसर”
          </p>

          {/* QR Code */}
          <div className="mt-6 flex flex-col items-center">
            <Image src="/qrcode.png" alt="QR Code" width={160} height={160} className="sm:w-32 sm:h-32 md:w-52 md:h-52" />
            <p className="mt-2 text-gray-700 text-sm sm:text-base font-medium">
              Scan to register
            </p>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-gray-800 leading-relaxed text-lg sm:text-base md:text-lg">
            रोजगार महोत्सव 2.0 भारत सरकार द्वारा आयोजित एक महत्वपूर्ण पहल है,
            जो छात्रों और युवाओं को रोजगार और करियर के नए अवसर प्रदान करता है।
            यह आयोजन विधायक अभिलाष पांडेय जी के मार्गदर्शन में
            श्री राम इंजीनियरिंग कॉलेज, जबलपुर में किया जा रहा है।
            यह आयोजन कंपनियों और प्रतिभाओं के बीच सेतु का कार्य करता है।
          </p>

          {/* Glassmorphism box for date & venue */}
          <div className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-gray-900 font-semibold text-lg sm:text-base md:text-lg">
            📅 दिनांक: 14th अक्टूबर 2025 &nbsp; | &nbsp; 📍 स्थान: श्री राम इंजीनियरिंग कॉलेज, जबलपुर
          </div>
        </div>
      </main>

      {/* Stats */}
      <div className="flex flex-col items-center justify-center gap-6 w-full px-4 py-6">
        {/* Counter */}
        <div className="text-center">
          <p className="text-lg sm:text-base font-semibold text-gray-700">पंजीकृत छात्र:</p>
          <p className="text-3xl sm:text-2xl md:text-3xl font-extrabold text-black">{count.toLocaleString("hi-IN")}</p>
        </div>
      </div>
    </div>
  );
}

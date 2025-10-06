// src/app/page.tsx
"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100">
      <div className="text-center p-10 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-gray-200">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-4">
          🚧 Under Development
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          This page is currently under development. Stay tuned for updates!
        </p>
        <div className="mt-6">
          <button
            onClick={() => window.location.href = "/"}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </main>
  );
}

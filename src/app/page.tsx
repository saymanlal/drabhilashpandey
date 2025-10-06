// src/app/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DEFAULT_PHOTO = "/abhilaash.png";
const GALLERY_IMAGES = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
];

// Notifications array
const NOTIFICATIONS = [
  { text: "Rozgaar Mahotsav 2.O — Register Here", href: "/rmt" },
  { text: "Rozgaar Mahotsav 2.O — Register Here", href: "/rmt" },
  { text: "Rozgaar Mahotsav 2.O — Register Here", href: "/rmt" },
  { text: "Rozgaar Mahotsav 2.O — Register Here", href: "/rmt" },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Seva", href: "/seva" },
  { name: "Raise Voice", href: "/rsvoice" },
  { name: "Programs", href: "/programs" },
  { name: "Contacts", href: "/contacts" },
];

export default function Home() {
  const [animated, setAnimated] = useState(false);
  const galleryRef = useRef<HTMLElement | null>(null);

  // Trigger landing section animation
  useEffect(() => {
    const onVisible = () => setAnimated(true);
    if (document.readyState === "complete") onVisible();
    else window.addEventListener("load", onVisible);
    return () => window.removeEventListener("load", onVisible);
  }, []);

  // Gallery intersection observer
  useEffect(() => {
    if (!galleryRef.current) return;
    const el = galleryRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("gallery-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-100 text-gray-900 antialiased">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-40">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white/30 backdrop-blur-md rounded-b-2xl border border-white/20 shadow-md">
            <div className="flex items-center justify-between h-16 px-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FF9933] shadow-md">
                  <img
                    src={DEFAULT_PHOTO}
                    alt="MP"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Hon. Member of the Legislative Assembly
                  </div>
                  <div className="text-xs text-gray-700/80">
                    Bharatiya Janata Party
                  </div>
                </div>
              </div>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  aria-label="open menu"
                  className="p-2 rounded-md bg-white/20 backdrop-blur"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Notification Bar */}
            <div className="overflow-hidden border-t border-white/10 bg-[#FF9933] text-white">
              <div className="relative h-9 flex items-center">
                <div className="marquee flex gap-16 py-2">
                  {[...NOTIFICATIONS, ...NOTIFICATIONS].map((note, i) => (
                    <Link
                      key={i}
                      href={note.href}
                      className="font-medium hover:underline cursor-pointer whitespace-nowrap"
                    >
                      {note.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-24" />

      {/* Landing Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#FF9933]">
            <Image
              src={DEFAULT_PHOTO}
              alt="MP Photo"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div
            className={`space-y-6 ${
              animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } transition-all duration-700`}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Dr. Abhilash Pandey
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">"Neta Nahi, Beta Hai"</p>

            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <Link
                href="#contact"
                className="px-5 py-3 rounded-md bg-[#FF9933] text-white font-medium shadow hover:opacity-95"
              >
                Seva Ka Mauka De
              </Link>
              <Link
                href="#gallery"
                className="px-5 py-3 rounded-md border border-gray-200 font-medium"
              >
                View Gallery
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-600 max-w-lg mx-auto md:mx-0">
              <p>
                Constituency-focused development, youth employment initiatives
                and an open-door approach for citizens. Contact the office to
                know more about ongoing programs and how to participate in
                Rozgaar Mahotsav 2.O.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        ref={galleryRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Gallery</h2>
        <p className="text-sm text-gray-600 mb-10 text-center">
          A curated set of public events, meetings and community programs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-60 transform transition-all duration-700 gallery">
          {GALLERY_IMAGES.map((src, idx) => (
            <figure
              key={idx}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500 relative group"
            >
              <img
                src={src}
                alt={`gallery-${idx}`}
                loading="lazy"
                className="w-full h-60 object-cover"
              />
              <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold transition-opacity">
                Event {idx + 1}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            className="px-6 py-3 rounded-md bg-[#FF9933] text-white font-medium shadow hover:opacity-95"
          >
            See more photos
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mt-12 border-t bg-white/70 backdrop-blur py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6 items-center text-center md:text-left">
          <div>
            <div className="font-semibold">Office of Shri. Abhilash Pandey</div>
            <div className="text-sm text-gray-700">
              Seva Sadan, Near Home Science College • Phone: +91-9522161218
            </div>
          </div>

          <div className="text-sm text-gray-700">
            © {new Date().getFullYear()} Office of Shri. Abhilash Pandey. All
            rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        .marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }

        /* Pause animation when hovering anywhere inside the marquee */
        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gallery {
          opacity: 0;
          transform: translateY(18px);
        }
        .gallery-visible .gallery {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

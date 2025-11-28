"use client";
import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const Navbar: React.FC = () => {
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sembunyikan logo saat scroll > 50px
      setHideLogo(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#2f2f2f] text-white shadow-md">
      {/* ubah items-start jadi items-center */}
      <div className="px-6 flex justify-between items-center">
        {/* Bagian kiri: Logo + Menu */}
        <div className="flex flex-col items-start ml-6">
          {/* Logo: hilang saat scroll */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              hideLogo ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
            }`}
          >
            <img
              src="/logo.png"
              alt="WarOeng Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Menu horizontal */}
          <ul className="flex space-x-6 text-sm font-semibold py-2">
            <li className="cursor-pointer hover:text-yellow-400 transition">
              Beranda
            </li>
            <li className="cursor-pointer relative group hover:text-yellow-400 transition">
              <button className="flex items-center space-x-1">
                <span>Menu</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown contoh */}
              <ul className="absolute left-0 top-full hidden group-hover:block bg-[#2f2f2f] shadow-lg mt-1 rounded">
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-yellow-400 cursor-pointer transition">
                  Steak
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-yellow-400 cursor-pointer transition">
                  Shake
                </li>
              </ul>
            </li>
            <li className="cursor-pointer hover:text-yellow-400 transition">Promo</li>
            <li className="cursor-pointer hover:text-yellow-400 transition">Berita Terkini</li>
          </ul>
        </div>

        {/* Kanan: Lokasi sejajar dengan menu */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400 transition">
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Lokasi</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

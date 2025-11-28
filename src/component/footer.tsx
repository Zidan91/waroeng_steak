// src/component/Footer.tsx
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  MessageCircle,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Sosmed */}
        <div>
          <img src="logo.png" alt="Waroeng Logo" className="h-12 mb-4" />
          {/* Teks hashtag: # dan INDONESIA putih normal, STEAKNYA putih tebal */}
          <p className="mt-2 text-white">
            #
            <span className="font-bold">STEAKNYA</span>
            INDONESIA
          </p>

          {/* Icon Sosmed */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Informasi */}
        <div>
          <h3 className="font-semibold mb-4">Informasi</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Profile</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Sertifikasi dan Jaminan Kualitas
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">Karir</li>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="font-semibold mb-4">Layanan</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">
              Waroeng Truck Steak
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Saran & Kritik
            </li>
          </ul>
        </div>

        {/* Penghargaan */}
        <div>
          <h3 className="font-semibold mb-4">Penghargaan Dan Sertifikat</h3>
          <div className="grid grid-cols-3 gap-4 place-items-center">
            <img src="reward1.png" alt="Award 1" className="h-14" />
            <img src="reward2.png" alt="Award 2" className="h-14" />
            <img src="reward3.png" alt="Award 3" className="h-14" />
            <img src="reward4.png" alt="Award 4" className="h-14" />
            <img src="reward5.png" alt="Award 5" className="h-14" />
            <img src="reward6.png" alt="Award 6" className="h-14" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-yellow-400 text-black text-left py-6 text-sm">
        Hak Cipta © 2020 Waroeng Steak and Shake. Seluruh Hak Cipta.
      </div>
    </footer>
  );
};

export default Footer;

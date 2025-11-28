"use client";
import React, { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Page: React.FC = () => {
  const menuBaru = [
    { name: "Beef Sambal Korek", category: "Rice Series", image: "menu3.png" },
    { name: "Chicken BBQ", category: "Steak Grill Lokal", image: "menu1.png" },
    { name: "Dori Sambal Korek", category: "Rice Series", image: "menu2.png" },
    { name: "Beef Sozis", category: "Rice Series", image: "menu5.png" },
    { name: "Super Box", category: "Special Menu", image: "Superbox1.png" },
    { name: "Chicken Sambal Korek", category: "Rice Series", image: "menu4.png" },
  ];

  const bestSellers = [
    { name: "Chicken Sambal Korek", category: "Rice Series", image: "menu4.png" },
    { name: "Sirloin Double", category: "Steak Ala Waroeng", image: "best1.png" },
    { name: "Beef Sozis", category: "Rice Series", image: "menu5.png" },
    { name: "Orange Float", category: "Minuman", image: "best3.png" },
    { name: "Beef Sambal Korek", category: "Rice Series", image: "menu3.png" },
    { name: "Beef Slice", category: "Rice Series", image: "best4.png" },
    { name: "Saikoro", category: "Rice Series", image: "best5.png" },
  ];

  const [activeTab, setActiveTab] = useState<"menuBaru" | "bestSellers">("menuBaru");
  const [page, setPage] = useState(0);

  const itemsPerPage = 6;
  const data = activeTab === "menuBaru" ? menuBaru : bestSellers;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayedItems = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const nextPage = () => page < totalPages - 1 && setPage(page + 1);
  const prevPage = () => page > 0 && setPage(page - 1);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('bg.jpg')" }}
      />

      {/* Menu Section */}
      <section className="py-12 bg-white">
        {/* Tabs */}
        <div className="text-center mb-10">
          <h2 className="text-xl font-medium space-x-8">
            <button
              onClick={() => {
                setActiveTab("menuBaru");
                setPage(0);
              }}
              className={`${
                activeTab === "menuBaru" ? "text-black font-semibold" : "text-gray-500"
              } transition-all duration-200 hover:font-bold hover:underline hover:decoration-2`}
            >
              Menu Baru
            </button>
            <button
              onClick={() => {
                setActiveTab("bestSellers");
                setPage(0);
              }}
              className={`${
                activeTab === "bestSellers" ? "text-black font-semibold" : "text-gray-500"
              } transition-all duration-200 hover:font-bold hover:underline hover:decoration-2`}
            >
              Best Sellers
            </button>
          </h2>
        </div>

        {/* Grid & Navigasi */}
        <div className="relative group">
          {page > 0 && (
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black"
            >
              ◀
            </button>
          )}

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[960px] w-full">
              {displayedItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-56 aspect-square flex items-center justify-center mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain max-h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Tulisan menu lebih kecil & samar */}
                  <h3
                    className="text-base font-medium text-gray-700 cursor-pointer
                               transition-all duration-200 hover:font-semibold hover:text-gray-900
                               hover:underline hover:decoration-2"
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              ))}
            </div>
          </div>

          {page < totalPages - 1 && (
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-4 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black"
            >
              ▶
            </button>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

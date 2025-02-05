import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      {/* Logo alanı - Bu SVG'yi kendi logonuzla değiştirin */}
      <div className="mb-8">
        <img src="/logo/logo.webp" alt="Logo" className="w-36" />
      </div>

      {/* Loading animasyonu */}
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#146fad]"></div>
      </div>
    </div>
  );
};

export default Loading;

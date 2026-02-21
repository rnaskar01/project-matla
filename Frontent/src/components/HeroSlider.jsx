import { useEffect, useRef, useState } from "react";
import banners from "../data/banner";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 20000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full lg:bg-center bg-[position:89%_center] transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
          }}
        >
          {/* Overlay */}
          <div className="min-h-screen bg-black/30 flex items-center">
            <div className="w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-white">
                
                {/* Content */}
                <div className="max-w-xl text-center lg:text-left sm:text-left">
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {banner.title}
                  </h1>

                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-2 font-semibold">
                    {banner.subtitle1}
                  </h2>

                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 font-semibold">
                    {banner.subtitle2}
                  </h2>

                  <a
                    href="#contact"
                    className="inline-block bg-red-600 px-5 py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Contact Us
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow (Hidden on Mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20
        bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ‹
      </button>

      {/* Right Arrow (Hidden on Mobile) */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20
        bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ›
      </button>
    </section>
  );
};

export default HeroSlider;
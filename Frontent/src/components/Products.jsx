import React from "react";

const OurProduct = () => {
  return (
    <section
      id="product"
      className="relative bg-cover bg-center lg:py-70 py-90 min-h-[90vh] xl:min-h-screen sm:min-h-screen mt-2 "
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dnjqdkm8s/image/upload/v1771736418/product_sec_back_osbyty.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/20"></div>

        
        {/* Left Content */}
        <div className="space-y-6 max-w-xl lg:-mt-60 -mt-85">
          <h2 className="text-5xl lg:text-6xl lg:text-center lg:mr-55 tracking-wide font-serif text-[#7A1F1F]">
            Our Product
          </h2>

          <p className="text-gray-800 max-w-xl text-lg leading-relaxed">
            At Matla, excellence begins at the source. Our tomato ketchup is made from hand-selected, vine-ripened tomatoes, thoughtfully blended to achieve a perfect balance of depth, sweetness, and freshness. Pure, uncompromised, and crafted with care—it is a taste designed for those who appreciate quality without compromise. Rooted in the richness of the Sundarbans and inspired by the timeless flow of the Matla River, every bottle captures the essence of nature’s finest harvest. More than just a condiment, it is a refined expression of authenticity, freshness, and enduring flavor.
          </p>
        </div>
      </div>

      {/* Product Image Bottom Right */}
      <div>
      <img
        src="https://res.cloudinary.com/dnjqdkm8s/image/upload/v1771736422/product-3_kt2s2w.png"
        alt="Matla Tomato Ketchup"
        className="absolute lg:-bottom-20 -bottom-15  lg:right-50 right-5 
                   w-[300px] lg:w-[520px] 
                   object-contain drop-shadow-2xl scale-110 brightness-75"
      />
      </div>
    </section>
  );
};

export default OurProduct;
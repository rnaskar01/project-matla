const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-cover bg-center py-20 md:py-40 lg:py-60 mt-2"
      style={{
        backgroundImage: "url('/Image/About.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center lg:-mt-58 -mt-18 ">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6 text-[#FFF8E7]">
          About Us
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl mx-auto font-semibold mb-12 text-[#f0ead8] leading-relaxed text-sm sm:text-base">
          At Matla, we believe the secret to great food lies in the purity of
          its ingredients. Inspired by the life-giving energy of the Matla
          River, we bring the freshness of the Sundarbans directly to your
          dining table. From our signature sun-ripened tomato ketchup to our
          vibrant fruit jams, every product is crafted from hand-picked produce
          grown in the fertile soils of the delta. No artificial gimmicks—just
          the authentic, bold flavors of nature bottled for your modern
          lifestyle.
        </p>

        {/* Icons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-8">

          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/Image/icon/ico_1.png"
              alt="Farm Fresh"
              className="h-30 mb-4 lg:-mt-10"
            />
            <p className="text-gray-900 font-semibold text-base sm:text-lg text-center whitespace-nowrap lg:-mt-10 -mt-10">
              Farm Fresh Tomatoes
            </p>
          </div>

          {/* Divider (Only Desktop) */}
          <div className="hidden sm:block h-20 w-px bg-gray-300"></div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/Image/icon/ico_2.png"
              alt="Hygienic Production"
              className="h-30 mb-4 lg:-mt-10 "
            />
            <p className="text-gray-900  font-semibold text-base sm:text-lg text-center whitespace-nowrap lg:-mt-10 -mt-10">
              Hygienic Production
            </p>
          </div>

          {/* Divider (Only Desktop) */}
          <div className="hidden sm:block h-20 w-px bg-gray-300"></div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/Image/icon/ico_3.png"
              alt="No Preservatives"
              className="h-30 mb-4 lg:-mt-10"
            />
            <p className="text-gray-900 font-semibold text-base sm:text-lg text-center whitespace-nowrap lg:-mt-10 -mt-10">
              No Artificial Preservatives
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

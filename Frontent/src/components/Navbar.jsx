import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false); // hide when scrolling down
      } else {
        setShowNavbar(true); // show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full mt-2 z-50 bg-white/90 backdrop-blur shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">

        {/* Logo */}
        <div className="h-full flex items-center">
          <a href="#home">
            <img
              src="/Image/logo.png"
              alt="Matla logo"
              className="lg:h-30 h-18 w-auto scale-125 lg:translate-y-6 origin-left"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["Home", "About", "Product", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 transition hover:text-red-600
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-red-600
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile Only) */}
<button
  className="md:hidden relative  -w-8 h-5 flex flex-col justify-between items-center"
  onClick={() => setOpen(!open)}
>
  <span
    className={`h-0.5 w-8 bg-black transition-all duration-300 ${
      open ? "rotate-45 translate-y-3" : ""
    }`}
  ></span>
  <span
    className={`h-0.5 w-8 bg-black transition-all duration-300 ${
      open ? "opacity-0" : ""
    }`}
  ></span>
  <span
    className={`h-0.5 w-8 bg-black transition-all duration-300 ${
      open ? "-rotate-45 -translate-y-3" : ""
    }`}
  ></span>
</button>
</div>

{/* Mobile Menu */}
<div
  className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
    open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
  }`}
>
  <ul className="flex flex-col gap-4 px-6 text-gray-700 font-medium">
    {["Home", "About", "Product", "Contact"].map((item) => (
      <li
        key={item}
        className="transform transition-all duration-500"
      >
        <a
          href={`#${item.toLowerCase()}`}
          onClick={() => setOpen(false)}
          className="block hover:text-red-600 transition"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
};

export default Navbar;

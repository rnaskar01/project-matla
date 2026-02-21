import ftbg from "../../Image/contact_bg.png"

const Footer = () => {
  return (
    <section 
    className="relative bg-cover bg-center"
    style={{
        backgroundImage: `url(${ftbg})`,
      }}>
    <footer className="text-black font-serif font-semibold text-center py-6">
      © 2026 MATLA. All rights reserved.
    </footer>
    </section>
  );
};

export default Footer;

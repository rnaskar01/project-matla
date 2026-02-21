import { useState } from "react";
import emailjs from "@emailjs/browser";

// Import your icons
import mail from "/Image/icon/mail.png";
import call from "/Image/icon/call.png";
import land from "/Image/icon/landmark.png";
import fb from "/Image/icon/fb.png";
import insta from "/Image/icon/insta.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(
        "https://script.google.com/macros/s/AKfycbxWgwKzN1w-KGgcH8jiL8ugEGrkbso01rJFtDWZ4DaKW_-m7QchbgOIJotu7DcOUEzyHA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            whatsapp,
            message,
          }),
        }
      );

    const templateParams = {
      name: name,
      email: email,
      whatsapp: whatsapp,
      message: message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);

      // Reset form
      setName("");
      setEmail("");
      setWhatsapp("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-cover lg:bg-center bg-[position:75%_center] py-70 mt-2"
      style={{ backgroundImage: "url('/Image/contact_bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start pt-24">
        
        {/* Contact Form */}
        <div className="lg:-mt-80 -mt-90">
          <h2 className="text-4xl font-serif font-bold mb-6">Contact Us</h2>
          <h3 className="text-lg font-serif mb-4">
            Have questions? Reach out to us!
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mt-4 rounded-xl p-8 shadow-lg">

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 focus:outline-none focus:border-red-600"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 focus:outline-none focus:border-red-600"
              />

              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp Number"
                required
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 focus:outline-none focus:border-red-600"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
                rows="4"
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 focus:outline-none focus:border-red-600 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 text-white cursor-pointer mt-4 px-6 py-3 rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info (unchanged) */}
        <div className="relative z-10 lg:-mt-30 -mt-8 lg:ml-30">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Contact Information
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-lg font-serif">
              <img src={mail} alt="mail" className="w-7 h-6" />
              <span>matlafoods@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-lg font-serif">
              <img src={call} alt="call" className="w-5 h-4" />
              <span>+91 8617505480 / +91 9433703604</span>
            </div>

            <div className="flex items-center gap-3 text-lg font-serif">
              <img src={land} alt="location" className="w-5 h-5" />
              <span>
                6 No Jalaberia, Kultali, South 24 Parganas, Sundarbans,
                West Bengal, India, 743338
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Follow Us
              </h3>

              <div className="flex items-center gap-6">
                <a
                  href="https://www.facebook.com/share/18F4HyhMYB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 hover:bg-red-600 hover:border-red-600"
                >
                  <img src={fb} alt="Facebook" className="w-6 h-6" />
                </a>

                <a
                  href="https://www.instagram.com/matlaagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 hover:bg-red-600 hover:border-red-600"
                >
                  <img src={insta} alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">
            <h3 className="text-xl font-semibold mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
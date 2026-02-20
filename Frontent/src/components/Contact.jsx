import { useState } from "react";
import { sendContactMessage } from "../api/contactapi";
import contact_bg from "../../public/Image/contact_bg.png"
import fb from "../../public/Image/icon/fb.png"
import insta from "../../public/Image/icon/insta.png"
import call from "../../public/Image/icon/call.png"
import mail from "../../public/Image/icon/mail.png"
import land from "../../public/Image/icon/landmark.png"



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Save to Google Sheet
      await fetch(
        "https://script.google.com/macros/s/AKfycbxWgwKzN1w-KGgcH8jiL8ugEGrkbso01rJFtDWZ4DaKW_-m7QchbgOIJotu7DcOUEzyHA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name,
            email,
            whatsapp,
            message,
          }),
        },
      );

      // Save to backend
      await sendContactMessage({ name, email, whatsapp, message });

      setStatus("success");
      setShowSuccess(true);
      setName("");
      setEmail("");
      setWhatsapp("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        error.message || "Something went wrong. Please try again.",
      );
    }

    setLoading(false);

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-cover lg:bg-center bg-[position:75%_center] py-70 mt-2"
      style={{
        backgroundImage: `url(${contact_bg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start pt-24">
        {/* Contact Form */}
        <div className="lg:-mt-80 -mt-90">
          <h2 className="text-4xl font-serif font-bold mb-6">Contact Us</h2>
          <h3 className="text-lg font-serif">
            Have questions? Reach out to us!
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mt-4 rounded-xl p-8 shadow-lg">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
                focus:outline-none focus:border-red-600 transition-all duration-300"
                placeholder="Name"
                required
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
                focus:outline-none focus:border-red-600 transition-all duration-300"
                placeholder="Email"
                required
              />

              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
                focus:outline-none focus:border-red-600 transition-all duration-300"
                placeholder="WhatsApp Number"
                required
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
                focus:outline-none focus:border-red-600 transition-all duration-300 resize-none"
                placeholder="Message"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white mt-4 cursor-pointer px-6 py-3 rounded-lg 
              transition-all duration-300 ease-in-out 
              hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:-mt-30 -mt-8 lg:ml-30">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Contact Information
          </h2>

          <div className="flex flex-col gap-2 -mt-2">
            <div className="flex items-center gap-3 text-xl font-serif">
              <img src={mail} alt="mail" className="w-7 h-6" />
              <span>matlafoods@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-xl font-serif">
              <img src={call} alt="call" className="w-5 h-4" />
              <span>+91 8617505480 / +91 9433703604</span>
            </div>

            <div className="flex items-center gap-3 text-xl font-serif">
              <img
                src={land}
                alt="location"
                className="w-5 h-5 lg:-mt-6 -mt-10"
              />
              <span>
                6 No Jalaberia, Kultali, South 24 Parganas, Sundarbans, West
                Bengal, India, 743338
              </span>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Follow Us
              </h3>

              <div className="flex items-center gap-6">
                <a
                  href="https://www.facebook.com/share/18F4HyhMYB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 
                  hover:bg-red-600 hover:border-red-600 
                  transition-all duration-300 group"
                >
                  <img
                    src={fb}
                    alt="Facebook"
                    className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
                  />
                </a>

                <a
                  href="https://www.instagram.com/matlaagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 
                  hover:bg-red-600 hover:border-red-600 
                  transition-all duration-300 group"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center animate-scaleIn">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-4">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Message */}
            <h3 className="text-xl font-semibold mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully.
            </p>

            {/* Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
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

import { useState } from "react";
import { sendContactMessage } from "../api/contactapi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await sendContactMessage({ name, email, message });

      setStatus("success");
      setResponseMessage("Your message has been sent successfully ✅");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        error.message || "Something went wrong. Please try again.",
      );
    }

    setLoading(false);

    // Auto hide message after 4 seconds
    setTimeout(() => {
      setStatus(null);
      setResponseMessage("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-cover lg:bg-center bg-[position:75%_center] py-70 mt-2"
      style={{
        backgroundImage: "url('/Image/contact_bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start pt-24">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Contact Form */}
        <div className="lg:-mt-80 -mt-90">
          <h2 className="text-4xl font-serif font-bold mb-6">Contact Us</h2>
          <h3 className="text-lg font-serif">
            Have questions? Reach out to us!
          </h3>

          <form onSubmit={handleSubmit} className="relative z-20">
            <div className="mt-4 rounded-xl p-8 shadow-lg">
              {/* Success / Error Message */}
              {status && (
                <div
                  className={`mb-6 p-4 rounded-lg text-sm font-medium transition-all duration-300
                    ${
                      status === "success"
                        ? "bg-green-100 text-green-700 border border-green-400"
                        : "bg-red-100 text-red-700 border border-red-400"
                    }`}
                >
                  {responseMessage}
                </div>
              )}

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

        {/* Contact Info (unchanged) */}
        <div className="lg:-mt-40 -mt-8 lg:ml-30">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Contact Information
          </h2>
          <div className="flex flex-col gap-2 -mt-2">
            <div className="flex items-center gap-3 text-xl font-serif text-black-800">
              <img src="/Image/icon/mail.png" alt="mail" className="w-7 h-6" />
              <span>matlafoods@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-xl font-serif">
              <img src="/Image/icon/call.png" alt="call" className="w-5 h-4" />
              <span>+91 8617505480</span>
            </div>

            <div className="flex items-center gap-3 text-xl font-serif text-black-900">
              <img
                src="/Image/icon/landmark.png"
                alt="location"
                className="w-5 h-5 lg:-mt-6 -mt-10"
              />
              <span>
                6 No Jalaberia, Kultali, South 24 Parganas, Sundarbans, West
                Bengal, India, 743338
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

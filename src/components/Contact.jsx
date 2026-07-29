import { useState } from "react";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const githubProfileUrl = "https://github.com/Loki-Nischal";
const linkedinProfileUrl =
  "https://www.linkedin.com/in/nischal-budhathoki-ab8906327/";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const recipientEmail = "budhathoki.nischal@gmail.com";
  const formEndpoint = `https://formsubmit.co/${recipientEmail}`;
  const address = "Jorpati, Kathmandu, Nepal";
  const responseTime = "Within 24 hrs";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send directly to a form service so the message reaches the inbox.
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Message from ${formData.name}`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400 text-lg">
            I'm currently open to new opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-4 rounded-xl border border-orange-500/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-4 rounded-xl border border-orange-500/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-4 rounded-xl border border-orange-500/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />

            <button
              type="submit"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <span>✈</span> Send Message
            </button>

            {submitStatus === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-sm">
                Message could not be sent. Please email me directly at {recipientEmail}.
              </p>
            )}
            <p className="text-gray-400 text-sm">
              I'll receive your message at{" "}
              <span className="font-semibold text-white">
                {recipientEmail}
              </span>
              .
            </p>
          </form>

          {/* Contact Info Section */}
          <div>
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Address</p>
                  <p className="text-white font-semibold">{address}</p>
                </div>
              </div>

              {/* Email */}
              <a 
                href={`mailto:${recipientEmail}`} 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-500/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <FiMail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Email</p>
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">{recipientEmail}</p>
                </div>
              </a>

              {/* Response Time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">
                    Response time
                  </p>
                  <p className="text-white font-semibold">{responseTime}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-orange-500/30">
              <p className="text-gray-400 text-sm font-medium mb-4 uppercase">
                Join Me In
              </p>
              <div className="flex gap-4">
                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-orange-500/30 bg-white/5 hover:bg-orange-500/20 flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-orange-500/30 bg-white/5 hover:bg-orange-500/20 flex items-center justify-center text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${recipientEmail}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${recipientEmail}`;
                  }}
                  className="w-12 h-12 rounded-lg border border-orange-500/30 bg-white/5 hover:bg-orange-500/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
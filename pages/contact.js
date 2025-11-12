import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("2gR89KQRKh--PyzZE"); // Replace with your EmailJS Public Key
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const { name, message } = formData;
    
    if (!name || !message) {
      alert("Please fill in your name and message");
      return;
    }
    
    const phoneNumber = "919790563686";
    const whatsappMessage = `Hi, I'm ${name}.\n\n${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSelectedMethod(null);
  };

  const handleEmailSend = () => {
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !message) {
      alert("Please fill in all required fields");
      return;
    }
    
    setFormStatus("sending");
    
    // Send email via EmailJS
    emailjs.send(
      "service_km5kdu9",      // Replace with your EmailJS Service ID
      "template_om8z1k7",     // Replace with your EmailJS Template ID
      {
        from_name: name,
        from_email: email,
        subject: subject || "Portfolio Contact Form",
        message: message,
        reply_to: email,
      }
    )
    .then(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSelectedMethod(null);
      alert("✅ Email sent successfully! I'll get back to you soon.");
      
      setTimeout(() => setFormStatus(null), 3000);
    })
    .catch((error) => {
      console.error("Email send failed:", error);
      setFormStatus("error");
      alert("❌ Failed to send email. Please try again or contact via WhatsApp.");
      
      setTimeout(() => setFormStatus(null), 3000);
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "prghariprasad@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 97905 63686",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Thiruvallur, Tamil Nadu",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      icon: "💡",
      url: "https://leetcode.com/hariprasad24",
      color: "hover:bg-yellow-600",
    },
    {
      name: "HackerRank",
      icon: "🏆",
      url: "https://www.hackerrank.com/hariprasad24",
      color: "hover:bg-green-600",
    },
    {
      name: "SkillRack",
      icon: "🎯",
      url: "https://www.skillrack.com/faces/resume.xhtml?id=507402&key=510abb67abe6c00845d43315e009df351f73b0e2",
      color: "hover:bg-orange-600",
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/hari240706",
      color: "hover:bg-gray-700",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Get In Touch
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                />

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">✉️</span>
                    Send Message
                  </h2>

                  {/* Step 1: Select Method */}
                  {!selectedMethod && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <p className="text-gray-400 mb-6">Choose how you'd like to send your message:</p>
                      
                      {/* WhatsApp Option */}
                      <motion.button
                        onClick={() => setSelectedMethod('whatsapp')}
                        className="w-full p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-2xl hover:border-green-500 transition-all duration-300 group text-left"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">💬</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                              WhatsApp
                            </h3>
                            <p className="text-gray-400 text-sm">
                              Quick and instant messaging via WhatsApp
                            </p>
                          </div>
                          <motion.div
                            className="text-green-400 text-2xl"
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                          >
                            →
                          </motion.div>
                        </div>
                      </motion.button>

                      {/* Email Option */}
                      <motion.button
                        onClick={() => setSelectedMethod('email')}
                        className="w-full p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 rounded-2xl hover:border-blue-500 transition-all duration-300 group text-left"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">📧</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                              Email
                            </h3>
                            <p className="text-gray-400 text-sm">
                              Send a formal email with detailed information
                            </p>
                          </div>
                          <motion.div
                            className="text-blue-400 text-2xl"
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                          >
                            →
                          </motion.div>
                        </div>
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Step 2: Show Form */}
                  {selectedMethod && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Back Button */}
                      <button
                        onClick={() => setSelectedMethod(null)}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                      >
                        <span>←</span>
                        <span>Change method</span>
                      </button>

                      {/* Selected Method Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                        selectedMethod === 'whatsapp' 
                          ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                          : 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                      }`}>
                        <span className="text-xl">{selectedMethod === 'whatsapp' ? '💬' : '📧'}</span>
                        <span className="font-semibold">
                          Sending via {selectedMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}
                        </span>
                      </div>

                      {/* Form Fields */}
                      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            placeholder="Enter your name"
                          />
                        </div>

                        {/* Email - Only for Email method */}
                        {selectedMethod === 'email' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                              Your Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        )}

                        {/* Subject - Only for Email method */}
                        {selectedMethod === 'email' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                              Subject (optional)
                            </label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                              placeholder="What's this about?"
                            />
                          </div>
                        )}

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                            placeholder={selectedMethod === 'whatsapp' ? 'Type your message...' : 'Tell me about your project...'}
                          />
                        </div>

                        {/* Send Button */}
                        <motion.button
                          type="button"
                          onClick={selectedMethod === 'whatsapp' ? handleWhatsAppSend : handleEmailSend}
                          disabled={formStatus === "sending"}
                          className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 relative overflow-hidden group ${
                            formStatus === "sending" 
                              ? 'opacity-50 cursor-not-allowed' 
                              : selectedMethod === 'whatsapp'
                              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/50'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/50'
                          }`}
                          whileHover={formStatus !== "sending" ? { scale: 1.02 } : {}}
                          whileTap={formStatus !== "sending" ? { scale: 0.98 } : {}}
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {formStatus === "sending" ? (
                              <>
                                <span className="animate-spin">⏳</span>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <span className="text-xl">{selectedMethod === 'whatsapp' ? '💬' : '📧'}</span>
                                <span>Send via {selectedMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}</span>
                              </>
                            )}
                          </span>
                          {formStatus !== "sending" && (
                            <motion.div
                              className={`absolute inset-0 ${
                                selectedMethod === 'whatsapp'
                                  ? 'bg-gradient-to-r from-emerald-600 to-green-600'
                                  : 'bg-gradient-to-r from-purple-600 to-pink-600'
                              }`}
                              initial={{ x: "100%" }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Contact Info Cards */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-4xl">📞</span>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="text-4xl">{info.icon}</div>
                          <div>
                            <h3 className="text-sm text-gray-400 mb-1">{info.title}</h3>
                            <p className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${info.color}`}>
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Coding Profiles */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-4xl">💻</span>
                  Coding Profiles
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {codingProfiles.map((profile, index) => (
                    <motion.a
                      key={index}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center ${profile.color}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-5xl mb-3">{profile.icon}</div>
                      <h3 className="text-white font-semibold">{profile.name}</h3>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="text-lg font-bold text-green-400">Currently Available</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Open to freelance projects, collaborations, and internship opportunities!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
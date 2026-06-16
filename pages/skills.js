import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CertificateModal from "../components/CertificateModal";

export default function Skills() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const domains = [
    {
      icon: "🔐",
      title: "Application Security",
      description:
        "Secure coding, authentication, authorization and OWASP awareness."
    },
    {
      icon: "☁️",
      title: "Cloud Security",
      description:
        "Building cloud security foundations and infrastructure knowledge."
    },
    {
      icon: "🤖",
      title: "AI for Security",
      description:
        "Applying Artificial Intelligence to cybersecurity challenges."
    },
    {
      icon: "🌐",
      title: "Full Stack Development",
      description:
        "Building secure end-to-end web applications."
    }
  ];

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: "Core Skill", icon: "🌐" },
        { name: "CSS3", level: "Core Skill", icon: "🎨" },
        { name: "JavaScript", level: "Core Skill", icon: "⚡" },
        { name: "React.js", level: "Core Skill", icon: "⚛️" },
        { name: "Next.js", level: "Working Knowledge", icon: "▲" },
      ],
    },
    {
      category: "Programming Languages",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", level: "Core Skill", icon: "🐍" },
        { name: "Java", level: "Core Skill", icon: "☕" },
        { name: "JavaScript", level: "Core Skill", icon: "🟨" },
        { name: "C", level: "Working Knowledge", icon: "⚙️" },
        { name: "C++", level: "Working Knowledge", icon: "🚀" },
      ],
    },
    {
      category: "Backend & Databases",
      icon: "🗄️",
      color: "from-indigo-500 to-blue-600",
      skills: [
        { name: "Node.js", level: "Core Skill", icon: "🟢" },
        { name: "Express.js", level: "Working Knowledge", icon: "🚂" },
        { name: "MongoDB", level: "Working Knowledge", icon: "🍃" },
        { name: "MySQL", level: "Working Knowledge", icon: "🛢️" },
        { name: "JWT Authentication", level: "Working Knowledge", icon: "🔑" },
      ],
    },
    {
      category: "Cybersecurity",
      icon: "🛡️",
      color: "from-red-500 to-orange-500",
      skills: [
        { name: "Application Security", level: "Learning", icon: "🔐" },
        { name: "OWASP Top 10", level: "Learning", icon: "⚡" },
        { name: "Kali Linux", level: "Learning", icon: "🐉" },
        { name: "Secure Authentication", level: "Working Knowledge", icon: "🛡️" },
        { name: "JWT Security", level: "Working Knowledge", icon: "🔑" },
      ],
    },
    {
      category: "AI & Intelligent Systems",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Artificial Intelligence", level: "Working Knowledge", icon: "🧠" },
        { name: "AI Model Integration", level: "Working Knowledge", icon: "🤖" },
        { name: "LLMs & Prompt Engineering", level: "Working Knowledge", icon: "💬" },
        { name: "Multi-Agent Systems", level: "Learning", icon: "🚀" },
        { name: "AI for Security", level: "Learning", icon: "🔍" },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      color: "from-yellow-500 to-amber-500",
      skills: [
        { name: "Git", level: "Core Skill", icon: "🔶" },
        { name: "GitHub", level: "Core Skill", icon: "🐙" },
        { name: "Docker", level: "Working Knowledge", icon: "🐳" },
        { name: "VS Code", level: "Core Skill", icon: "💻" },
        { name: "Ubuntu Linux", level: "Working Knowledge", icon: "🐧" },
        { name: "Windows", level: "Core Skill", icon: "🪟" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 pb-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Technical Skills
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Skills, tools, and technologies supporting my journey toward Application Security, Cloud Security, and AI-driven Cybersecurity.
            </p>
          </motion.div>

          {/* Core Domains */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24 lg:mb-28">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-5xl mb-4">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {domain.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="space-y-16 md:space-y-24">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.05 }}
              >
                {/* Category Header */}
                <motion.div
                  className="flex items-center gap-4 mb-8 justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-5xl">{category.icon}</div>
                  <h2 className={`text-2xl md:text-4xl font-bold mb-0 text-center text-transparent bg-clip-text bg-gradient-to-r ${category.color} animate-gradient-shift transition-all duration-700`}>
                    {category.category}
                  </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full min-w-0">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative group min-w-0 w-full"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      onHoverStart={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ y: -4 }}
                    >
                      <div className="relative p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between min-w-0 w-full">
                        {/* Animated Background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        {/* Content */}
                        <div className="relative z-10 w-full h-full flex flex-col justify-between min-w-0">
                          <div className="flex flex-row items-start justify-between gap-2 mb-2 w-full min-w-0">
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              <span className="text-2xl sm:text-3xl flex-shrink-0">{skill.icon}</span>
                              <h3 className="text-base sm:text-lg font-bold text-white break-words whitespace-normal sm:truncate">
                                {skill.name}
                              </h3>
                            </div>
                            <span className={`text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color} whitespace-nowrap flex-shrink-0 self-start sm:self-center mt-1 sm:mt-0`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${category.color} rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="mt-16 md:mt-24 lg:mt-28 mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="mr-2">🚀</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Current Learning Focus
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: "🛡️", title: "Application Security" },
                { icon: "☁️", title: "Cloud Security" },
                { icon: "🤖", title: "AI Security" },
                { icon: "🐳", title: "Docker" },
                { icon: "🐧", title: "Linux Administration" },
                { icon: "🔐", title: "ISC2 CC Preparation" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center h-full"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-4xl">
                      {item.icon}
                    </div>
                    <div className="text-green-400 font-semibold text-sm sm:text-base">
                      {item.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="mr-2">🏅</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
                Certifications & Training
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎨",
                  title: "Graphic Designing Certification",
                  preview: "/certificate-previews/GTEC-Graphic-Designing-Certificate.jpg",
                  pdf: "/certificates/GTEC-Graphic-Designing-Certificate.pdf",
                },
                {
                  icon: "🤖",
                  title: "Infosys Springboard Virtual Internship 6.0 (AI)",
                  preview: "/certificate-previews/Infosys-Springboard-Internship-6.0.jpg",
                  pdf: "/certificates/Infosys-Springboard-Internship-6.0n.pdf",
                },
                {
                  icon: "🐍",
                  title: "Programming in Python (A+ Grade)",
                  preview: "/certificate-previews/NIIT-Programming-in-Python.jpg",
                  pdf: "/certificates/NIIT-Programming-in-Python.pdf",
                },
                {
                  icon: "💻",
                  title: "Programming in C & C++ (A Grade)",
                  preview: "/certificate-previews/NIIT-Programming-in-C-and-C++.jpg",
                  pdf: "/certificates/NIIT-Programming-in-C-and-C++.pdf",
                },
                {
                  icon: "🎖️",
                  title: "NCC 'A' Certificate",
                  preview: "/certificate-previews/NCC-'A'-Certificate.jpg",
                  pdf: "/certificates/NCC-'A'-Certificate.pdf",
                },
                {
                  icon: "🛡️",
                  title: "ISC2 Certified in Cybersecurity (CC) - Preparing",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-center h-full"
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    setSelectedCertificate({
                      title: cert.title,
                      preview: cert.preview,
                      pdf: cert.pdf,
                    });
                    setModalOpen(true);
                  }}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">
                      {cert.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Communities & Contributions */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="mr-2">🌐</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                Communities & Contributions
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full"
                onClick={() => {
                  setSelectedCertificate({
                    title: "GDG On Campus RMKEC",
                    preview: "/certificate-previews/GDG-RMKEC-Tech-Wing.jpg",
                    pdf: "/certificates/GDG-RMKEC-Tech-Wing.pdf",
                  });
                  setModalOpen(true);
                }}
              >
                <div>
                  <div className="text-5xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    GDG On Campus RMKEC
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Tech Wing Member contributing to technical activities,
                  collaboration, and developer community initiatives.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="mr-2">💼</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                Internship Experience
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💻",
                  title: "CodSoft",
                  role: "C++ Programming Intern",
                  preview: "/certificate-previews/CodSoft-Intern.jpg",
                  pdf: "/certificates/CodSoft-Intern.pdf",
                },
                {
                  icon: "🌐",
                  title: "CodeBind Technologies",
                  role: "Web Development Intern",
                  preview: "/certificate-previews/CodeBind-Technologies-Intern.jpg",
                  pdf: "/certificates/CodeBind-Technologies-Intern.pdf",
                },
                {
                  icon: "☕",
                  title: "Arttifai Tech",
                  role: "Java Programming Intern",
                  preview: "/certificate-previews/Arttifai-Tech-Intern.jpg",
                  pdf: "/certificates/Arttifai-Tech-Intern.pdf",
                },
                {
                  icon: "🛡️",
                  title: "AD Infocom Systems",
                  role: "Cybersecurity Intern",
                  preview: "/certificate-previews/AD-Infocom-Systems-Intern.jpg",
                  pdf: "/certificates/AD-Infocom-Systems-Intern.pdf",
                },
                {
                  icon: "🤖",
                  title: "Infosys Springboard Virtual Internship 6.0",
                  role: "Artificial Intelligence Intern",
                  preview: "/certificate-previews/Infosys-Springboard-Internship-6.0.jpg",
                  pdf: "/certificates/Infosys-Springboard-Internship-6.0.pdf",
                },
                {
                  title: "Induskiller",
                  role: "Tech Team Intern",
                  icon: "⚙️",
                  preview: "/certificate-previews/Induskiller-Intern.jpg",
                  pdf: "/certificates/Induskiller-Intern.pdf",
                },
                {
                  icon: "🚀",
                  title: "LTI Technology",
                  role: "Software Developer Intern",
                  preview: "/certificate-previews/LTI-Tech-Intern.jpg",
                  pdf: "/certificates/LTI-Tech-Intern.pdf",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    setSelectedCertificate({
                      title: item.title,
                      preview: item.preview,
                      pdf: item.pdf,
                    });
                    setModalOpen(true);
                  }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="text-5xl mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 md:mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl text-sm sm:text-base">
                Currently focused on Application Security, Cloud Security, AI for Security,
                Linux Administration, Secure Software Development, and preparing for the
                ISC2 Certified in Cybersecurity (CC) certification.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 min-h-[44px] leading-tight"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedGallery([]);
          setCurrentIndex(0);
        }}
        certificate={selectedCertificate}
        gallery={selectedGallery}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setSelectedCertificate={setSelectedCertificate}
      />
    </>
  );
}
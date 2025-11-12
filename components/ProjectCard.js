import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px 0 rgba(56,189,248,0.4)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-6 mb-6 shadow cursor-pointer"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <a href={link} className="text-blue-600 font-bold" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </motion.div>
  );
}
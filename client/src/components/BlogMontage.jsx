import { useState } from "react";
import { motion } from "framer-motion";

const tiles = [
  { src: "/assets/projects/promptforge.jpg", label: "PromptForge" },
  { src: "/assets/projects/interview-armor.jpg", label: "Interview Armor" },
  { src: "/assets/projects/canvas-daily.jpg", label: "Canvas Daily" },
  { src: "/assets/projects/toolbelt.jpg", label: "Toolbelt" },
  { src: "/assets/projects/reset.jpg", label: "Reset" },
];

const Tile = ({ src, label }) => {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-800 group/tile">
      <img
        src={src}
        alt={`${label} screenshot`}
        loading="lazy"
        onError={() => setError(true)}
        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/tile:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <span className="text-xs text-white font-medium">{label}</span>
      </div>
    </div>
  );
};

const BlogMontage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8"
    >
      {tiles.map((t) => (
        <Tile key={t.src} {...t} />
      ))}
    </motion.div>
  );
};

export default BlogMontage;

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, ArrowRight, Calendar } from "lucide-react";

const BlogCard = ({ post, onOpen, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(post.slug)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl card-hover group relative text-left w-full cursor-pointer overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden bg-gray-800">
        {post.coverImage && !imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <ImageIcon size={32} className="text-gray-500" />
          </div>
        )}
        {post.coverImage && !imageError ? (
          <img
            src={post.coverImage}
            alt={`${post.title} cover`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full gradient-bg flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-cyan-400 mb-2">
          <Calendar size={14} />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all leading-tight mb-3">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.teaser}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
          Read post <ArrowRight size={16} />
        </span>
      </div>
    </motion.button>
  );
};

export default BlogCard;

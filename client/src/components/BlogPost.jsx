import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ImageIcon, Calendar } from "lucide-react";
import BlogMontage from "./BlogMontage";

const Segments = ({ content }) =>
  content.map((seg, i) => {
    if (typeof seg === "string") return <span key={i}>{seg}</span>;
    if (seg.href)
      return (
        <a
          key={i}
          href={seg.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
        >
          {seg.text}
        </a>
      );
    if (seg.bold)
      return (
        <strong key={i} className="text-white font-semibold">
          {seg.text}
        </strong>
      );
    return <span key={i}>{seg.text}</span>;
  });

const PostImage = ({ block }) => {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden glass">
        <img
          src={block.src}
          alt={block.alt}
          loading="lazy"
          onError={() => setError(true)}
          className="w-full h-auto object-cover"
        />
      </div>
      {block.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
};

const PostVideo = ({ block }) => (
  <figure className="my-8">
    <div className="rounded-2xl overflow-hidden glass">
      <video
        controls
        preload="metadata"
        poster={block.poster}
        className="w-full h-auto block"
      >
        <source src={block.src} type="video/mp4" />
        Your browser doesn&apos;t support embedded video. You can watch it at{" "}
        <a href={block.src}>{block.src}</a>.
      </video>
    </div>
    {block.caption && (
      <figcaption className="text-center text-sm text-gray-500 mt-3">
        {block.caption}
      </figcaption>
    )}
  </figure>
);

const Block = ({ block }) => {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="text-2xl font-bold gradient-text mt-10 mb-4">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-gray-300 leading-relaxed mb-5">
          <Segments content={block.content} />
        </p>
      );
    case "lead":
      return (
        <p className="text-lg md:text-xl italic text-cyan-300 leading-relaxed my-6">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <blockquote className="my-8 border-l-4 border-cyan-400 pl-6 py-2">
          <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
            {block.text}
          </p>
        </blockquote>
      );
    case "image":
      return <PostImage block={block} />;
    case "video":
      return <PostVideo block={block} />;
    case "montage":
      return <BlogMontage />;
    default:
      return null;
  }
};

const BlogPost = ({ post, onBack }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [heroError, setHeroError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft size={18} /> Back to Blog
      </button>

      <div className="rounded-3xl overflow-hidden glass mb-8 relative h-56 md:h-80 bg-gray-800">
        {post.coverImage && !heroLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <ImageIcon size={40} className="text-gray-500" />
          </div>
        )}
        {post.coverImage && !heroError ? (
          <img
            src={post.coverImage}
            alt={`${post.title} cover`}
            onLoad={() => setHeroLoaded(true)}
            onError={() => {
              setHeroError(true);
              setHeroLoaded(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              heroLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full gradient-bg flex items-center justify-center">
            <span className="text-6xl">📝</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-sm text-cyan-400 mb-3">
        <Calendar size={16} />
        <span>{post.date}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
        {post.title}
      </h2>

      <div className="max-w-3xl">
        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} /> Back to Blog
        </button>
      </div>
    </motion.article>
  );
};

export default BlogPost;

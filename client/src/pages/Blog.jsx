import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blogPosts from "../data/BlogPosts";
import BlogCard from "../components/BlogCard";
import BlogPost from "../components/BlogPost";

const slugFromUrl = () =>
  new URLSearchParams(window.location.search).get("post");

const Blog = () => {
  const [selectedSlug, setSelectedSlug] = useState(() => {
    const slug = slugFromUrl();
    return blogPosts.some((p) => p.slug === slug) ? slug : null;
  });

  useEffect(() => {
    const onPop = () => {
      const slug = slugFromUrl();
      setSelectedSlug(blogPosts.some((p) => p.slug === slug) ? slug : null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const openPost = (slug) => {
    const params = new URLSearchParams(window.location.search);
    params.set("section", "blog");
    params.set("post", slug);
    window.history.pushState({}, "", `?${params.toString()}`);
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closePost = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("post");
    window.history.pushState({}, "", `?${params.toString()}`);
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedPost = blogPosts.find((p) => p.slug === selectedSlug);

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={closePost} />;
  }

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 gradient-text relative"
      >
        Blog
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 gradient-bg rounded-full mt-2"
        />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            post={post}
            index={index}
            onOpen={openPost}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

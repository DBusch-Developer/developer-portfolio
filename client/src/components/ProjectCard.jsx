import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ImageIcon } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="glass rounded-2xl overflow-hidden card-hover group relative"
      whileHover={{ y: -10 }}
    >
      {/* Project Screenshot Area */}
      <div className="h-48 relative overflow-hidden bg-gray-800">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <ImageIcon size={32} className="text-gray-500" />
          </div>
        )}

        {/* Project Screenshot */}
        {project.image && !imageError ? (
          <motion.img
            src={project.image}
            alt={`${project.title} screenshot`}
            className={`w-full h-full object-cover object-top transition-all duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          // Fallback gradient with icon (only shows if no image or error)
          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <motion.div
              className="text-4xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.icon}
            </motion.div>
          </div>
        )}

        {/* Action Links - Top Right */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg border border-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              title="View on GitHub"
            >
              <Github size={18} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg border border-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              title="View Live Site"
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Category Badge - Bottom Left */}
        <motion.div
          className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
            {project.category}
          </span>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all flex-1 leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                className="px-2 py-1 bg-white/5 rounded-md text-xs text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/10 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-gray-400/20"
                title={`Also uses: ${project.technologies.slice(4).join(', ')}`}
              >
                +{project.technologies.length - 4}
              </motion.span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/Projects'
import FilterDropdown from '../components/FilterDropdown'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filters = ['All', 'Applications', 'Web Development', 'UI/UX']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 gradient-text relative"
      >
        Projects
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 gradient-bg rounded-full mt-2"
        />
      </motion.h2>

      {/* Filter Tabs - Desktop/Web View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-2 mb-8 hidden md:flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? 'gradient-bg text-white shadow-lg'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Filter Dropdown - Mobile View */}
      <div className="md:hidden mb-8">
        <FilterDropdown
          isOpen={isDropdownOpen}
          onToggle={toggleDropdown}
          selectedFilter={activeFilter}
          onFilterChange={handleFilterChange}
          filters={filters}
        />
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${activeFilter}-${project.title}`} 
              project={project} 
              index={index} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12 text-gray-400"
        >
          <motion.div 
            className="text-4xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔍
          </motion.div>
          <p>No projects found in this category</p>
        </motion.div>
      )}
    </div>
  )
}

export default Projects
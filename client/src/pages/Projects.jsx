import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/Projects'
import FilterDropdown from '../components/FilterDropdown'

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

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 gradient-text relative"
      >
        Portfolio
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
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="glass rounded-2xl overflow-hidden card-hover group"
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  className="text-6xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <motion.div
                  className="mt-4 inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.category}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-400"
        >
          <div className="text-4xl mb-4">🔍</div>
          <p>No projects found in this category</p>
        </motion.div>
      )}
    </div>
  )
}

export default Projects
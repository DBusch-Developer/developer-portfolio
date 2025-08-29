import { motion } from 'framer-motion'

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleSectionChange = (sectionId) => {
    if (sectionId !== activeSection) {
      // Smooth scroll to top with easing
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Small delay to start the scroll animation first, then change content
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
  };

  return (
    // Hide on mobile, show on desktop
    <nav className="glass rounded-2xl p-2 mb-8 flex-wrap gap-2 hidden md:flex">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => handleSectionChange(item.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
            activeSection === item.id
              ? 'gradient-bg text-white shadow-lg'
              : 'text-gray-300 hover:bg-white/10 hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </motion.button>
      ))}
    </nav>
  )
}

export default Navigation
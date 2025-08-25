import { motion } from 'framer-motion'

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'resume', label: 'Resume' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="glass rounded-2xl p-2 mb-8 flex flex-wrap gap-2">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
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
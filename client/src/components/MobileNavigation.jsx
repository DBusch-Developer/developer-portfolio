import { motion } from 'framer-motion';
import { User, FileText, FolderOpen, PenTool, Mail } from 'lucide-react';

const MobileNavigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'blog', label: 'Blog', icon: PenTool },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

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
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10 px-4 py-2 safe-area-pb"
    >
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`p-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'gradient-bg shadow-lg' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent size={18} />
              </motion.div>
              <span className={`text-xs mt-1 font-medium transition-all duration-300 ${
                isActive ? 'text-cyan-400' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileNavigation;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  // Enhanced page transition variants
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      y: -20,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  };

  return (
    <>
      <div className="min-h-screen p-4 md:p-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <Sidebar />
          <main className="flex-1 glass rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl mb-20 md:mb-0">
            <Navigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="min-h-[60vh]"
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </main>
        </div>
      </div>
      
      {/* Mobile Navigation - Only visible on mobile */}
      <MobileNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
}

export default App;
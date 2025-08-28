import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

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

  return (
    <>
      <div className="min-h-screen p-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <Sidebar />
          <main className="flex-1 glass rounded-3xl p-6 lg:p-8 shadow-2xl">
            <Navigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

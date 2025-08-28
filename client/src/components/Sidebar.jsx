import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const Sidebar = () => {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Diiana Busch";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayName((prev) => prev + fullName.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

   // Contact item click handler with glow effect
  const handleContactItemClick = (e) => {
    e.currentTarget.classList.add('glow-effect');
    setTimeout(() => {
      e.currentTarget.classList.remove('glow-effect');
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "buschdiana007@gmail.com",
      type: "email",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+1 928-830-1079",
      type: "phone",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Prescott, AZ",
      type: "location",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/diana-marie-busch-a17882363/",
      delay: 0,
    },
    { icon: Github, href: "https://github.com/DBusch-Developer", delay: 0.5 },
    { icon: Globe, href: "https://g.dev/dbusch-developer", delay: 1 },
  ];

  return (
    <>
 

    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-80 glass rounded-3xl p-6 lg:p-8 shadow-2xl lg:sticky lg:top-6 h-fit"
    >
      {/* Profile Image */}
      <motion.div
        className="relative w-32 h-32 mx-auto mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full gradient-bg p-1">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src={new URL(`../assets/avatar.jpg`, import.meta.url).href}
            />
          </div>
        </div>
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            background: "linear-gradient(45deg, #ef4444, #06b6d4)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "exclude",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Name with typing effect */}
      <h1 className="text-2xl font-bold text-center mb-2 gradient-text">
        {displayName}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      </h1>

       {/* Enhanced Title with entrance animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 2, 
            type: "spring", 
            stiffness: 200,
            duration: 0.8 
          }}
          className="gradient-bg text-white text-center py-2 px-4 rounded-full text-sm shadow-lg shimmer-effect mb-2"
        >
          Full Stack Developer
        </motion.div>

      {/* Enhanced Contact Info with progressive animations */}
        <div className="space-y-4 mb-18">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 + index * 0.2 }}
              className="animate-on-scroll opacity-0 translate-y-8 flex items-center p-3 glass rounded-xl contact-item-hover transition-all duration-300 cursor-pointer group shimmer-effect"
              onClick={handleContactItemClick}
            >
              <motion.div 
                className="gradient-bg p-2 rounded-lg mr-4"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={16} />
              </motion.div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-sm font-medium">
                  {item.type === "phone" ? (
                    <a
                      href={`tel:${item.value.replace(/[^+\d]/g, "")}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : item.type === "email" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Enhanced Social Links with staggered pulse animations */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, rotate: -180 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                delay: 3 + social.delay,
                type: "spring",
                stiffness: 200 
              }}
              className={`w-12 h-12 glass rounded-xl flex items-center justify-center hover:gradient-bg transition-all duration-300 group pulse-social shimmer-effect`}
              whileHover={{ 
                scale: 1.15, 
                y: -8,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <social.icon
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>

       {/* Decorative elements */}
        <motion.div
          className="mt-8 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-red-400 to-cyan-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3 
              }}
            />
          ))}
        </motion.div>
    </motion.aside>
    </>
  );
};

export default Sidebar;

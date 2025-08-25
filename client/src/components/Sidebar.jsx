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

      {/* Title */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="gradient-bg text-white text-center py-2 px-4 rounded-full text-sm mb-8 shadow-lg"
      >
        Full Stack Developer
      </motion.div>

      {/* Contact Info */}
      <div className="space-y-4 mb-8">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 + index * 0.2 }}
            className="flex items-center p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
          >
            <div className="gradient-bg p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform">
              <item.icon size={16} />
            </div>
            <div>
              <div className="text-xs text-gray-400">{item.label}</div>
              <div className="text-sm">
                {item.type === "phone" ? (
                  <a
                    href={`tel:${item.value.replace(/[^+\d]/g, "")}`}
                    className=""
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

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 + social.delay }}
            className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:gradient-bg transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon
              size={20}
              className="group-hover:text-white transition-colors"
            />
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;

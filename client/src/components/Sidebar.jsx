// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Linkedin, Github, Globe, ChevronDown, ChevronUp } from "lucide-react";

// const Sidebar = () => {
//   const [displayName, setDisplayName] = useState("");
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const fullName = "Diiana Busch";

//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       if (i < fullName.length) {
//         setDisplayName((prev) => prev + fullName.charAt(i));
//         i++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsExpanded(false);
//       }
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Contact item click handler with glow effect
//   const handleContactItemClick = (e) => {
//     e.currentTarget.classList.add('glow-effect');
//     setTimeout(() => {
//       e.currentTarget.classList.remove('glow-effect');
//     }, 1000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "EMAIL",
//       value: "buschdiana007@gmail.com",
//       type: "email",
//     },
//     {
//       icon: Phone,
//       label: "PHONE",
//       value: "+1 928-830-1079",
//       type: "phone",
//     },
//     {
//       icon: MapPin,
//       label: "LOCATION",
//       value: "Prescott, AZ",
//       type: "location",
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/diana-marie-busch-a17882363/",
//       delay: 0,
//     },
//     { icon: Github, href: "https://github.com/DBusch-Developer", delay: 0.5 },
//     { icon: Globe, href: "https://g.dev/dbusch-developer", delay: 1 },
//   ];

//   return (
//     <motion.aside
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`
//         ${isMobile ? 'w-full' : 'lg:w-80'} 
//         glass rounded-3xl shadow-2xl 
//         ${isMobile ? '' : 'lg:sticky lg:top-6'} 
//         h-fit overflow-hidden relative
//       `}
//     >
//       {/* Expand/Collapse Button for Mobile - Top Right Corner */}
//       {isMobile && (
//         <motion.button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="absolute top-4 right-4 z-10 w-8 h-8 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <motion.div
//             animate={{ rotate: isExpanded ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ChevronDown size={16} />
//           </motion.div>
//         </motion.button>
//       )}

//       {/* Main Profile Section - Always Visible */}
//       <div className={`p-6 ${isMobile ? 'pb-4' : 'lg:p-8'}`}>
//         {/* Profile Image */}
//         <motion.div
//           className={`relative mx-auto mb-6 ${isMobile ? 'w-24 h-24' : 'w-32 h-32'}`}
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className="w-full h-full rounded-full gradient-bg p-1">
//             <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
//               <img
//                 className={`rounded-full object-cover ${isMobile ? 'w-20 h-20' : 'w-28 h-28'}`}
//                 src={new URL(`../assets/avatar.jpg`, import.meta.url).href}
//                 alt="Diana Busch"
//               />
//             </div>
//           </div>
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-transparent"
//             style={{
//               background: "linear-gradient(45deg, #ef4444, #06b6d4)",
//               WebkitMask:
//                 "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//               WebkitMaskComposite: "exclude",
//             }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//           />
//         </motion.div>

//         {/* Name with typing effect */}
//         <h1 className={`font-bold text-center mb-2 gradient-text ${isMobile ? 'text-xl' : 'text-2xl'}`}>
//           {displayName}
//           <motion.span
//             animate={{ opacity: [1, 0] }}
//             transition={{ duration: 0.8, repeat: Infinity }}
//             className="text-cyan-400"
//           >
//             |
//           </motion.span>
//         </h1>

//         {/* Enhanced Title with entrance animation */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ 
//             delay: 2, 
//             type: "spring", 
//             stiffness: 200,
//             duration: 0.8 
//           }}
//           className="gradient-bg text-white text-center py-2 px-4 rounded-full text-sm shadow-lg shimmer-effect mb-4"
//         >
//           Full Stack Developer
//         </motion.div>
//       </div>

//       {/* Expandable Content */}
//       <AnimatePresence>
//         {(!isMobile || isExpanded) && (
//           <motion.div
//             initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 1 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className={`px-6 pb-6 ${isMobile ? 'pt-0' : 'lg:px-8'}`}
//           >
//             {/* Enhanced Contact Info with progressive animations */}
//             <div className="space-y-4 mb-8">
//               {contactInfo.map((item, index) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: isMobile ? 0.1 + index * 0.1 : 2.5 + index * 0.2 }}
//                   className="flex items-center p-3 glass rounded-xl contact-item-hover transition-all duration-300 cursor-pointer group shimmer-effect"
//                   onClick={handleContactItemClick}
//                 >
//                   <motion.div 
//                     className="gradient-bg p-2 rounded-lg mr-4"
//                     whileHover={{ 
//                       scale: 1.1, 
//                       rotate: [0, -5, 5, 0],
//                       transition: { duration: 0.3 }
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <item.icon size={16} />
//                   </motion.div>
//                   <div>
//                     <div className="text-xs text-gray-400 uppercase tracking-wider">
//                       {item.label}
//                     </div>
//                     <div className="text-sm font-medium">
//                       {item.type === "phone" ? (
//                         <a
//                           href={`tel:${item.value.replace(/[^+\d]/g, "")}`}
//                           className="hover:text-cyan-400 transition-colors"
//                         >
//                           {item.value}
//                         </a>
//                       ) : item.type === "email" ? (
//                         <a
//                           href={`mailto:${item.value}`}
//                           className="hover:text-cyan-400 transition-colors"
//                         >
//                           {item.value}
//                         </a>
//                       ) : (
//                         item.value
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Enhanced Social Links with staggered pulse animations */}
//             <div className="flex justify-center gap-4 mb-8">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, y: 20, rotate: -180 }}
//                   animate={{ opacity: 1, y: 0, rotate: 0 }}
//                   transition={{ 
//                     delay: isMobile ? 0.3 + index * 0.1 : 3 + social.delay,
//                     type: "spring",
//                     stiffness: 200 
//                   }}
//                   className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:gradient-bg transition-all duration-300 group pulse-social shimmer-effect"
//                   whileHover={{ 
//                     scale: 1.15, 
//                     y: -8,
//                     rotate: [0, -10, 10, 0],
//                     transition: { duration: 0.3 }
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <motion.div
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <social.icon
//                       size={20}
//                       className="group-hover:text-white transition-colors"
//                     />
//                   </motion.div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Decorative elements */}
//             <motion.div
//               className="flex justify-center space-x-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: isMobile ? 0.5 : 4 }}
//             >
//               {[0, 1, 2].map((i) => (
//                 <motion.div
//                   key={i}
//                   className="w-2 h-2 bg-gradient-to-r from-red-400 to-cyan-400 rounded-full"
//                   animate={{ 
//                     scale: [1, 1.5, 1],
//                     opacity: [0.5, 1, 0.5]
//                   }}
//                   transition={{ 
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: i * 0.3 
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.aside>
//   );
// };

// export default Sidebar;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ChevronDown } from "lucide-react";

const Sidebar = () => {
  const [displayName, setDisplayName] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsExpanded(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Contact item click handler with glow effect
  const handleContactItemClick = (e) => {
    e.currentTarget.classList.add('glow-effect');
    setTimeout(() => {
      e.currentTarget.classList.remove('glow-effect');
    }, 1000);
  };

  // Handle avatar click to open professional photo in new tab
  const handleAvatarClick = () => {
    // Replace this URL with the path to your professional photo
    // If using assets folder: `/assets/diana-professional.jpg`
    // Or use an external URL like: `https://yourdomain.com/diana-professional.jpg`
    // const professionalPhotoUrl = "/assets/headshot.jpg";
    const professionalPhotoUrl = "https://developer-portfolio-seven-flax.vercel.app/assets/headshot.jpg";

    window.open(professionalPhotoUrl, '_blank', 'noopener,noreferrer');
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
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        ${isMobile ? 'w-full' : 'lg:w-80'} 
        glass rounded-3xl shadow-2xl 
        ${isMobile ? '' : 'lg:sticky lg:top-6'} 
        h-fit overflow-hidden relative
      `}
    >
      {/* Expand/Collapse Button for Mobile - Top Right Corner */}
      {isMobile && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 right-4 z-10 w-8 h-8 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>
      )}

      {/* Main Profile Section - Always Visible */}
      <div className={`p-6 ${isMobile ? 'pb-4' : 'lg:p-8'}`}>
        {/* Profile Image - Clickable to open professional photo in new tab */}
        <motion.div
          className={`relative mx-auto mb-6 ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} cursor-pointer group`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleAvatarClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-full h-full rounded-full gradient-bg p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img
                className={`rounded-full object-cover ${isMobile ? 'w-20 h-20' : 'w-28 h-28'} group-hover:scale-110 transition-transform duration-300`}
                src={new URL(`../assets/avatar.jpg`, import.meta.url).href}
                alt="Diana Busch - Click to view professional photo"
                title="Click to view professional photo"
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
          
          {/* Hover overlay with text */}
          <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-white text-xs font-medium text-center px-2">
              View Photo
            </span>
          </div>
        </motion.div>

        {/* Name with typing effect */}
        <h1 className={`font-bold text-center mb-2 gradient-text ${isMobile ? 'text-xl' : 'text-2xl'}`}>
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
          className="gradient-bg text-white text-center py-2 px-4 rounded-full text-sm shadow-lg shimmer-effect mb-4"
        >
          Full Stack Developer
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {(!isMobile || isExpanded) && (
          <motion.div
            initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`px-6 pb-6 ${isMobile ? 'pt-0' : 'lg:px-8'}`}
          >
            {/* Enhanced Contact Info with progressive animations */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: isMobile ? 0.1 + index * 0.1 : 2.5 + index * 0.2 }}
                  className="flex items-center p-3 glass rounded-xl contact-item-hover transition-all duration-300 cursor-pointer group shimmer-effect"
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
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    delay: isMobile ? 0.3 + index * 0.1 : 3 + social.delay,
                    type: "spring",
                    stiffness: 200 
                  }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:gradient-bg transition-all duration-300 group pulse-social shimmer-effect"
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
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0.5 : 4 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
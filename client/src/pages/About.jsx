import { motion } from "framer-motion";
import skills from "../data/skills";
import services from "../data/Services";
import ServiceCard from "../components/ServiceCard";

const About = () => {
  

  

  return (
    <div className="">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 gradient-text relative"
      >
        About Me
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 gradient-bg rounded-full mt-2"
        />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4"
      >
        <p>
          A passionate developer with strong expertise in REST APIs, UI/UX, and
          state management solutions. Proven track record in delivering
          cutting-edge solutions, including API integration, third-party
          libraries and performance optimization. Adept at debugging to ensure
          high-quality, responsive apps. An agile collaborator committed to
          staying current with industry trends.
        </p>
        <p>
          If you're seeking a skilled developer to breathe life into your
          project and exceed your expectations, I am here to collaborate and
          create magic together. Reach out, let's transform your vision into a
          reality!
        </p>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold mb-6 text-white"
      >
        What I'm doing
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-2xl font-bold mb-6 text-white"
      >
        Skills
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.4 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className="glass rounded-xl p-4 text-center card-hover group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
              {skill.icon}
            </div>
            <div className="text-sm font-medium text-gray-300">
              {skill.name}
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
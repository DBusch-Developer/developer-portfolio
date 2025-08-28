import { motion } from "framer-motion";

const SkillCard = ({ skill, index = 0 }) => {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.4 + index * 0.1,
        type: "spring",
        stiffness: 200,
      }}
      className="shimmer-effect glass rounded-xl p-4 text-center card-hover group relative overflow-hidden"
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
  );
};

export default SkillCard;
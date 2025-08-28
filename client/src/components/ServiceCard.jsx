import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1 }}
      className="shimmer-effect glass rounded-2xl p-6 card-hover group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
      <div className="gradient-bg p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
        <Icon size={24} className="text-white" />
      </div>
      <h4 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h4>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
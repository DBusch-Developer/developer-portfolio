import { motion } from "framer-motion";

const Input = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  rows,
  className = "",
  initialDelay = 0,
  ...props
}) => {
  const inputVariants = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
    blur: { scale: 1 },
  };

  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: type === "email" ? 20 : type === "subject" || type === "textarea" ? 0 : -20, 
        y: type === "subject" || type === "textarea" ? 20 : 0 
      }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: initialDelay }}
      className={className}
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
      </label>
      <motion.div variants={inputVariants} whileFocus="focus">
        <InputComponent
          type={isTextarea ? undefined : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={isTextarea ? rows : undefined}
          className={`w-full px-4 py-3 glass rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
            isTextarea ? 'resize-none' : ''
          }`}
          placeholder={placeholder}
          {...props}
        />
      </motion.div>
    </motion.div>
  );
};

export default Input;
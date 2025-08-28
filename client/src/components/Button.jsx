import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  state = "normal", // normal, loading, success
  disabled = false,
  href,
  download,
  target,
  icon: Icon,
  iconSize = 20,
  loadingText = "Loading...",
  successText = "Success!",
  successIcon: SuccessIcon,
  onClick,
  className = "",
  fullWidth = false,
  ...props
}) => {
  const baseClasses = "rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-4",
    large: "px-10 py-5 text-lg"
  };
  
  const variantClasses = {
    primary: "gradient-bg text-white",
    success: "bg-gradient-to-r from-green-400 to-teal-500 text-white",
    loading: "bg-blue-500 text-white",
    secondary: "glass text-white border border-white/20 hover:bg-white/10"
  };

  const getVariantClass = () => {
    if (state === "success") return variantClasses.success;
    if (state === "loading") return variantClasses.loading;
    return variantClasses[variant];
  };

  const getMotionProps = () => {
    if (disabled || state === "loading" || state === "success") {
      return {};
    }
    return {
      whileHover: { scale: 1.05, y: -3 },
      whileTap: { scale: 0.95 }
    };
  };

  const renderContent = () => {
    if (state === "success") {
      return (
        <>
          {SuccessIcon && <SuccessIcon size={iconSize} />}
          {successText}
        </>
      );
    }
    
    if (state === "loading") {
      return (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          {loadingText}
        </>
      );
    }
    
    return (
      <>
        {Icon && <Icon size={iconSize} />}
        {children}
      </>
    );
  };

  const combinedClassName = [
    baseClasses,
    sizeClasses[size],
    getVariantClass(),
    fullWidth ? "w-full" : "w-full md:w-auto",
    className
  ].join(" ");

  const isDisabled = disabled || state === "loading" || state === "success";

  // Render as anchor tag if href is provided
  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        className={combinedClassName}
        {...getMotionProps()}
        {...props}
      >
        {renderContent()}
      </motion.a>
    );
  }

  // Render as button
  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={combinedClassName}
      {...getMotionProps()}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
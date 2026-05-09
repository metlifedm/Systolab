import clsx from 'clsx';
import { motion } from 'framer-motion';
import { hoverScale } from '../utils/animations';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-sm';

  const variants = {
    primary: 'bg-accent text-white hover:bg-opacity-90',
    secondary: 'bg-secondary text-dark-text border border-border hover:bg-primary',
    ghost: 'text-dark-text hover:bg-secondary',
  };

  const sizes = {
    sm: 'px-md py-sm text-sm',
    md: 'px-lg py-md text-base',
    lg: 'px-xl py-lg text-lg',
  };

  return (
    <motion.button
      variants={hoverScale}
      initial="rest"
      whileHover="hover"
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
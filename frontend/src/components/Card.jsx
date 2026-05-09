import clsx from 'clsx';
import { motion } from 'framer-motion';
import { hoverScale } from '../utils/animations';

export default function Card({
  children,
  className = '',
  hoverable = false,
  ...props
}) {
  const baseStyles = 'bg-primary border border-border rounded-lg p-lg lg:p-xl';

  if (hoverable) {
    return (
      <motion.div
        variants={hoverScale}
        initial="rest"
        whileHover="hover"
        className={clsx(baseStyles, 'cursor-pointer', className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={clsx(baseStyles, className)} {...props}>
      {children}
    </div>
  );
}
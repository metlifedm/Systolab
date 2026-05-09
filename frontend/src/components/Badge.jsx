import clsx from 'clsx';

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-secondary text-secondary-text border border-border',
    accent: 'bg-accent bg-opacity-10 text-accent border border-accent border-opacity-20',
    success: 'bg-success bg-opacity-10 text-success border border-success border-opacity-20',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-md py-sm rounded-lg text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
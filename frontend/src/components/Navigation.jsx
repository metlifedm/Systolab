import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { NAVIGATION } from '../utils/constants';
import { slideDownVariants } from '../utils/animations';
import { ModalManager } from '../utils/accessibility';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const modalManagerRef = useRef(null);

  useEffect(() => {
    if (!modalManagerRef.current) {
      modalManagerRef.current = new ModalManager(menuRef);
    }

    if (isOpen) {
      modalManagerRef.current.open();
    } else {
      modalManagerRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setIsOpen(false);
    if (modalManagerRef.current) {
      modalManagerRef.current.handleKeyDown(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const isActive = (href) => location.pathname === href;

  return (
    <nav
      className="sticky top-0 z-40 bg-primary border-b border-border"
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-md lg:px-2xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-xs font-bold text-lg text-dark-text hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
            aria-label="SYSTOLAB Home"
          >
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="hidden sm:inline">SYSTOLAB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-lg">
            {NAVIGATION.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                id={item.id}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-sm py-xs',
                  isActive(item.href)
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-secondary-text hover:text-dark-text'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-xs text-dark-text hover:bg-secondary rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-secondary border-t border-border"
            role="menu"
          >
            <div className="px-md py-lg space-y-xs">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  id={item.id}
                  role="menuitem"
                  className={clsx(
                    'block px-md py-md rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset text-sm font-medium',
                    isActive(item.href)
                      ? 'bg-primary text-accent'
                      : 'text-secondary-text hover:bg-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
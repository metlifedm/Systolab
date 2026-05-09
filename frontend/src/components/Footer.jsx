import { Link } from 'react-router-dom';
import { FOOTER_LINKS, BRAND } from '../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border mt-4xl">
      <div className="max-w-7xl mx-auto px-md lg:px-2xl py-4xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3xl mb-3xl">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-xs mb-md">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="font-bold text-dark-text">{BRAND.name}</span>
            </div>
            <p className="text-sm text-secondary-text mb-lg">{BRAND.tagline}</p>
            <p className="text-xs text-secondary-text">
              Part of the SYSTO Kernel
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-dark-text mb-lg">Platform</h3>
            <ul className="space-y-sm">
              {FOOTER_LINKS.navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="text-sm text-secondary-text hover:text-dark-text transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-dark-text mb-lg">Resources</h3>
            <ul className="space-y-sm">
              {FOOTER_LINKS.resources.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm text-secondary-text hover:text-dark-text transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-dark-text mb-lg">Legal</h3>
            <ul className="space-y-sm">
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary-text hover:text-dark-text transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-secondary-text hover:text-dark-text transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-lg">
          <p className="text-xs text-secondary-text text-center">
            © {currentYear} SYSTOLAB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
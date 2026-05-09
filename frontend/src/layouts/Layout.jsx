import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-dark-text">
      <Navigation />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
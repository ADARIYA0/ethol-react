import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoginModal from './components/LoginModal';
import DosenLbLogin from './components/DosenLbLogin';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [activeSection, setActiveSection] = useState('beranda');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Sinkronisasi navigasi browser (back / forward button)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  // Jika berada pada route /auth/dosen-lb, tampilkan halaman Login Dosen Luar Biasa
  if (currentPath === '/auth/dosen-lb') {
    return <DosenLbLogin onBackToHome={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(id) => setActiveSection(id)}
        onLoginClick={openLogin}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section (#beranda) */}
        <Hero onLoginClick={openLogin} />

        {/* About Section (#tentang) */}
        <About />

        {/* Services Section (#our-services) */}
        <Services />

        {/* FAQ Section (#faq) */}
        <Faq />

        {/* Contact Section (#hubungi) */}
        <Contact />
      </main>

      {/* CTA Banner & Footer */}
      <Footer onLoginClick={openLogin} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLogin}
        onSelectDosenLb={() => navigateTo('/auth/dosen-lb')}
      />
    </div>
  );
}

export default App;

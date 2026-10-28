import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BackToTop from './components/BackToTop';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(id) => setActiveSection(id)}
        onLoginClick={() => alert('Tombol Login diklik!')}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section (#beranda) */}
        <Hero onLoginClick={() => alert('Masuk Sekarang diklik!')} />

        {/* About / Tentang Section (#tentang) */}
        <About />

        {/* Services / Layanan Section (#our-services) */}
        <Services />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;

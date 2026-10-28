import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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

      {/* Hero Section */}
      <main>
        <Hero onLoginClick={() => alert('Masuk Sekarang diklik!')} />
      </main>
    </div>
  );
}

export default App;

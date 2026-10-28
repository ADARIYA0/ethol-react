import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  return (
    <div className="min-h-[200vh] bg-gradient-to-br from-[#0a192f] via-[#0d274c] to-[#0f3566]">
      {/* Komponen Navbar Utama */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(id) => setActiveSection(id)}
        onLoginClick={() => alert('Tombol Login diklik!')}
      />
    </div>
  );
}

export default App;

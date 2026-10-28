import React, { useState, useEffect } from 'react';

export type NavItem = {
  label: string;
  id: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Tentang', id: 'tentang' },
  { label: 'Layanan', id: 'our-services' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Hubungi Kami', id: 'hubungi' },
];

export type NavbarProps = {
  onLoginClick?: () => void;
  activeSection?: string;
  onNavigate?: (id: string) => void;
};

export const Navbar: React.FC<NavbarProps> = ({
  onLoginClick,
  activeSection: activeSectionProp,
  onNavigate,
}) => {
  const [internalActive, setInternalActive] = useState<string>('beranda');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const activeSection = activeSectionProp ?? internalActive;

  useEffect(() => {
    const handleScroll = () => {
      const berandaEl = document.getElementById('beranda');
      const heroHeight = berandaEl ? berandaEl.offsetHeight : 0;
      const scrollThreshold = heroHeight > 72 ? heroHeight - 72 : 50;

      setIsScrolled(window.scrollY > scrollThreshold);

      if (!activeSectionProp) {
        const sectionIds = NAV_ITEMS.map((item) => item.id);
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && window.scrollY >= el.offsetTop - 100) {
            setInternalActive(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSectionProp]);

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      setInternalActive(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    setIsMenuOpen(false);
    if (onLoginClick) {
      onLoginClick();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-[72px] px-4 sm:px-5 md:px-10 flex items-center justify-between transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#fffffff7] backdrop-blur-[14px] border-b border-[#f0f0f0] shadow-[0_1px_12px_rgba(0,0,0,0.07)]'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      {/* Bagian Kiri: Brand Logo */}
      <div className="flex items-center gap-4">
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('beranda');
          }}
          className="inline-flex items-center"
        >
          <img
            src="/ethol.png"
            alt="ETHOL"
            className={`h-[58px] object-contain transition-[filter] duration-300 ${
              isScrolled ? 'brightness-100 invert-0' : 'brightness-0 invert'
            }`}
          />
        </a>
      </div>

      {/* Bagian Tengah & Kanan: Nav Links & Tombol Login Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map(({ label, id }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className={`px-4 py-2 rounded-lg text-[14px] cursor-pointer font-sans transition-all duration-200 ${
                isScrolled
                  ? isActive
                    ? 'bg-[#10396814] text-[#103968] font-semibold'
                    : 'text-[#111827] hover:bg-[#1039680d] hover:text-[#103968]'
                  : isActive
                    ? 'bg-white/16 text-white font-semibold'
                    : 'text-white/85 hover:bg-white/12 hover:text-white'
              }`}
            >
              {label}
            </button>
          );
        })}

        {/* Tombol Login */}
        <button
          type="button"
          onClick={handleLoginClick}
          className={`ml-3 px-[22px] py-[9px] rounded-lg text-[13.5px] font-semibold cursor-pointer font-sans transition-colors duration-200 ${
            isScrolled
              ? 'bg-[#103968] text-white hover:bg-[#0d2e57]'
              : 'bg-[#f2c808] text-[#0f2744] hover:bg-[#e6bb00]'
          }`}
        >
          Login
        </button>
      </div>

      {/* Hamburger Button untuk Tampilan Mobile */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 rounded-lg cursor-pointer bg-transparent border-0 outline-none"
      >
        <span
          className={`block w-[22px] h-[2px] rounded-[2px] transition-all duration-250 ease-out ${
            isScrolled ? 'bg-[#374151]' : 'bg-white'
          } ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
        />
        <span
          className={`block w-[22px] h-[2px] rounded-[2px] transition-all duration-250 ease-out ${
            isScrolled ? 'bg-[#374151]' : 'bg-white'
          } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`block w-[22px] h-[2px] rounded-[2px] transition-all duration-250 ease-out ${
            isScrolled ? 'bg-[#374151]' : 'bg-white'
          } ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
        />
      </button>

      {/* Dropdown Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 flex flex-col bg-[#fffffffa] backdrop-blur-[14px] border-b border-[#f0f0f0] px-5 pt-3 pb-5 gap-1 shadow-[0_8px_24px_rgba(0,0,0,0.1)] z-[199]">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`w-full text-left px-4 py-2 rounded-lg text-[14px] cursor-pointer font-sans transition-all duration-200 ${
                  isActive
                    ? 'bg-[#10396814] text-[#103968] font-semibold'
                    : 'text-[#111827] hover:bg-[#1039680d] hover:text-[#103968]'
                }`}
              >
                {label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={handleLoginClick}
            className="mt-2 w-full flex justify-center items-center px-[22px] py-[9px] rounded-lg text-[13.5px] font-semibold cursor-pointer font-sans bg-[#103968] text-white hover:bg-[#0d2e57] transition-colors duration-200"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

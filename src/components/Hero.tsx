import React from 'react';

export type HeroProps = {
  onLoginClick?: () => void;
};

const PARTICLE_POSITIONS = [7, 18, 29, 38, 51, 63, 72, 44, 85, 14, 57, 91];

export const Hero: React.FC<HeroProps> = ({ onLoginClick }) => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden pt-[92px] sm:pt-[100px] pb-[56px] sm:pb-[64px] md:pb-[60px] px-4 sm:px-6 md:px-10"
      style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(to bottom, rgba(7, 20, 38, 0.88), rgba(7, 20, 38, 0.4) 22%, rgba(7, 20, 38, 0) 42%), linear-gradient(to right, rgba(13, 45, 82, 0.95), rgba(13, 45, 82, 0.6) 70%, rgba(13, 45, 82, 0.88)), url(/hero/ethol_hero.webp) center / cover no-repeat',
      }}
    >
      {/* Background Radial Glow */}
      <div
        className="absolute -top-[80px] -left-[80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {PARTICLE_POSITIONS.map((left, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: '-8px',
              width: '3.5px',
              height: '3.5px',
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
              animation: `particleFloat calc(7s + ${index} * 0.6s) ease-in infinite`,
              animationDelay: `calc(${index} * 0.8s)`,
            }}
          />
        ))}
      </div>

      {/* Konten Utama Hero Section */}
      <div className="max-w-[1160px] mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        <div className="w-full md:flex-[0_0_42%] md:min-w-[300px]">
          {/* Version Badge (PENS | ETHOLv3) */}
          <div className="inline-flex items-center gap-2.5 mb-[22px] px-[18px] py-2 border-[1.5px] border-white/30 bg-white/[0.06] rounded-full text-[13px] font-bold tracking-[0.02em] animate-fade-in-up [animation-delay:0.15s]">
            <img
              src="/Logo_PENS_putih.png"
              alt="PENS"
              className="h-5 w-auto object-contain"
            />
            <span className="text-white/30">|</span>
            <span className="text-[#f2c808]">ETHOLv3</span>
          </div>

          {/* Heading */}
          <h1 className="m-0 text-white font-extrabold leading-[1.18] tracking-[-0.03em] text-[clamp(1.75rem,7vw,2.4rem)] md:text-[clamp(1.5rem,2.5vw,2.2rem)] animate-fade-in-up [animation-delay:0.3s]">
            Belajar.
            <br />
            Terhubung.
            <br />
            <span className="text-[#f2c808]">Di mana saja.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 mb-0 text-[16px] leading-[1.8] text-white/80 max-w-[420px] animate-fade-in-up [animation-delay:0.45s]">
            Platform pembelajaran digital PENS untuk mendukung proses belajar mengajar yang lebih mudah, terintegrasi, dan kapan saja.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-9 flex-wrap animate-fade-in-up [animation-delay:0.75s]">
            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-[10px] border-0 bg-[#f2c808] hover:bg-[#e6bb00] text-[#0f2744] font-bold text-[14.5px] cursor-pointer font-sans transition-all duration-200 hover:-translate-y-[1px]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
              </svg>
              Masuk Sekarang
            </button>

            <a
              href="https://www.pens.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-[13px] rounded-[10px] border-[1.5px] border-white/40 hover:border-white/70 bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-[14.5px] font-sans no-underline cursor-pointer transition-all duration-200 hover:-translate-y-[1px]"
            >
              Tentang PENS
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider di Bagian Bawah */}
      <div className="absolute -bottom-[1px] left-0 right-0 leading-none pointer-events-none overflow-hidden z-10">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="120"
          className="block w-full max-w-full h-[60px]"
        >
          <path
            d="M0,70 C360,0 720,110 1080,30 C1260,0 1380,70 1440,50 L1440,120 L0,120 Z"
            fill="#f8fafc"
            opacity="0.4"
            className="animate-wave-1"
          />
          <path
            d="M0,90 C300,20 600,110 900,50 C1100,10 1300,80 1440,60 L1440,120 L0,120 Z"
            fill="#f8fafc"
            className="animate-wave-2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

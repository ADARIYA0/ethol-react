import React from 'react';

export type FooterProps = {
  onLoginClick?: () => void;
};

export const Footer: React.FC<FooterProps> = ({ onLoginClick }) => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-b from-[#0d2d52] to-[#0a2038] py-[48px] sm:py-[64px] md:py-[88px] px-4 sm:px-6 md:px-10 text-center relative overflow-hidden">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="m-0 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-white tracking-[-0.02em] leading-[1.2]">
            Siap melanjutkan pembelajaran Anda?
          </h2>
          <p className="mt-4 mb-0 text-white/60 text-[15px] leading-[1.75]">
            Gunakan akun PENS Anda untuk masuk dan mulai akses semua fitur
            pembelajaran digital.
          </p>
          <button
            type="button"
            onClick={onLoginClick}
            className="mt-8 px-8 py-[14px] rounded-[10px] border-0 bg-[#f2c808] hover:bg-[#e6bb00] text-[#0f2744] font-bold text-[15px] cursor-pointer font-sans inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          >
            Masuk ke ETHOL
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
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer Utama */}
      <footer className="bg-[#07192e] py-7 sm:py-9 px-4 sm:px-6 md:px-10 overflow-x-hidden">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between flex-wrap gap-4 text-center sm:text-left">
          {/* Logo ETHOL & PENS */}
          <div className="flex items-center gap-4">
            <img
              src="/ethol.png"
              alt="ETHOL"
              className="h-10 object-contain brightness-0 invert opacity-90"
            />
            <div className="w-[1px] h-6 bg-white/[0.15]" />
            <img
              src="/Logo_PENS_putih.png"
              alt="PENS"
              className="h-[34px] object-contain opacity-80"
            />
          </div>

          {/* Copyright Text */}
          <p className="m-0 text-[12px] text-white/40">
            © 2026 Politeknik Elektronika Negeri Surabaya. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

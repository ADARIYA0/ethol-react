import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="tentang"
      className="bg-[#f8fafc] py-[48px] sm:py-[56px] md:py-[88px] px-4 sm:px-6 md:px-10 overflow-x-hidden scroll-mt-[72px]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-16 flex-wrap">
        {/* Kolom Kiri: Teks & Keterangan */}
        <div className="w-full md:flex-1 md:min-w-[280px]">
          {/* Eyebrow Badge */}
          <span className="inline-block text-[11px] font-bold text-[#103968] tracking-[0.1em] uppercase bg-[#10396812] rounded-full px-[14px] py-[5px] mb-[18px]">
            Tentang ETHOL
          </span>

          {/* Heading H2 */}
          <h2 className="m-0 text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[#111827] tracking-[-0.02em] leading-[1.25]">
            Enterprise Technology
            <br />
            Hybrid Online Learning
          </h2>

          {/* Paragraf 1 */}
          <p className="mt-4 mb-0 text-[#4b5563] text-[15px] leading-[1.8]">
            ETHOL adalah platform pembelajaran digital resmi Politeknik Elektronika
            Negeri Surabaya yang menyediakan pengalaman belajar online yang baik bagi
            mahasiswa, dengan banyak fitur, mudah digunakan, dan memiliki user
            experience yang nyaman.
          </p>

          {/* Paragraf 2 */}
          <p className="mt-3 mb-0 text-[#4b5563] text-[15px] leading-[1.8]">
            Semua aktivitas perkuliahan tertata rapi sehingga mahasiswa merasa nyaman
            belajar online.
          </p>

          {/* Chip Fitur */}
          <div className="flex gap-2.5 mt-7 flex-wrap">
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-[9px] border-[1.5px] border-[#103968] text-[#103968] font-semibold text-[13px]">
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
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              Web Based App
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Mockup Platform (Laptop & Mobile) */}
        <div className="w-full md:w-[clamp(260px,45%,480px)] md:flex-[0_0_auto] flex items-center justify-center">
          <img
            src="/Ethol_desktop_mobile.png"
            alt="ETHOL platform mockup"
            className="w-full object-contain rounded-[16px] drop-shadow-[0_16px_48px_rgba(16,57,104,0.15)]"
          />
        </div>
      </div>
    </section>
  );
};

export const Tentang = About;
export default About;

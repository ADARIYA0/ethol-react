import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'lms',
    title: 'Sistem Manajemen Pembelajaran',
    description:
      'Platform pembelajaran digital modern, mudah digunakan, dan ramah perangkat mobile sebagai teman belajar Anda.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17 3H7a2 2 0 00-2 2v1H3v2h2v1a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2zm0 4H7V5h10v2zm2 4H5v8a2 2 0 002 2h10a2 2 0 002-2v-8z" />
      </svg>
    ),
  },
  {
    id: 'video',
    title: 'Video Pembelajaran Online',
    description:
      'Video pembelajaran dari dosen dapat diakses kapan saja dan di mana saja sesuai kecepatan belajar Anda.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
      </svg>
    ),
  },
  {
    id: 'conference',
    title: 'Pembelajaran Sinkron Konferensi',
    description:
      'Mahasiswa dan Dosen dapat berkomunikasi dan berdiskusi berbagai topik melalui fasilitas konferensi video.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    id: 'monitoring',
    title: 'Monitoring Efektivitas Pembelajaran',
    description:
      'Dosen dan Admin dapat memantau aktivitas mahasiswa selama mengikuti perkuliahan secara online.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.36.07-.73.07-1.08s-.03-.73-.07-1.08l2.32-1.82c.21-.16.27-.45.14-.68l-2.2-3.82c-.13-.23-.42-.31-.65-.22l-2.74 1.1c-.57-.44-1.18-.8-1.85-1.07l-.42-2.92A.51.51 0 0014 2h-4a.51.51 0 00-.5.43l-.42 2.92c-.67.27-1.28.63-1.85 1.07L4.49 5.32c-.23-.09-.52-.01-.65.22L1.64 9.36c-.14.23-.08.52.14.68l2.32 1.82c-.04.35-.07.72-.07 1.08s.03.73.07 1.08L1.78 15.84c-.22.16-.28.45-.14.68l2.2 3.82c.13.23.42.31.65.22l2.74-1.1c.57.44 1.18.8 1.85 1.07l.42 2.92c.07.24.29.43.5.43h4c.21 0 .43-.19.5-.43l.42-2.92c.67-.27 1.28-.63 1.85-1.07l2.74 1.1c.23.09.52.01.65-.22l2.2-3.82c.14-.23.08-.52-.14-.68l-2.32-1.82z" />
      </svg>
    ),
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="our-services"
      className="bg-[#f3f4f6] py-[48px] sm:py-[56px] md:py-[88px] px-4 sm:px-6 md:px-10 relative overflow-hidden scroll-mt-[72px]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-14 relative flex-wrap">
        {/* Kolom Kiri: Dua Lingkaran Logo ETHOL & PENS */}
        <div className="flex-none flex items-center justify-center gap-7 w-full md:w-auto md:min-w-[300px] flex-wrap">
          {/* Lingkaran Logo ETHOL */}
          <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-full bg-white shadow-[0_6px_32px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
            <img
              src="/ethol.png"
              alt="ETHOL"
              className="w-[75%] object-contain"
            />
          </div>

          {/* Lingkaran Logo PENS */}
          <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-full bg-white shadow-[0_6px_32px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
            <img
              src="/pens.png"
              alt="PENS"
              className="w-[70%] object-contain"
            />
          </div>
        </div>

        {/* Kolom Kanan: Card Layanan Kami */}
        <div className="flex-1 w-full min-w-full md:min-w-[300px] bg-white rounded-[20px] p-6 sm:p-8 md:px-8 md:py-9 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
          <h2 className="m-0 mb-6 text-[22px] font-bold text-[#111827]">
            Layanan Kami
          </h2>

          <div className="flex flex-col gap-3">
            {SERVICES_DATA.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 bg-[#eef4fa] rounded-[14px] p-4 sm:px-5 sm:py-4 transition-colors"
              >
                <div className="w-[52px] h-[52px] rounded-full flex-shrink-0 bg-[#dbe9f5] flex items-center justify-center text-[#103968]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="m-0 text-[14.5px] font-bold text-[#103968]">
                    {item.title}
                  </h3>
                  <p className="mt-[3px] mb-0 text-[13px] text-[#6b7280] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

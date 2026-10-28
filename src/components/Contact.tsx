import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section
      id="hubungi"
      className="bg-[#f8fafc] py-[48px] sm:py-[56px] md:py-[88px] px-4 sm:px-6 md:px-10 overflow-x-hidden scroll-mt-[72px]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Title */}
        <h2 className="m-0 mb-10 text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold text-[#111827] tracking-[-0.02em]">
          Hubungi Kami
        </h2>

        {/* Row Layout: Map (Left) & Info (Right) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-12">
          {/* Kolom Kiri: Google Maps Embed Card */}
          <div className="w-full md:flex-[1_1_420px] rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)] min-h-[360px] bg-white">
            <iframe
              title="Lokasi PENS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6922250949888!2d112.79118257501236!3d-7.275818971498691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1777186677897!5m2!1sid!2sid"
              width="100%"
              height="360"
              className="border-0 block w-full h-[360px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Kolom Kanan: Detail Informasi Kontak */}
          <div className="w-full md:flex-[1_1_280px]">
            <h3 className="m-0 mb-1.5 text-[18px] font-bold text-[#111827]">
              Politeknik Elektronika Negeri Surabaya
            </h3>

            <p className="m-0 mb-6 text-[14px] text-[#6b7280] leading-[1.7]">
              Kampus PENS, Jalan Raya ITS, Keputih, Kecamatan Sukolilo, Kota Surabaya,
              Jawa Timur 60111
            </p>

            {/* Email 1 */}
            <div className="flex items-center gap-2.5 mb-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#6b7280"
                className="flex-shrink-0"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a
                href="mailto:info@pens.ac.id"
                className="text-[14px] text-[#374151] hover:text-[#103968] transition-colors"
              >
                info@pens.ac.id
              </a>
            </div>

            {/* Email 2 */}
            <div className="flex items-center gap-2.5 mb-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#6b7280"
                className="flex-shrink-0"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a
                href="mailto:humas@pens.ac.id"
                className="text-[14px] text-[#374151] hover:text-[#103968] transition-colors"
              >
                humas@pens.ac.id
              </a>
            </div>

            {/* Nomor Telepon & Jam Operasional */}
            <div className="mt-5">
              <p className="m-0 text-[16px] font-semibold text-[#111827]">
                <a
                  href="tel:+62315947280"
                  className="text-inherit hover:text-[#103968] transition-colors"
                >
                  +62 31 594 7280
                </a>
              </p>
              <p className="mt-1 mb-0 text-[13px] text-[#9ca3af]">
                Tersedia Senin–Jumat pukul 08:00–16:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

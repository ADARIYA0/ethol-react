import React, { useState } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  role: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqGroup[] = [
  {
    role: 'Mahasiswa',
    items: [
      {
        q: 'Apa yang harus dilakukan jika tidak bisa login ke ETHOL karena lupa email dan password ?',
        a: 'Silahkan menghubungi petugas UPT Jaringan dan Komputer, Akses kredensial mahasiswa tidak ditangani oleh Tim ETHOL.',
      },
      {
        q: 'Bagaimana jika kuliah saya di semester ini tidak muncul ?',
        a: 'Silahkan mengecek status daftar ulang di Online MIS dan pastikan anda sudah melakukan daftar ulang dengan cara klik Tombol Daftar Ulang yang ada di Online MIS. Setelah anda melakukan klik pada tombol tersebut harap kuliah anda akan muncul di ETHOL satu hari setelahnya. Harap menunggu.',
      },
      {
        q: 'Bagaimana jika saya tidak dapat melakukan klik pada tombol Presensi saat akan mengikuti perkuliahan online ?',
        a: 'Harap dipastikan dosen pengampu kuliah sudah membuka presensi dengan cara menghubungi dosen pengampu melalui PJ Kuliah di kelas anda. Jika teman anda sudah berhasil melakukan presensi namun tombol Presensi yang tampil di browser anda sedang dalam posisi tidak dapat di klik, maka dosen sudah menutup presensi tersebut dan anda dianggap terlambat mengikuti perkuliahan dan presensi anda berstatus Alpha.',
      },
      {
        q: 'Data rekap presensi yang valid apakah yang ada di ETHOL atau Online MIS ?',
        a: 'Data rekap presensi yang valid adalah data yang terekap di Online MIS, data yang tersimpan di ETHOL merupakan data presensi online yang kemudian akan tersimpan di Online MIS satu hari setelah presensi online dilakukan di ETHOL.',
      },
    ],
  },
  {
    role: 'Dosen',
    items: [
      {
        q: 'Bagaimana cara setting Conference Lainnya ?',
        a: `Masuk ke halaman kuliah, klik tombol pengaturan yang terletak di samping tombol conference lainnya. Setelah muncul form silakan masukkan url conference dari aplikasi pihak ketiga seperti zoom, google meet, dll\nContoh url : Meet , Join our Cloud HD Video Meeting`,
      },
      {
        q: 'Apakah dosen bisa membuka presensi di kuliah yang berbeda dalam waktu bersamaan ?',
        a: 'Dosen hanya dapat membuka presensi satu kali dalam satu waktu, untuk membuka presensi baru harap menutup presensi sebelumnya yang masih terbuka.',
      },
      {
        q: 'Data rekap presensi yang valid apakah yang ada di ETHOL atau MIS ?',
        a: 'Data rekap presensi yang valid adalah data yang terekap di MIS, data yang tersimpan di ETHOL merupakan data presensi online yang kemudian akan tersimpan di MIS satu hari setelah presensi online dilakukan di ETHOL.',
      },
    ],
  },
];

export const Faq: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  return (
    <section
      id="faq"
      className="bg-[#f1f5f9] py-[48px] sm:py-[56px] md:py-[88px] px-4 sm:px-6 md:px-10 overflow-x-hidden scroll-mt-[72px]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header Section */}
        <div className="mb-11">
          <span className="inline-block text-[11px] font-bold text-[#103968] tracking-[0.1em] uppercase bg-[#10396812] rounded-full px-[14px] py-[5px] mb-[14px]">
            FAQ
          </span>
          <h2 className="m-0 text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-[#111827] tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid: 2 Kolom (Mahasiswa & Dosen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {FAQ_DATA.map((group) => (
            <div
              key={group.role}
              className="bg-white rounded-[16px] overflow-hidden border border-[#e5e7eb] shadow-sm"
            >
              {/* Group Header */}
              <div className="px-6 py-4 font-bold text-[16px] text-[#103968] border-b border-[#f3f4f6] bg-[#10396808]">
                {group.role}
              </div>

              {/* List Pertanyaan & Jawaban (Accordion) */}
              <div>
                {group.items.map((item, index) => {
                  const itemKey = `${group.role}-${index}`;
                  const isOpen = openItem === itemKey;

                  return (
                    <div
                      key={itemKey}
                      className={index > 0 ? 'border-t border-[#f3f4f6]' : undefined}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(itemKey)}
                        className={`w-full px-6 py-[14px] flex items-start justify-between gap-3 border-none cursor-pointer text-left font-sans transition-colors duration-200 ${
                          isOpen ? 'bg-[#10396808]' : 'bg-transparent hover:bg-[#10396805]'
                        }`}
                      >
                        <span
                          className={`text-[15px] leading-[1.55] transition-colors duration-200 ${
                            isOpen
                              ? 'font-semibold text-[#103968]'
                              : 'text-[#374151]'
                          }`}
                        >
                          {item.q}
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#103968"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`flex-shrink-0 mt-1 transition-transform duration-250 ease-out ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="px-6 pt-0.5 pb-4 text-[14px] text-[#6b7280] leading-[1.7] whitespace-pre-line animate-fade-in-up [animation-duration:0.25s]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = Faq;
export default Faq;

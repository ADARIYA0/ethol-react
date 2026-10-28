import React, { useEffect, useCallback } from 'react';

export type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectDosenLb: () => void;
};

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSelectDosenLb,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Nonaktifkan scroll halaman saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Menutup modal dengan tombol ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[500] bg-black/45 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-6"
      onClick={handleClose}
    >
      {/* Box Modal: Dibuat murni tanpa animasi "in" */}
      <div
        className="bg-white rounded-[16px] w-full max-w-[460px] shadow-[0_24px_64px_rgba(0,0,0,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 pt-5 sm:pt-6 pb-4 sm:pb-5 flex items-center justify-between border-b border-[#f3f4f6]">
          <div className="flex items-center gap-2.5">
            <img
              src="/ethol.png"
              alt="ETHOL"
              className="h-8 object-contain"
            />
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup"
            className="p-1 rounded-md text-[#9ca3af] hover:text-[#374151] hover:bg-[#f3f4f6] cursor-pointer transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body: Pilih Metode Login */}
        <div className="px-6 sm:px-8 pt-5 sm:pt-6 pb-9 sm:pb-12">
          <p className="m-0 mb-4 text-[14px] text-[#6b7280]">
            Pilih metode login:
          </p>

          <div className="flex flex-col gap-2.5">
            {/* Opsi 1: Dosen / Staff / Mahasiswa (SSO PENS) */}
            <a
              href="https://ethol.pens.ac.id/api/auth/cas-redirect"
              className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-[10px] border-[1.5px] border-[#e5e7eb] text-[#111827] no-underline transition-all duration-150 hover:border-[#103968] hover:bg-[#1039680a] group"
            >
              <div className="w-[42px] h-[42px] rounded-[10px] bg-[#103968] flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <p className="m-0 font-semibold text-[14px] text-[#111827] group-hover:text-[#103968] transition-colors">
                  Dosen / Staff / Mahasiswa
                </p>
                <p className="m-0 mt-0.5 text-[12px] text-[#6b7280]">
                  Login via SSO PENS
                </p>
              </div>
              <svg
                className="ml-auto flex-shrink-0 text-[#9ca3af] group-hover:text-[#103968] group-hover:translate-x-0.5 transition-all"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* Separator "atau" */}
            <div className="flex items-center gap-2.5 my-1">
              <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
              <span className="text-[12px] text-[#9ca3af] font-medium">
                atau
              </span>
              <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
            </div>

            {/* Opsi 2: Dosen Luar Biasa (Membuka Laman Baru /auth/dosen-lb) */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectDosenLb();
              }}
              className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-[10px] border-[1.5px] border-[#e5e7eb] bg-transparent cursor-pointer font-sans text-left w-full transition-all duration-150 hover:border-[#6b7280] hover:bg-[#f9fafb] group"
            >
              <div className="w-[42px] h-[42px] rounded-[10px] bg-[#f3f4f6] border-[1.5px] border-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <p className="m-0 font-semibold text-[14px] text-[#374151] group-hover:text-[#111827] transition-colors">
                  Dosen Luar Biasa
                </p>
                <p className="m-0 mt-0.5 text-[12px] text-[#9ca3af]">
                  Login dengan username & password
                </p>
              </div>
              <svg
                className="ml-auto flex-shrink-0 text-[#9ca3af] group-hover:text-[#374151] group-hover:translate-x-0.5 transition-all"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from 'react';

export type DosenLbLoginProps = {
  onBackToHome: () => void;
};

export const DosenLbLogin: React.FC<DosenLbLoginProps> = ({ onBackToHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError('Akun Dosen Luar Biasa tidak ditemukan. Silakan periksa username & password Anda.');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Mobile Brand Banner (Hanya tampil di mobile/tablet) */}
      <div className="md:hidden flex items-center gap-3.5 bg-gradient-to-br from-[#0d2f5e] to-[#103968] px-5 py-4 sm:px-6 sm:py-5">
        <img
          src="/ethol.png"
          alt="Ethol"
          className="h-9 object-contain brightness-0 invert flex-shrink-0"
        />
        <p className="m-0 text-[13px] font-semibold text-white/85 leading-[1.4]">
          Enterprise Technology Hybrid Online Learning
        </p>
      </div>

      {/* Kolom Kiri: Panel Branding Navy (Desktop) */}
      <div
        className="hidden md:flex flex-1 flex-col justify-center px-14 py-15"
        style={{
          background: 'linear-gradient(160deg, #0d2f5e, #103968 60%, #1a5276)',
        }}
      >
        <img
          src="/ethol.png"
          alt="Ethol"
          className="h-14 object-contain object-left mb-8 brightness-0 invert w-fit"
        />
        <p className="m-0 mb-3 text-[22px] font-bold text-white leading-[1.4]">
          Enterprise Technology Hybrid
          <br />
          Online Learning
        </p>
        <p className="m-0 text-[14px] text-white/55 leading-[1.6]">
          Platform Pembelajaran Digital
          <br />
          Politeknik Elektronika Negeri Surabaya
        </p>
      </div>

      {/* Kolom Kanan: Panel Form Login Putih */}
      <div className="w-full md:w-[480px] md:flex-shrink-0 bg-white flex items-center justify-center px-6 py-8 sm:px-10 sm:py-12">
        <div className="w-full max-w-[360px]">
          <p className="m-0 mb-1 text-[13px] text-[#9ca3af] font-medium tracking-[0.3px]">
            Selamat datang
          </p>
          <h2 className="m-0 mb-8 text-[22px] font-bold text-[#111827]">
            Login Dosen Luar Biasa
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#374151]">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                required
                className="w-full py-[11px] px-[14px] text-[14px] border border-[#e5e7eb] rounded-lg outline-none text-[#111827] bg-[#fafafa] transition-colors focus:border-[#103968] focus:bg-white font-inherit placeholder:text-[#9ca3af]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#374151]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  className="w-full py-[11px] px-[14px] pr-11 text-[14px] border border-[#e5e7eb] rounded-lg outline-none text-[#111827] bg-[#fafafa] transition-colors focus:border-[#103968] focus:bg-white font-inherit placeholder:text-[#9ca3af]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer flex items-center p-0 text-[#9ca3af] hover:text-[#374151]"
                >
                  {showPassword ? (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#aaa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#aaa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="m-0 text-[13px] text-[#dc2626]">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-1.5 py-3 px-4 bg-[#103968] hover:bg-[#0d2e57] text-white border-none rounded-lg text-[14px] font-semibold cursor-pointer tracking-[0.3px] transition-colors disabled:opacity-75 disabled:cursor-not-allowed font-inherit"
            >
              {loading ? 'Masuk...' : 'Masuk'}
            </button>
          </form>

          <button
            type="button"
            onClick={onBackToHome}
            className="mt-6 flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-[#9ca3af] hover:text-[#103968] text-[13px] p-0 font-medium font-inherit transition-colors"
          >
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
              <path d="M19 12H5" />
              <path d="M12 5l-7 7 7 7" />
            </svg>
            Kembali ke Halaman Utama
          </button>
        </div>
      </div>
    </div>
  );
};

export default DosenLbLogin;

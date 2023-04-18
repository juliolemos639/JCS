'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
// import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsFillSunFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsFillMoonFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header
      className="py-6 mb-12 border-b dark:bg-gray-900 dark:border-gray-700"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <span className="text-3xl shadow-violet-900 shadow-lg hover:shadow-xl">
            JCS Imóveis
          </span>
        </Link>
        {renderThemeChanger()}
        {/* <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" href="">
            Entrar
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            href=""
          >
            Cadastrar
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

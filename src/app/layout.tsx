'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { useEffect } from 'react';
import { GlobalContextProvider } from './Context/store';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <Header />
            {children}
          </ThemeProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}

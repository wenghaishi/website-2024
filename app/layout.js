import localFont from "next/font/local";
import "./globals.css";
import { Roboto_Mono } from 'next/font/google'



const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})

export const metadata = {
  title: "Sam's website",
  description: "Personal website of Sam Weng Haishi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AccessGate from "./components/AccessGate";
import Loader from "./components/Loader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Arduino Project Hub',
  description: 'Easy Arduino tutorials for learners',
}

export default function RootLayout({ children }) {
  return (
    <>
     <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <AccessGate>
          <Loader />
        <div className="flex-grow">{children}</div>
        <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          © 2025 Sharmila | Arduino Made Simple
        </footer>
        </AccessGate>
      </body>
    </html>
    </>
  );
}

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Dr. Rishitha Kotla | Board Certified Psychiatrist",
  description: "Professional psychiatric care and self-help tools for a balanced mind.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatProvider from "@/components/chat/ChatProvider";
import ChatWidget from "@/components/chat/ChatWidget";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>
          <ChatProvider>
            <Header />
            <main style={{ minHeight: '80vh' }}>{children}</main>
            <Footer />
            <ChatWidget />
          </ChatProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

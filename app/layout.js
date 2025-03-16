import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Shubham Thakur - Portfolio",
  description: "portfolio website of Shubham Thakur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

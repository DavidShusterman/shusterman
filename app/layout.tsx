import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shusterman | Legacy. Innovation. Investment.",
  description:
    "The Shusterman family — generations of investors, entrepreneurs, and visionaries. AI automations, angel investing, and technology ventures.",
  keywords: [
    "Shusterman",
    "AI",
    "investment",
    "angel investing",
    "real estate",
    "technology ventures",
  ],
  openGraph: {
    title: "Shusterman | Legacy. Innovation. Investment.",
    description:
      "The Shusterman family — generations of investors, entrepreneurs, and visionaries.",
    url: "https://shusterman.ai",
    siteName: "Shusterman.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="grain-overlay min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

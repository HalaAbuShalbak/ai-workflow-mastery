import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-[#020617] text-[#F8FAFC] antialiased`}
      >
        <a
          href="#main"
          className="fixed start-4 top-4 z-[100] -translate-y-24 rounded-lg bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white opacity-0 transition focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

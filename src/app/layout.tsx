import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Belle Mode",
  description: "Shopping clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

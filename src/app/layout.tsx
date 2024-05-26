import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import LightDarkModeToggle from "@/components/LightDarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owen Gretzinger",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider disableTransitionOnChange>
          <div className="relative">
            {children}
            <div className="fixed right-0 top-0 z-20">
              <LightDarkModeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

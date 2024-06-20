import LightDarkModeToggle from "@/components/LightDarkModeToggle";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Crimson_Pro, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { headline, tagline } from "./page";

const title = `Owen Gretzinger: ${tagline}`;
const description = `${headline}. Learn more about my skills, experience, and contact information.`;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:
    "Owen Gretzinger, McMaster University, RBC Amplify, Personal Website, Software Developer, Fullstack Developer, Computer Science, CS Undergrad, Hack the North, DeltaHacks, Arctic Wolf",
  creator: "Owen Gretzinger",
  authors: [{ name: "Owen Gretzinger" }],

  openGraph: {
    title: title,
    description: description,
    url: "https://owengretzinger.com",
    images: {
      url: "/opengraph-image.webp",
      alt: "Owen Gretzinger info",
    },
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://owengretzinger.com"),
  alternates: {
    canonical: "/",
  },
};

const crimson_pro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson-pro",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${crimson_pro.variable} ${inter.variable}`}
    >
      <Script
        src="https://app.tinyanalytics.io/pixel/DbzDhIpSbsBIoTz9"
        strategy="lazyOnload"
      />
      <body>
        <ThemeProvider disableTransitionOnChange attribute="data-mode">
          <div className="relative">
            <div className="fixed right-0 top-0 z-20">
              <LightDarkModeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

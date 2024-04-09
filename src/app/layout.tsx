import { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import { Suspense } from "react";
import HandleSectionSearchParam from "../components/handleSectionSearchParam";
import LoadingAnimation from "../components/loadingAnimation";
import Providers from "../providers/providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Owen Gretzinger - Software Developer & CS Student",
  description:
    "I'm a software developer on a mission to spread love. Learn more about me, view projects I've made, read articles I've written, and get in contact!",
  keywords:
    "Owen Gretzinger, computer science, software developer, coding projects, articles, McMaster University, Arctic Wolf, personal website, Triangle Ball, Server Insights, Tempestuous Turrets, Binary 0101, blog, programming",
  authors: [{ name: "Owen Gretzinger" }],

  openGraph: {
    title: "Owen Gretzinger - Software Developer & CS Student",
    description:
      "I'm a software developer on a mission to spread love. Learn more about me, view projects I've made, read articles I've written, and get in contact!",
    url: "https://owengretzinger.com",
    images: {
      url: "/images/opengraph-image.png",
      alt: "Card displaying information about Owen Gretzinger: image, logo, name, titles, and links.",
    },
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
  creator: "Owen Gretzinger",
  metadataBase: new URL("https://owengretzinger.com"),
  alternates: {
    canonical: "/",
  },

  // icons not needed
};

const inter = Noto_Sans_Georgian({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`max-w-full text-black bg-white ${inter.variable} font-noto font-extrabold selection:bg-orange/20 relative overflow-hidden`}
      >
        <Providers>
          <div id="home"></div>
          <Suspense fallback={<></>}>
            <HandleSectionSearchParam />
          </Suspense>
          <LoadingAnimation />
          {children}
        </Providers>
      </body>
    </html>
  );
}

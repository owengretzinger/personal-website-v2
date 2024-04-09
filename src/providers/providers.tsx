"use client";

import { ThemeProvider } from "next-themes";
import LoadingAnimationProvider from "./loading-animation-provider";
import ScrollingDisabledProvider from "./scrolling-disabled-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // @ts-ignore
    <ThemeProvider
      defaultTheme="theme1"
      themes={["theme1", "theme2", "theme3", "theme4"]}
      disableTransitionOnChange
    >
      <LoadingAnimationProvider>
        <ScrollingDisabledProvider>{children}</ScrollingDisabledProvider>
      </LoadingAnimationProvider>
    </ThemeProvider>
  );
}

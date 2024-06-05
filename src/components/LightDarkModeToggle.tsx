"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LightDarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const actualTheme = theme === "system" || !theme ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(actualTheme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${actualTheme === "light" ? "dark" : "light"} mode`}
      className="p-4"
    >
      {actualTheme === "dark" ? (
        <IconSun size={32} stroke={1.5} className="text-black" />
      ) : (
        <IconMoon size={32} stroke={1.5} className="text-black" />
      )}
    </button>
  );
}

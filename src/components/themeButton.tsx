"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    switch (theme) {
      case "theme1":
        setTheme("theme2");
        break;
      case "theme2":
        setTheme("theme3");
        break;
      case "theme3":
        setTheme("theme4");
        break;
      case "theme4":
        setTheme("theme1");
        break;
      default:
        setTheme("theme1");
        break;
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-block text-left group">
      <button className="flex" onClick={() => changeTheme()}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" className="fill-white" />
          <path
            d="M30 29C21 35.4 19.6667 45.0833 20.5 49C25.25 50 35.0242 50.0024 43.75 40.25C52.25 30.75 48.9167 15.0833 44.75 10.75C44 14.25 39 22.6 30 29Z"
            className="fill-blue"
          />
          <path
            d="M21.25 24.25C23.3519 17.7533 23 7.25001 32.25 1.75001C24.5 -1.49999 11.15 1.80001 4.75 12C-1.65 22.2 1.91667 33.9167 4.75 38.5C12.75 36.25 18.5 32.75 21.25 24.25Z"
            className="fill-orange"
          />
          <circle
            cx="25"
            cy="25"
            r="23.5"
            strokeWidth="3"
            className="stroke-black"
          />
        </svg>
      </button>
    </div>
  );
}

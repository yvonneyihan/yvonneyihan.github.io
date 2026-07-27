import { useEffect, useState } from "react";

type Theme = "dark" | "light" | null;

function getStoredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "dark" || stored === "light" ? stored : null;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    if (theme) root.classList.add(theme);
  }, [theme]);

  const isDark = () => {
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const toggle = () => {
    const next: Theme = isDark() ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return { dark: isDark(), toggle };
}

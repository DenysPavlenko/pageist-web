"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "../icon";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-lg bg-on-surface/10 hover:bg-on-surface/20 transition-colors ${className}`}
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`p-2 rounded-lg bg-on-surface/10 hover:bg-on-surface/20 transition-colors ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Icon name={theme === "light" ? "moon" : "sun"} size={20} />
    </button>
  );
}

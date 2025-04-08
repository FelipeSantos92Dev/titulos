"use client";

import { useTheme } from "@/context/ThemeContext";
import styles from "./livraria.module.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={
        theme === "light"
          ? "Alternar para modo escuro"
          : "Alternar para modo claro"
      }
    >
      <span className={styles.lightIcon}>🌞</span>
      <span className={styles.darkIcon}>🌙</span>
    </button>
  );
}

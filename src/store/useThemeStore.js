// useThemeStore.js
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: "dim", // default theme

  initializeTheme: () => {
    const saved = localStorage.getItem("set-theme");
    const fallback = "dim";
    const theme = saved || fallback;

    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },

  setTheme: (theme) => {
    localStorage.setItem("set-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));

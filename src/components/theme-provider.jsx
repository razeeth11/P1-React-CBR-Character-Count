"use client";

import { ThemeProvider as ThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <ThemesProvider {...props}>{children}</ThemesProvider>;
}

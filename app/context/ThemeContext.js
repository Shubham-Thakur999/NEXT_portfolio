"use client"; // Ensures this runs on the client side

import { createContext, useState, useEffect, useContext } from "react";

// Create context
const ThemeContext = createContext();

// Provide theme to the entire app
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get theme from localStorage or use "light" by default
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  useEffect(() => {
    // Update localStorage and <html> attribute whenever theme changes
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}

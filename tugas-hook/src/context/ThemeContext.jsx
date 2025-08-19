import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: "20px"
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

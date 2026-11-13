import { useLocalStorage } from "../hooks/useLocalStorage";

export function ThemeSettings() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    "light"
  );

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <h2>Theme Settings</h2>

      <p>Current theme: {theme}</p>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="border px-4 py-2 rounded-xl"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggle;
import { useState } from "react";
import Moon from "./design/Moon";
import Sun from "./design/Sun";

const DarkThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button id="toggleDark" onClick={handleToggle}>
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default DarkThemeToggler;

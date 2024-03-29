import { useState, useEffect } from "react";
import Moon from "./design/Moon";
import Sun from "./design/Sun";

const DarkThemeToggler = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log('Helll');
      setTheme("dark");
    } else {
      setTheme("light");
    }
    
  }, []);

  const handleThemeSwitch = () => {
    setTheme((currentValue) => !currentValue);
  };

  return (
    <button onClick={handleThemeSwitch}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default DarkThemeToggler;

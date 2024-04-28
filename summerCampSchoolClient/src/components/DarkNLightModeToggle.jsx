import { useEffect, useState } from "react";
import moonSvgLogo from '../assets/moon-svgrepo-com.svg';
import sunSvgLogo from '../assets/sun-svgrepo-com.svg';

const DarkNLightModeToggle = () => {
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log("🚀 ~ DarkNLightModeToggle ~ isSystemDark:", isSystemDark);

  const [isDark, setIsDark] = useState(isSystemDark);


  const handleToggle = () => {
    setIsDark(toggle => !toggle);
  };

  useEffect(() => {

    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", 
    isDark ? 'dark' : 'light');
    return () => {
      // Resetting the data-theme attribute to its default value or to match the system preference
      htmlElement.removeAttribute("data-theme", isDark ? 'dark' : 'light');
    };
  }, [isDark]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onClick={() => handleToggle()} />

      {
        isDark &&
        <img className="swap-off fill-current w-10 h-10" src={sunSvgLogo} alt="" />
        ||
        <img className="swap-on fill-current w-10 h-10" src={moonSvgLogo} alt="" />
      }
    </label>
  );
};



export default DarkNLightModeToggle;

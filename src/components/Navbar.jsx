import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const {title} = useParams();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className={darkMode ? "dark:text-white" : "text-black"}>
      <div className="w-196 h-9 bg-indigo-700 flex justify-between items-center nav">
        <div className="ml-5">
          <h1 className="text-white">{title}</h1>
        </div>
        <div>
          <div className="flex ">
            <p className="mr-6 text-white">Theme</p>
            <input
              type="checkbox"
              className="mr-4 w-5 h-5"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

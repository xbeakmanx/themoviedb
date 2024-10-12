import React, { useEffect, useState } from 'react';
import Moon from '../SVG/moon';
import Sun from '../SVG/sun';

function DarkMode({ cellphone }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; // Predeterminado a modo oscuro
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="flex items-center space-x-2 py-1 mt-0" onClick={handleChange}>
      <div className="relative inline-block w-full mr-2 align-middle select-none transition duration-200 ease-in">
        <button onChange={handleChange} className={`flex gap-3 cursor-pointer ${cellphone ? 'm-auto' : ''}`}>
          {theme === 'dark' ? <Sun /> : <Moon />}

          {!cellphone && (
            <label className="dark:text-white cursor-pointer">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</label>
          )}
        </button>
      </div>
    </button>
  );
}

export default DarkMode;

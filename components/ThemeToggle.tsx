import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applySystem = (e?: MediaQueryListEvent | MediaQueryList) => {
      const isSystemDark = e ? e.matches : mediaQuery.matches;
      if (isSystemDark) root.classList.add('dark');
      else root.classList.remove('dark');
    };

    switch (theme) {
      case 'dark':
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      case 'system':
        localStorage.removeItem('theme');
        applySystem();
        const listener = (e: MediaQueryListEvent) => applySystem(e);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={20} />;
      case 'dark': return <Moon size={20} />;
      case 'system': return <Monitor size={20} />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light': return '浅色模式';
      case 'dark': return '深色模式';
      case 'system': return '跟随系统';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-notion-hover dark:hover:bg-notion-darkHover transition-colors text-notion-text dark:text-notion-darkText"
      title={`${getLabel()}`}
      aria-label="Toggle Theme"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;

import { useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';

export function useDarkMode() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const saved = localStorage.getItem('wg-theme');
    if (saved) {
      setColorScheme(saved as 'light' | 'dark');
    }
  }, [setColorScheme]);

  const toggle = () => {
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
    localStorage.setItem('wg-theme', newScheme);
  };

  return {
    colorScheme,
    isDark: colorScheme === 'dark',
    toggle,
    setColorScheme
  };
}

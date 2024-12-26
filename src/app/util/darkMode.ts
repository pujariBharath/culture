export function initDarkMode() {
    if (typeof window !== 'undefined') {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      }
      return isDarkMode;
    }
    return false;
  }
  
  export function toggleDarkMode(setDarkMode: (isDark: boolean) => void) {
    const newDarkMode = !document.body.classList.contains('dark-mode');
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', newDarkMode.toString());
    setDarkMode(newDarkMode);
  }
  
  
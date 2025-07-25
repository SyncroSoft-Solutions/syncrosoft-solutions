import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useThemeStore } from './store/useThemeStore.js';

import ThemeSelector from './components/ThemeSelector.jsx';
import Loader from './components/Loader.jsx';
import { Toaster } from 'react-hot-toast';
import AppContent from './AppContent';

function App() {
  const { theme, initializeTheme } = useThemeStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeTheme();

    const MINIMUM_LOADER_TIME = 1500;
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      const start = Date.now();

      // Simulate app initialization (you could add more logic here)
      const simulateInit = () => {
        const elapsed = Date.now() - start;
        const delay = Math.max(0, MINIMUM_LOADER_TIME - elapsed);
        setTimeout(() => {
          setLoading(false);
          localStorage.setItem('hasVisited', 'true');
        }, delay);
      };

      // Start loading
      simulateInit();
    } else {
      // Skip loader for next visits
      setLoading(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="overflow-hidden" data-theme={theme}>
        <Toaster position="top-center" reverseOrder={false} />

        {/* Theme Selector shows only after loader */}
        <div className="fixed top-20 right-3 z-50">
          {!loading && <ThemeSelector />}
        </div>

        {/* Main Content or Loader */}
        <div className="relative z-40">
          {loading ? <Loader /> : <AppContent />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

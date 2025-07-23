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

    const isFirstVisit = !localStorage.getItem("hasVisited");
    const MINIMUM_LOADER_TIME = 2000; // Minimum time loader should show
    const start = Date.now();

    // Simulate "app is ready"
    const onAppReady = () => {
      const elapsed = Date.now() - start;
      const remainingTime = Math.max(MINIMUM_LOADER_TIME - elapsed, 0);

      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, remainingTime);
    };

    // For first visit: wait for both delay and app ready
    if (isFirstVisit) {
      // You can simulate data/image loading here if needed
      // For now, assume app is ready immediately after mount
      onAppReady();
    } else {
      setLoading(false); // Instant load on subsequent visits
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="relative w-screen overflow-x-hidden bg-base-100" data-theme={theme}>
        <Toaster position="top-center" reverseOrder={false} />

        {/* Theme Switch */}
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

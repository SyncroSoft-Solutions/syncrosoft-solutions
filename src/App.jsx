import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useThemeStore } from './store/useThemeStore.js'

import ThemeSelector from './components/ThemeSelector.jsx';
import Loader from './components/Loader.jsx';
import { Toaster } from 'react-hot-toast';
import AppContent from './AppContent';

function App() {
  const { theme, initializeTheme } = useThemeStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeTheme();
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative w-screen overflow-x-hidden bg-base-100" data-theme={theme}>
        <Toaster position="top-center" reverseOrder={false} />

        {/* Theme Switch */}
        <div className="fixed top-20 right-3 z-50">
          {loading ? <Loader /> : <ThemeSelector />}
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
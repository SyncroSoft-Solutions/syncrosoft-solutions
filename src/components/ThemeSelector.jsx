import React from 'react';
import { useThemeStore } from '../store/useThemeStore.js';
import { PaletteIcon, CheckIcon } from 'lucide-react';
import { THEMES } from '../constants';

function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end drop-shadow-xl z-50">
      {/* Trigger Button */}
      <button
        tabIndex={0}
        className="btn btn-circle btn-md transition backdrop-blur-md bg-base-300/40 hover:bg-white/20 border border-white/10 shadow-md"
        aria-label="Theme selector"
      >
        <PaletteIcon size={18} />
      </button>

      {/* Dropdown Content */}
      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-2 shadow-xl bg-base-300/70 backdrop-blur-2xl rounded-2xl
        w-56 max-h-60 overflow-y-auto border border-white/10"
      >
        <div className="space-y-1">
          {THEMES.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className={`w-full px-3 py-2 rounded-xl flex items-center gap-2 transition-colors
              ${theme === themeOption.name
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-white/10 text-base-content/80'
              }`}
            >
              <PaletteIcon className="size-4 opacity-70" />
              <span className="font-medium">{themeOption.name}</span>
              <div className="ml-auto flex gap-1">
                {themeOption.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              {theme === themeOption.name && <CheckIcon className="size-4 ml-1" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeSelector;

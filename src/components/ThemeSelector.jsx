import React from 'react';
import { useThemeStore } from '../store/useThemeStore.js';
import { PaletteIcon, CheckIcon } from 'lucide-react';
import { THEMES } from '../constants';

function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="dropdown dropdown-end drop-shadow-lg">
      <button tabIndex={0} className="btn btn-md btn-outline btn-neutra btn-circle">
        <PaletteIcon />
      </button>
      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl
        w-44 border border-base-content/10 max-h-60 overflow-y-auto"
      >
        <div className="space-y-1 ">
          {THEMES.map((themeOption) => (
            <button
              key={themeOption.name}
              className={`w-full px-2 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                theme === themeOption.name
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-base-content/5'
              }`}
              onClick={() => setTheme(themeOption.name)}
            >
              <PaletteIcon className="size-4" />
              <span className="font-medium">{themeOption.name}</span>
              <div className="ml-auto flex gap-1 ">
                {themeOption.colors.map((color, i) => (
                  <span
                    key={i}
                    className="size-2 rounded-full"
                    style={{ background: color }}
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

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import useThemeStore from "#store/theme";
import { useEffect } from "react";

import { Dock, Home, Navbar, Welcome, MobileNavbar, MobileHome } from "#components"
import {
  Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos,
  MobileFinder, MobileResume, MobileSafari, MobileTerminal, MobileText, MobileImage, MobileContact, MobilePhotos,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  const { initializeTheme, themeMode, setThemeMode } = useThemeStore();

  useEffect(() => {
    // Initialize theme on mount
    initializeTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only update if user is in 'system' mode
      const currentMode = useThemeStore.getState().themeMode;
      if (currentMode === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        useThemeStore.getState().setThemeMode('system'); // Re-apply system theme
      }
    };

    // Add listener for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />

      {/* Mobile (below the `sm` breakpoint) */}
      <MobileHome />
      <MobileFinder />
      <MobileSafari />
      <MobilePhotos />
      <MobileContact />
      <MobileTerminal />
      <MobileResume />
      <MobileText />
      <MobileImage />
    </main>
  );
};

export default App;
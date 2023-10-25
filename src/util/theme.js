const themes = {
  dark: () => document.documentElement.setAttribute("data-theme", "dark"),
  retro: () => document.documentElement.setAttribute("data-theme", "dark"),
  light: () => document.documentElement.setAttribute("data-theme", "light"),
};

const getTheme = () =>
  document.documentElement.getAttribute("data-theme")
    ? document.documentElement.getAttribute("data-theme")
    : localStorage.getItem("theme");

const switchTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

const preloadTheme = () => {
  const currentTheme = getTheme();

  if (window.matchMedia(`(prefers-color-scheme: ${currentTheme})`).matches) {
    themes[currentTheme]();
  }
};

export { switchTheme, preloadTheme };

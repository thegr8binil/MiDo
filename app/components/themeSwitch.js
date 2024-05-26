export default function ThemeSwitch({ bg, theme }) {
    const setTheme = () => {
        document.querySelector("body").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
  return (
    <div
      className={`${bg} w-5 h-5 cursor-pointer rounded-full border border-buttonSolidBg`}
      id={`theme-${theme}`}
      onClick={setTheme}
    ></div>
  );
}

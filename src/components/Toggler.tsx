import { useDarkMode } from "@/context/context";
import "@styles/Toggler.css"
export default function Toggler() {
    const { darkModeOn, toggleDarkMode } = useDarkMode();

    return (
        <button 
            className={`toggler ${darkModeOn ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
        >
            {darkModeOn ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
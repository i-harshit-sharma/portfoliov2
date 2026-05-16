"use client"
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Tooltip from "./tooltip";

const LightDarkToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <button
            onClick={toggleDarkMode}
            className={`relative flex items-center w-8 h-8 p-1 rounded-lg cursor-pointer transition-colors duration-300`}
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? (
                <Tooltip content="Switch to Light Mode">
                    <Moon className="w-5 h-5 md:w-6 md:h-6" />
                </Tooltip>
            ) : (
                <Tooltip content="Switch to Dark Mode">
                    <Sun className="w-5 h-5 md:w-6 md:h-6" />
                </Tooltip>
            )}
        </button>
    )
}

export default LightDarkToggle;
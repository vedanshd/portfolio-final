import { createContext, useState, useEffect } from 'react';
export var ThemeContext = createContext(undefined);
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState('dark'), theme = _b[0], setTheme = _b[1];
    useEffect(function () {
        // Check for saved theme in localStorage
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
        else {
            // Default to dark theme
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);
    useEffect(function () {
        // Apply theme class to html element
        var htmlElement = document.documentElement;
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
        }
        else {
            htmlElement.classList.add('light');
            htmlElement.classList.remove('dark');
        }
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return (prevTheme === 'dark' ? 'light' : 'dark'); });
    };
    return (<ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>);
};

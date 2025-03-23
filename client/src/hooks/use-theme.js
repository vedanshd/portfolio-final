import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

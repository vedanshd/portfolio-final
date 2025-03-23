import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
var Header = function () {
    var _a = useState(false), mobileMenuOpen = _a[0], setMobileMenuOpen = _a[1];
    var _b = useState(false), scrolled = _b[0], setScrolled = _b[1];
    var _c = useLocation(), navigate = _c[1];
    useEffect(function () {
        var handleScroll = function () {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    var handleNavClick = function (sectionId) {
        setMobileMenuOpen(false);
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<header className={"fixed top-0 w-full z-50 transition-all duration-300 ".concat(scrolled ? 'bg-secondary/90 backdrop-blur-md shadow-md' : 'bg-transparent')}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-accent font-mono text-xl font-semibold" onClick={function (e) { e.preventDefault(); handleNavClick('home'); }}>
            &lt;VD /&gt;
          </a>

          <div className="hidden md:block">
            <nav className="flex space-x-8">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map(function (item, index) { return (<a key={item} href={"#".concat(item)} className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium" onClick={function (e) { e.preventDefault(); handleNavClick(item); }}>
                  <span className="text-accent font-mono mr-1">{"0".concat(index + 1, ".")}</span>
                  <span className="capitalize">{item}</span>
                </a>); })}
            </nav>
          </div>

          <div className="flex items-center">
            <div className="md:hidden">
              <button className="text-foreground focus:outline-none" onClick={function () { return setMobileMenuOpen(!mobileMenuOpen); }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={"md:hidden absolute w-full transition-all duration-300 bg-primary bg-opacity-90 backdrop-blur-md ".concat(mobileMenuOpen ? 'max-h-96 border-b border-accent/20' : 'max-h-0 overflow-hidden')}>
        <nav className="flex flex-col space-y-4 p-6">
          {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map(function (item, index) { return (<a key={item} href={"#".concat(item)} className="text-muted-foreground hover:text-accent transition-colors duration-300" onClick={function (e) { e.preventDefault(); handleNavClick(item); }}>
              <span className="text-accent font-mono mr-2">{"0".concat(index + 1, ".")}</span>
              <span className="capitalize">{item}</span>
            </a>); })}
        </nav>
      </div>
    </header>);
};
export default Header;

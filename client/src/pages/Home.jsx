import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import CertificationsSection from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
var Home = function () {
    useEffect(function () {
        // Add scroll observer for animations
        var animateOnScroll = document.querySelectorAll('.animate-on-scroll');
        var checkScroll = function () {
            animateOnScroll.forEach(function (element) {
                var elementTop = element.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('animated');
                }
            });
        };
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
        // Initial check
        checkScroll();
        return function () {
            window.removeEventListener('scroll', checkScroll);
            window.removeEventListener('load', checkScroll);
        };
    }, []);
    return (<div className="dark min-h-screen bg-secondary">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <CertificationsSection />
        <Contact />
      </main>
      <Footer />
    </div>);
};
export default Home;

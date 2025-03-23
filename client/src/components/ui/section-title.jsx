import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
var SectionTitle = function (_a) {
    var number = _a.number, title = _a.title;
    var titleRef = useRef(null);
    useEffect(function () {
        var handleObserver = function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        };
        var observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        return function () {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);
    return (<div ref={titleRef} className="text-center mb-16 animate-on-scroll">
      <motion.h2 className="text-3xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-accent font-mono">{number}.</span> {title}
      </motion.h2>
      <div className="section-divider w-24 mx-auto mt-4"></div>
    </div>);
};
export default SectionTitle;

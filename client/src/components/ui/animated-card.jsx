import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GradientBorder from "./gradient-border";
var AnimatedCard = function (_a) {
    var children = _a.children;
    var cardRef = useRef(null);
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
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return function () {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);
    return (<motion.div ref={cardRef} className="animate-on-scroll card-hover" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <GradientBorder>
        <div className="p-6 rounded-lg">
          {children}
        </div>
      </GradientBorder>
    </motion.div>);
};
export default AnimatedCard;

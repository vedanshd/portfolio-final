export var fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
};
export var slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
export var fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
};
export var staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
export var popIn = {
    hidden: {
        scale: 0.8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5
        }
    }
};

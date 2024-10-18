import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface AnimationProps {
    children: ReactNode;
}

// Staggered Fade In
export const StaggeredFadeIn: React.FC<AnimationProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            {React.Children.map(children, (child, i) => (
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

// 3D Rotate on Scroll
export const Rotate3D: React.FC<AnimationProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <motion.div
            ref={ref}
            style={{
                rotateX,
                opacity,
                perspective: 1000
            }}
        >
            {children}
        </motion.div>
    );
};

// Parallax Effect
interface ParallaxProps extends AnimationProps {
    speed?: number;
}

export const ParallaxSection: React.FC<ParallaxProps> = ({ children, speed = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

// Text Reveal Animation
export const TextReveal: React.FC<AnimationProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className="overflow-hidden">
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </div >
    );
};

// Glow Effect
export const GlowEffect: React.FC<AnimationProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const glow = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.5)", "0px 0px 0px rgba(255,255,255,0)"]
    );

    return (
        <motion.div ref={ref} style={{ boxShadow: glow }}>
            {children}
        </motion.div>
    );
};

// Scale and Fade
export const ScaleAndFade: React.FC<AnimationProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};
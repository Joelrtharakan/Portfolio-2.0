'use client';

import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
}

export const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
};

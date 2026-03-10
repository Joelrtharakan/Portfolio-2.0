'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';

const HeroBackground = dynamic(() => import('@/components/3d/hero-background'), {
  ssr: false,
});

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 80 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12.5deg', '-12.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12.5deg', '12.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
        className="relative z-10 flex flex-col items-center text-center p-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            style={{ textShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))' }}
          >
            Joel R Tharakan
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl font-medium text-primary"
          >
            AI & Full-Stack Developer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-md md:text-lg text-foreground/80"
          >
            “Passionate about creating intelligent solutions that make a difference”
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="mt-4 bg-primary/10 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)),0_0_30px_hsl(var(--primary))] transition-all duration-300"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

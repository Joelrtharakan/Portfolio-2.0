'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '@/lib/data';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-3xl mx-auto px-4 md:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center font-headline text-4xl md:text-5xl font-bold mb-12 text-primary"
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-primary/30" aria-hidden="true"></div>

          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            {experienceData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-semibold text-primary">{item.date}</p>
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  <p className="text-md font-medium text-foreground/80 mt-1">{item.company}</p>
                  <p className="text-sm text-foreground/70 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

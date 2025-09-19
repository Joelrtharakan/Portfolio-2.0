'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="font-headline text-4xl md:text-5xl font-bold mb-6 text-primary"
        >
          Get In Touch
        </motion.h2>

        <motion.p variants={itemVariants} className="text-foreground/80 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex justify-center gap-8 mt-8">
          <a href="https://github.com/Joelrtharakan" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/joel-r-tharakan/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:joelrtharakan@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
            <Mail size={32} />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

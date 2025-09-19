'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillCategories = [
    { title: 'Languages', skills: skillsData.languages },
    { title: 'Frameworks & Databases', skills: [...skillsData.frameworks, ...skillsData.databases] },
    { title: 'AI & Data Science', skills: skillsData.ai },
    { title: 'Tools & Platforms', skills: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="font-headline text-4xl md:text-5xl font-bold mb-12 text-primary"
        >
          My Tech Arsenal
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground/90">{category.title}</h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-3 md:gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-md md:text-lg px-4 py-2 border-primary/50 bg-primary/10 text-primary cursor-pointer transition-all hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const About = () => {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'about-avatar');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 max-w-sm mx-auto md:mx-0 md:-mt-4"
        >
          {avatarImage && (
            <Card className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border-primary/20 aspect-[4/5] relative shadow-lg">
              <Image
                src={avatarImage.imageUrl}
                alt={avatarImage.description}
                data-ai-hint={avatarImage.imageHint}
                fill
                className="object-cover"
              />
            </Card>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="w-full md:w-7/12"
        >
          <motion.h2
            variants={itemVariants}
            className="font-headline text-3xl md:text-4xl font-bold mb-3 text-primary"
          >
            Hello!
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed text-justify">
            {aboutData.bio}
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aboutData.highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col items-start">
                    <div className="p-2.5 rounded-xl bg-primary/10 mb-3">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold mb-1.5">{highlight.title}</h3>
                    <p className="text-sm text-foreground/70 leading-snug">{highlight.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

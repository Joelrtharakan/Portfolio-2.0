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
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="h-full"
        >
          {avatarImage && (
            <Card className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <Image
                src={avatarImage.imageUrl}
                alt={avatarImage.description}
                data-ai-hint={avatarImage.imageHint}
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
            </Card>
          )}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary"
          >
            Hello!
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-8">
            {aboutData.bio}
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-6"
          >
            {aboutData.highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                  <div className="p-6 flex flex-col items-start">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-foreground/70">{highlight.text}</p>
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

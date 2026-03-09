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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 40, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-visible">

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 lg:bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Discover Who I Am
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline mb-4">
            Passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Code & AI</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* Main Bio Card */}
          <motion.div variants={itemVariants} className="md:col-span-8 flex flex-col h-full">
            <Card className="flex-1 p-8 md:p-12 bg-card/60 backdrop-blur-xl border-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group rounded-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-bold mb-6 font-headline bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">Hello! I'm Joel.</h3>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-loose md:leading-[2] font-light text-justify tracking-wide">
                  {aboutData.bio}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Image Card */}
          <motion.div variants={itemVariants} className="md:col-span-4 h-full min-h-[400px]">
            {avatarImage && (
              <Card className="h-full relative overflow-hidden group bg-card/60 backdrop-blur-xl border-primary/10 rounded-3xl pt-[100%] md:pt-0 shadow-lg">
                <Image
                  src={avatarImage.imageUrl}
                  alt={avatarImage.description}
                  data-ai-hint={avatarImage.imageHint}
                  fill
                  className="object-cover scale-[1.15] -translate-y-6 transition-transform duration-700 group-hover:scale-[1.2]"
                />
                {/* Gradient overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="font-bold text-2xl mb-1 text-white font-headline drop-shadow-md">Joel R Tharakan</p>
                  <p className="text-primary text-sm font-semibold tracking-widest uppercase shadow-black drop-shadow-lg">B.Tech AI & Data Science</p>
                </div>
              </Card>
            )}
          </motion.div>

          {/* Highlights Row - Sleek 4-Column Grid */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20 mt-4">
            {aboutData.highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="flex flex-col h-full bg-card/20 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all duration-500 rounded-2xl group overflow-visible relative mt-6 pt-10 px-6 pb-8 shadow-lg hover:shadow-primary/10">

                  {/* Floating Icon Orb */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border border-primary/30 flex items-center justify-center p-1 group-hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-background">
                    <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500 text-primary">
                      <img src={highlight.icon} alt={highlight.title} className="w-8 h-8 object-contain drop-shadow-md" />
                    </div>
                  </div>

                  {/* Top Ambient Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="flex flex-col items-center h-full pt-4 w-full">
                    <h4 className="font-bold font-headline text-lg sm:text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-500 text-center">
                      {highlight.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed text-sm text-justify w-full">
                      {highlight.text}
                    </p>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

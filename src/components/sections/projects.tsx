'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Github } from 'lucide-react';

type Project = typeof projectsData[0];

const ProjectCard = ({ project, onCardClick, index }: { project: Project; onCardClick: (project: Project) => void; index: number; }) => {
  const projectImage = PlaceHolderImages.find((img) => img.id === project.image);

  return (
    <motion.div
      onClick={() => onCardClick(project)}
      className="cursor-pointer group"
    >
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full min-h-[400px] overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
        {projectImage && (
          <div className="relative h-48">
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              data-ai-hint={projectImage.imageHint}
              width={600}
              height={400}
              priority={index < 3}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-center font-headline text-4xl md:text-5xl font-bold mb-12 text-primary"
        >
          Featured Creations
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div variants={itemVariants} key={project.title}>
              <ProjectCard project={project} onCardClick={setSelectedProject} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px] bg-card/80 backdrop-blur-lg border-primary/50">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, CheckCircle2, ArrowUpRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'joelrtharakan@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Let's Connect
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

            {/* Direct Email Column (takes up 3 cols on desktop) */}
            <motion.div variants={itemVariants} className="md:col-span-3 group relative">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-card/40 backdrop-blur-xl border border-primary/10 transition-all duration-500 p-6 md:p-8 rounded-3xl flex flex-col justify-center">

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline text-foreground">Email Me</h3>
                    <p className="text-foreground/70 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  <Button
                    onClick={handleCopyEmail}
                    variant="outline"
                    className="w-full flex items-center justify-between py-6 rounded-xl border-primary/20 bg-background/50 hover:bg-primary/10 hover:text-primary transition-all group/btn"
                  >
                    <span className="text-sm md:text-base font-medium font-mono">{email}</span>
                    {copied ? <CheckCircle2 className="text-green-500" size={18} /> : <Copy className="text-foreground/50 group-hover/btn:text-primary transition-colors" size={18} />}
                  </Button>
                  <Button
                    asChild
                    className="w-full py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base shadow-sm transition-all"
                  >
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry&body=Hi%20Joel,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`} target="_blank" rel="noopener noreferrer">
                      Compose in Gmail <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Social Connect List (takes up 2 cols on desktop) */}
            <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col justify-center gap-3 h-full">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/joel-r-tharakan/" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-[#0A66C2]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/40 backdrop-blur-md border border-border/50 p-3 rounded-2xl flex flex-row items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-2.5 bg-background/50 rounded-xl group-hover:bg-[#0A66C2]/10 transition-colors">
                    <Linkedin className="text-foreground/70 group-hover:text-[#0A66C2] transition-colors" size={20} />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">LinkedIn</span>
                  <ArrowUpRight className="ml-auto text-foreground/30 group-hover:text-[#0A66C2] transition-colors w-4 h-4 mr-2" />
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Joelrtharakan" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/40 backdrop-blur-md border border-border/50 p-3 rounded-2xl flex flex-row items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-2.5 bg-background/50 rounded-xl group-hover:bg-white/10 transition-colors">
                    <Github className="text-foreground/70 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">GitHub</span>
                  <ArrowUpRight className="ml-auto text-foreground/30 group-hover:text-white transition-colors w-4 h-4 mr-2" />
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/joelrtharakan?igsh=dzJsc2dvaGkxbzJ3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-[#fd5949] to-[#d6249f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card/40 backdrop-blur-md border border-border/50 p-3 rounded-2xl flex flex-row items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-2.5 bg-background/50 rounded-xl group-hover:bg-[#E1306C]/10 transition-colors">
                    <Instagram className="text-foreground/70 group-hover:text-[#E1306C] transition-colors" size={20} />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">Instagram</span>
                  <ArrowUpRight className="ml-auto text-foreground/30 group-hover:text-[#E1306C] transition-colors w-4 h-4 mr-2" />
                </div>
              </a>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, CheckCircle2, ArrowUpRight } from 'lucide-react';
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">What's Next?</span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
          </motion.div>

          {/* Interactive Connection Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Direct Email Card */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 p-8 rounded-3xl flex flex-col justify-between overflow-hidden">
                {/* Glow ring */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />

                <div className="relative z-10 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Mail size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-2 text-foreground">Email Me Directly</h3>
                  <p className="text-foreground/70 text-sm">Preferred method of communication. I'll try my best to get back to you within 24 hours!</p>
                </div>

                <div className="relative z-10 space-y-3">
                  <Button
                    onClick={handleCopyEmail}
                    variant="outline"
                    className="w-full flex items-center justify-between py-6 rounded-xl border-primary/20 bg-background/50 hover:bg-primary/10 hover:text-primary transition-all group/btn"
                  >
                    <span className="text-base font-medium font-mono">{email}</span>
                    {copied ? <CheckCircle2 className="text-green-500" size={20} /> : <Copy className="text-foreground/50 group-hover/btn:text-primary transition-colors" size={20} />}
                  </Button>
                  <Button
                    asChild
                    className="w-full py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                  >
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry&body=Hi%20Joel,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`} target="_blank" rel="noopener noreferrer">
                      Compose in Gmail <ArrowUpRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Social Connect Card & Summary */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 h-full">

              {/* LinkedIn Row */}
              <a href="https://www.linkedin.com/in/joel-r-tharakan/" target="_blank" rel="noopener noreferrer" className="flex-1 group relative">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500/30 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-card/40 backdrop-blur-xl border border-border/50 hover:border-blue-500/30 transition-all duration-500 p-6 md:p-8 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition-transform duration-500">
                      <Linkedin size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-blue-400 transition-colors">LinkedIn</h3>
                      <p className="text-sm text-foreground/60">Let's connect professionally</p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-foreground/30 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={28} />
                </div>
              </a>

              {/* GitHub Row */}
              <a href="https://github.com/Joelrtharakan" target="_blank" rel="noopener noreferrer" className="flex-1 group relative">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-foreground/20 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-card/40 backdrop-blur-xl border border-border/50 hover:border-foreground/30 transition-all duration-500 p-6 md:p-8 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-500">
                      <Github size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">GitHub</h3>
                      <p className="text-sm text-foreground/60">Check out my repositories</p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-foreground/30 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={28} />
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

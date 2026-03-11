'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { skillsDataFlat, SkillItem } from '@/lib/data';
import Image from 'next/image';

/* ── Category config ── */
const CATEGORIES = [
  { id: 'Programming', label: 'Programming', icon: '⟨/⟩' },
  { id: 'AI & ML', label: 'AI & ML', icon: '🧠' },
  { id: 'Data Analytics', label: 'Data Analytics', icon: '📊' },
  { id: 'Web Development', label: 'Web Dev', icon: '🌐' },
  { id: 'Mobile Development', label: 'Mobile', icon: '📱' },
  { id: 'Databases', label: 'Databases', icon: '🗄️' },
  { id: 'Tools', label: 'Tools', icon: '⚙️' },
];

/* ── Category gradient map ── */
const CATEGORY_GRADIENTS: Record<string, string> = {
  Programming: 'from-blue-500/10 to-cyan-500/5',
  'AI & ML': 'from-purple-500/10 to-violet-500/5',
  'Data Analytics': 'from-teal-500/10 to-emerald-500/5',
  'Web Development': 'from-sky-500/10 to-indigo-500/5',
  'Mobile Development': 'from-blue-600/10 to-sky-500/5',
  Databases: 'from-amber-500/10 to-orange-500/5',
  Tools: 'from-rose-500/10 to-pink-500/5',
};

const CATEGORY_ACCENTS: Record<string, string> = {
  Programming: '#3b82f6',
  'AI & ML': '#a855f7',
  'Data Analytics': '#14b8a6',
  'Web Development': '#6366f1',
  'Mobile Development': '#0ea5e9',
  Databases: '#f59e0b',
  Tools: '#f43f5e',
};

/* ─────────────────────── Floating particles background ─────────────────────── */
const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() * 2.5 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 18 + 12;
        const delay = Math.random() * 10;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              backgroundColor: `hsl(${217 + Math.random() * 40}, 80%, ${55 + Math.random() * 20}%)`,
              opacity: Math.random() * 0.25 + 0.05,
              animation: `float-particle ${duration}s ${delay}s ease-in-out infinite alternate`,
            }}
          />
        );
      })}
    </div>
  );
};

/* ─────────────────────── Skill card ─────────────────────── */
const DARK_ICON_SKILLS = ['Flask', 'GitHub', 'Next.js'];

const SkillCard = ({ skill, index, isVisible = true }: { skill: SkillItem; index: number; isVisible?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const safeColor = ['#FFFFFF', '#150458', '#013243', '#003B57'].includes(skill.color) ? '#94a3b8' : skill.color;
  const isDarkIcon = DARK_ICON_SKILLS.includes(skill.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative rounded-2xl border border-border/30 p-4 h-full cursor-default overflow-hidden"
        animate={{
          borderColor: isHovered ? `${safeColor}50` : 'hsl(217 32% 17% / 0.3)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(145deg, hsl(222 84% 5% / 0.6), hsl(217 32% 8% / 0.4))',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${safeColor}10 0%, transparent 55%)`,
          }}
        />

        {/* Top shine line */}
        <div
          className="absolute top-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${safeColor}60, transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-3">
          {/* Icon container */}
          <motion.div
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center relative"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              background: `linear-gradient(135deg, ${safeColor}15, ${safeColor}05)`,
              border: `1px solid ${safeColor}20`,
            }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={24}
              height={24}
              className="object-contain"
              style={isDarkIcon ? { filter: 'brightness(0) invert(1)' } : undefined}
              unoptimized
            />
            {/* Icon glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
              style={{ backgroundColor: `${safeColor}15` }}
            />
          </motion.div>

          {/* Text */}
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-foreground leading-tight group-hover:text-white transition-colors duration-300">
              {skill.name}
            </h4>
            <p className="text-[11px] text-muted-foreground/70 leading-relaxed mt-0.5 line-clamp-2 group-hover:text-muted-foreground transition-colors duration-300">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Bottom accent bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, transparent, ${safeColor}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────── Category section ─────────────────────── */
const CategorySection = ({
  categoryId,
  skills,
  startIndex,
}: {
  categoryId: string;
  skills: SkillItem[];
  startIndex: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const accent = CATEGORY_ACCENTS[categoryId] || '#6366f1';
  const gradient = CATEGORY_GRADIENTS[categoryId] || 'from-blue-500/10 to-cyan-500/5';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-6 w-1 rounded-full"
          style={{ backgroundColor: accent }}
        />
        <h3 className="text-base md:text-lg font-semibold text-foreground/90 font-headline">
          {categoryId}
        </h3>
        <span className="text-xs text-muted-foreground/50 bg-muted/20 px-2 py-0.5 rounded-full">
          {skills.length}
        </span>
        <div className="flex-1 h-[1px] ml-2" style={{
          background: `linear-gradient(90deg, ${accent}30, transparent)`,
        }} />
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} isVisible={isInView} />
        ))}
      </div>
    </motion.div>
  );
};

/* ─────────────────────── Main component ─────────────────────── */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const filteredSkills = useMemo(() => {
    return skillsDataFlat.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  // Group skills by category for "All" view (Removed since "All" is no longer an option)
  const groupedSkills = null;

  // Total counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: skillsDataFlat.length };
    skillsDataFlat.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="skills" className="pt-12 md:pt-16 pb-20 md:pb-32 relative overflow-hidden">
      {/* Animated background */}
      <ParticlesBackground />

      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.04) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(280 70% 50% / 0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary/80 tracking-wider uppercase">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="text-foreground">My Tech </span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            A curated collection of technologies, frameworks, and tools
            that power my development workflow
          </p>


        </motion.div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${isActive
                  ? 'bg-primary/10 text-primary border-primary/40 shadow-[0_0_15px_hsl(var(--primary)/0.15)]'
                  : 'bg-card/20 text-muted-foreground border-white/5 hover:border-primary/30 hover:text-foreground hover:bg-white/5 shadow-sm'
                  }`}
              >
                <span className="flex items-center gap-2 relative z-10 transition-transform duration-200 group-hover:scale-[1.02]">
                  <span className="tracking-wide leading-none">{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none transition-colors duration-300 ${isActive ? 'bg-primary/20 text-primary' : 'bg-white/10 text-muted-foreground/50 group-hover:bg-white/15'
                    }`}>
                    {categoryCounts[cat.id] || 0}
                  </span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full border border-primary/50 bg-primary/5 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── Skills content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Professional Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 md:mt-24"
        >
          {/* Section header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-medium text-indigo-300/90 uppercase tracking-wider">Soft Skills</span>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold font-headline bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              Professional Skills
            </h3>
            <p className="text-sm text-muted-foreground/50 mt-2 max-w-md mx-auto">
              The human-powered skills behind every great product
            </p>
          </div>

          {/* Skills cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { name: 'Teamwork', icon: '/icons/256_meeting_room.webp', color: '#3B82F6', glow: 'rgba(59,130,246,0.15)', desc: 'Collaborative synergy' },
              { name: 'Communication', icon: '/icons/48_communication__v2.webp', color: '#A855F7', glow: 'rgba(168,85,247,0.15)', desc: 'Clear & effective' },
              { name: 'Problem Solving', icon: '/icons/100_creativity_and_resourcefulness.webp', color: '#F59E0B', glow: 'rgba(245,158,11,0.15)', desc: 'Creative solutions' },
              { name: 'Critical Thinking', icon: '/icons/64_external_critical_thinking_literature_flaticons_lineal_color_flat_icons.webp', color: '#10B981', glow: 'rgba(16,185,129,0.15)', desc: 'Analytical mindset' },
              { name: 'Leadership', icon: '/icons/64_external_leadership_business_flaticons_lineal_color_flat_icons.webp', color: '#EF4444', glow: 'rgba(239,68,68,0.15)', desc: 'Inspire & guide' },
              { name: 'Adaptability', icon: '/icons/96_change.webp', color: '#8B5CF6', glow: 'rgba(139,92,246,0.15)', desc: 'Quick to evolve' },
            ].map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative cursor-default"
              >
                {/* Glow behind card on hover */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: s.glow }}
                />

                {/* Card */}
                <div
                  className="relative flex flex-col items-center text-center rounded-2xl border border-border/20 p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-opacity-50"
                  style={{
                    background: 'linear-gradient(170deg, hsl(222 84% 7% / 0.9), hsl(217 32% 10% / 0.6))',
                    borderColor: `${s.color}15`,
                  }}
                >
                  {/* Animated top border accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                    }}
                  />

                  {/* Subtle radial glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 30%, ${s.color}08, transparent 70%)`,
                    }}
                  />

                  {/* Icon with floating animation on hover */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-shadow duration-500 group-hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}12, ${s.color}06)`,
                        border: `1px solid ${s.color}20`,
                        boxShadow: `0 0 0 0 ${s.color}00`,
                      }}
                    >
                      <Image
                        src={s.icon}
                        alt={s.name}
                        width={52}
                        height={52}
                        className="object-contain drop-shadow-md"
                        unoptimized
                      />
                    </div>
                    {/* Glow dot */}
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ backgroundColor: s.color }}
                    />
                  </motion.div>

                  {/* Name */}
                  <span className="text-sm font-bold text-foreground/90 mb-1 leading-tight group-hover:text-white transition-colors duration-300">
                    {s.name}
                  </span>
                  {/* Tagline */}
                  <span className="text-[10px] md:text-xs text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-300 leading-tight">
                    {s.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyframes - injected as global style */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-particle {
          0% { transform: translate(0, 0) scale(1); opacity: 0.15; }
          50% { opacity: 0.3; }
          100% { transform: translate(15px, -20px) scale(1.3); opacity: 0.05; }
        }
      ` }} />
    </section>
  );
};

export default Skills;

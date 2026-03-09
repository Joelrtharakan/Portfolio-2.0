'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsDataFlat, SkillItem } from '@/lib/data';
import Image from 'next/image';

const CATEGORIES = ['All', 'Languages', 'Frameworks', 'Databases', 'AI & Data Science', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dragStartRef = useRef(0);
  const rotationStartRef = useRef(0);

  const filteredSkills = activeCategory === 'All'
    ? skillsDataFlat
    : skillsDataFlat.filter(s => s.category === activeCategory);

  const displaySkill = hoveredSkill || filteredSkills[0];
  const count = filteredSkills.length;

  useEffect(() => { setMounted(true); }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = e.clientX;
    rotationStartRef.current = rotationOffset;
  }, [rotationOffset]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current;
    setRotationOffset(rotationStartRef.current + dx * 0.3);
  }, [isDragging]);

  const handlePointerUp = useCallback(() => { setIsDragging(false); }, []);

  useEffect(() => {
    if (!mounted || hoveredSkill || isDragging) return;
    const interval = setInterval(() => {
      setRotationOffset(prev => prev + 0.1);
    }, 30);
    return () => clearInterval(interval);
  }, [mounted, hoveredSkill, isDragging]);

  useEffect(() => {
    setRotationOffset(0);
    setHoveredSkill(null);
  }, [activeCategory]);

  // Layout: 500px square viewbox, 185px orbit radius — compact enough to always fit
  const VB = 500;
  const C = VB / 2;  // 250
  const R = 185;     // orbit radius

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700"
          style={{
            width: 500,
            height: 500,
            background: `radial-gradient(circle, ${displaySkill?.color || '#6366f1'}0a 0%, transparent 55%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-2 text-primary">
            My Tech Arsenal
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                  : 'bg-card/40 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ───── Orbital Section ───── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div
            className="relative select-none touch-none"
            style={{ width: '100%', maxWidth: 460, aspectRatio: '1' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {/* SVG rings */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${VB} ${VB}`}
              fill="none"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="orbit-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(217,91%,60%)" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="hsl(217,91%,60%)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="hsl(217,91%,60%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Outer decorative ring */}
              <circle cx={C} cy={C} r={228} stroke="hsl(217,91%,60%)" strokeOpacity={0.04} strokeWidth={0.8} strokeDasharray="3 6" />

              {/* Main orbit ring */}
              <circle cx={C} cy={C} r={R} stroke="url(#orbit-stroke)" strokeWidth={1.5} />
              {/* Glow band */}
              <circle cx={C} cy={C} r={R} stroke="hsl(217,91%,60%)" strokeOpacity={0.04} strokeWidth={12} filter="url(#glow)" />

              {/* Middle ring */}
              <circle cx={C} cy={C} r={120} stroke="hsl(217,91%,60%)" strokeOpacity={0.05} strokeWidth={0.6} strokeDasharray="2 4" />

              {/* Inner ring */}
              <circle cx={C} cy={C} r={72} stroke="hsl(217,91%,60%)" strokeOpacity={0.04} strokeWidth={0.6} />
              <circle cx={C} cy={C} r={72} fill="hsl(217,91%,60%)" fillOpacity={0.012} />

              {mounted && (
                <>
                  {/* Colored arc 1 */}
                  <circle
                    cx={C} cy={C} r={R}
                    stroke={displaySkill?.color || '#6366f1'}
                    strokeOpacity={0.5}
                    strokeWidth={2}
                    strokeDasharray="70 1093"
                    strokeDashoffset={-rotationOffset * 3}
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{ transition: 'stroke 0.5s' }}
                  />
                  {/* Colored arc 2 */}
                  <circle
                    cx={C} cy={C} r={R}
                    stroke={displaySkill?.color || '#6366f1'}
                    strokeOpacity={0.2}
                    strokeWidth={1.5}
                    strokeDasharray="35 1128"
                    strokeDashoffset={-rotationOffset * 3 + 560}
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.5s' }}
                  />

                  {/* Orbit dots */}
                  {[0, 90, 180, 270].map((deg) => {
                    const rad = ((deg + rotationOffset * 0.35) * Math.PI) / 180;
                    return (
                      <circle
                        key={`d${deg}`}
                        cx={C + R * Math.cos(rad)}
                        cy={C + R * Math.sin(rad)}
                        r={1.8}
                        fill="hsl(217,91%,60%)"
                        opacity={0.22}
                      />
                    );
                  })}
                </>
              )}
            </svg>

            {/* ── Center content ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displaySkill?.name || '-'}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center text-center"
                  /* Nudge entire block up by ~16px so icon sits at geometric center */
                  style={{ transform: 'translateY(-14px)' }}
                >
                  {displaySkill && (
                    <>
                      <div
                        className="absolute rounded-full blur-3xl opacity-18 -z-10"
                        style={{ width: 110, height: 110, backgroundColor: displaySkill.color }}
                      />
                      <div className="relative w-12 h-12 md:w-16 md:h-16 mb-2">
                        <Image
                          src={displaySkill.icon}
                          alt={displaySkill.name}
                          fill
                          className="object-contain drop-shadow-2xl"
                          unoptimized
                        />
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-foreground font-headline leading-tight">
                        {displaySkill.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground max-w-[130px] md:max-w-[170px] leading-relaxed mt-1">
                        {displaySkill.description}
                      </p>
                      <span
                        className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-full font-medium mt-1.5"
                        style={{
                          backgroundColor: `${displaySkill.color}12`,
                          color: ['#FFFFFF', '#150458', '#013243'].includes(displaySkill.color) ? '#94a3b8' : displaySkill.color,
                          border: `1px solid ${displaySkill.color}20`,
                        }}
                      >
                        {displaySkill.category}
                      </span>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Orbiting Icons ── */}
            {mounted && (
              <AnimatePresence mode="sync">
                {filteredSkills.map((skill, index) => {
                  const step = 360 / count;
                  const angle = step * index - 90 + rotationOffset;
                  const rad = (angle * Math.PI) / 180;

                  const pct = (R / C) * 50; // 185/250*50 = 37%
                  const left = 50 + pct * Math.cos(rad);
                  const top = 50 + pct * Math.sin(rad);
                  const isHovered = hoveredSkill?.name === skill.name;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredSkill && !isHovered ? 0.28 : 1,
                        scale: 1,
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        opacity: { duration: 0.2 },
                        scale: { type: 'spring', stiffness: 200, damping: 18 },
                      }}
                      className="absolute z-10 cursor-pointer"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 0.06s linear, top 0.06s linear, opacity 0.25s ease',
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <motion.div
                        className="rounded-full flex items-center justify-center"
                        animate={{
                          width: isHovered ? 56 : 42,
                          height: isHovered ? 56 : 42,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                        style={{
                          background: isHovered
                            ? `radial-gradient(circle at 35% 35%, ${skill.color}40, ${skill.color}10 80%, transparent)`
                            : 'radial-gradient(circle at 35% 35%, hsl(217 32% 17% / 0.95), hsl(222 84% 5%))',
                          border: isHovered ? `2px solid ${skill.color}` : `1.5px solid ${skill.color}28`,
                          boxShadow: isHovered
                            ? `0 0 18px ${skill.color}50, 0 0 40px ${skill.color}12`
                            : '0 2px 8px rgba(0,0,0,0.25)',
                          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                        }}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={isHovered ? 28 : 20}
                          height={isHovered ? 28 : 20}
                          className="object-contain"
                          style={{ transition: 'all 0.2s' }}
                          unoptimized
                        />
                      </motion.div>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.span
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold px-2 py-0.5 rounded-md bg-card/95 border border-border/50 shadow-lg backdrop-blur-md z-30"
                            style={{
                              top: 'calc(100% + 5px)',
                              color: ['#FFFFFF', '#150458', '#013243'].includes(skill.color) ? '#cbd5e1' : skill.color,
                            }}
                          >
                            {skill.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroScene } from '@/components/HeroScene';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Sanjay06092001', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjay-raja-7100a3248/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/s_a_n_j_a_y_r_a_j_a_/', label: 'Instagram' },
];

export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Sanjay_Raja_Resume.pdf';
  link.download = 'Sanjay_Raja_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !titleRef.current) return;

    const chars = titleRef.current.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.5,
      }
    );
  }, [prefersReducedMotion]);

  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleText = "Creative Developer";
  const splitTitle = titleText.split('').map((char, index) => (
    <span key={index} className="char inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      
      {/* 3D Scene */}
      <HeroScene />

      {/* Content */}
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Sanjay Raja
          </motion.h2>

          {/* Title with character animation */}
          <h1
            ref={titleRef}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-gradient mb-6 overflow-hidden"
          >
            {prefersReducedMotion ? titleText : splitTitle}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I build reliable and intuitive web applications by combining thoughtful UI design,
            strong engineering principles, and modern JavaScript technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="gradient" size="xl" onClick={handleScrollToAbout}>
              Explore My Work
            </Button>
            <Button variant="glass" size="xl" onClick={downloadResume}>
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass hover:glow transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} className="text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

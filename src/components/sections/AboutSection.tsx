import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Creating visually stunning interfaces that captivate and engage users.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing every aspect for lightning-fast load times and smooth interactions.',
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !textRef.current) return;

    const words = textRef.current.querySelectorAll('.word');
    
    gsap.fromTo(
      words,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, [prefersReducedMotion]);

  const storyText = "Full Stack Software Developer with over 2 years of experience in designing, developing, and deploying scalable web applications using React.js, Next.js, Node.js, and Express.js. Strong expertise in building secure RESTful APIs, responsive user interfaces, AI-driven automation platforms, and enterprise-grade security solutions. Proven ability to work in Agile environments, integrate automation frameworks, optimize databases, and deliver high-quality software solutions that drive business efficiency and reliability.";
  
  const splitStory = storyText.split(' ').map((word, index) => (
    <span key={index} className="word inline-block mr-2">
      {word}
    </span>
  ));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Crafting Digital
              <span className="text-gradient"> Excellence</span>
            </h2>
          </motion.div>

          {/* Story with word reveal */}
          <div
            ref={textRef}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-muted-foreground leading-relaxed mb-20 max-w-4xl mx-auto text-center"
          >
            {prefersReducedMotion ? storyText : splitStory}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl glass gradient-border"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6"
                >
                  <feature.icon size={24} className="text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

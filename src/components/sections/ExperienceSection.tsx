import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Expleo Group',
    location: 'Chennai, India',
    period: '2024 - Present',
    description: 'Developing and maintaining web applications for enterprise clients. Focused on building scalable backend services and enhancing frontend user experiences.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Express.js'],
  },
  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Expleo Group',
    location: 'Chennai, India',
    period: '2023 - 2024',
    description: 'Built scalable web applications for Fortune 500 clients. Specialized in performance optimization and accessibility.',
    technologies: ['Next.js', 'Node.js', 'MSSQL', 'Azure', 'Bootstrap'],
  },
  // {
  //   id: 3,
  //   role: 'Frontend Developer',
  //   company: 'StartupXYZ',
  //   location: 'Austin, TX',
  //   period: '2018 - 2020',
  //   description: 'Developed the core product from MVP to production. Implemented real-time features and complex animations.',
  //   technologies: ['React', 'Redux', 'GSAP', 'WebSocket'],
  // },
  // {
  //   id: 4,
  //   role: 'Junior Developer',
  //   company: 'Web Solutions Ltd.',
  //   location: 'Remote',
  //   period: '2017 - 2018',
  //   description: 'Started my professional journey building responsive websites and learning modern frameworks.',
  //   technologies: ['JavaScript', 'Vue.js', 'SCSS', 'PHP'],
  // },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !timelineRef.current) return;

    const line = timelineRef.current.querySelector('.timeline-line');
    
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
      }
    );
  }, [prefersReducedMotion]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Briefcase size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Experience</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Professional
              <span className="text-gradient"> Journey</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
              <div className="timeline-line absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary origin-top" />
              <div className="absolute inset-0 bg-border" />
            </div>

            {/* Experience Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow -translate-x-1/2 top-8 md:top-10 z-10" />

                  {/* Empty Space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:w-1/2 ml-8 md:ml-0 p-6 rounded-2xl glass gradient-border group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

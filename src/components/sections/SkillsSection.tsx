import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu } from 'lucide-react';

const skills = [
  { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-400 to-indigo-500' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
  { name: 'Express.js', level: 80, color: 'from-purple-400 to-pink-500' },
  { name: 'Next.js', level: 90, color: 'from-pink-400 to-rose-500' },
  { name: 'Microservices', level: 85, color: 'from-amber-400 to-orange-500' },
  { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-500' },
  { name: 'MSSQL', level: 75, color: 'from-indigo-400 to-violet-500' },
];

const technologies = [
  'JavaScript', 'REST APIs', 'Docker','Figma', 'Git', 'Testing', 'Agile'
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />

      <div className="container relative px-6">
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
              <Cpu size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Skills & Expertise</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Technical
              <span className="text-gradient"> Proficiency</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of creativity and technical expertise to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Bars */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} glow`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {skills.slice(4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} glow`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground hover:text-foreground hover:glow transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

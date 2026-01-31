import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Enterprise Assets & Accelerators Portal',
    category: 'Full Stack',
    description: 'Internal system for managing reusable development accelerators and shared utilities.',
    longDescription: 'Developed a comprehensive portal to streamline the discovery and management of reusable assets across multiple development teams. Features include role-based access control, asset versioning, and integration with CI/CD pipelines for automated deployment.',
    technologies: ['Next.js', 'TypeScript', 'Figma', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'AI-Based Test Case Generation System',
    category: 'React / Node.js',
    description: 'Converted functional requirements into executable test cases using AIdriven logic.',
    longDescription: 'Built an AI-powered system that analyzes functional requirements and automatically generates executable test cases. The platform leverages natural language processing to understand requirements and create relevant test scenarios, significantly reducing manual effort and improving test coverage.',
    technologies: ['React', 'Node.js', 'Material-UI', 'Express'],
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Web-Based Test Automation Platform',
    category: 'Test Automation',
    description: 'Centralized execution of web, API, and mobile tests with live monitoring and reporting',
    longDescription: 'Developed a robust test automation platform that allows QA teams to create, manage, and execute automated tests for web, API, and mobile applications. The platform features real-time monitoring, detailed reporting, and integration with CI/CD tools to ensure continuous quality assurance throughout the development lifecycle.',
    technologies: ['React', 'Node.js', 'WebSocket', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Ant Design', 'Playwright', 'Appium'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'AI-Assisted Code Generation Platform',
    category: 'Frontend / AI',
    description: 'Automated code and test creation with repository integration and execution workflows.',
    longDescription: 'Created an AI-assisted platform that generates code snippets and test cases based on user inputs and project requirements. The system integrates with popular code repositories, allowing developers to seamlessly incorporate generated code into their projects. Additionally, it supports automated execution workflows to validate the generated code in real-time.',
    technologies: ['React', 'OpenAI', 'LangChain', 'Tailwind CSS', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-orange-500 to-amber-500',
  },
];

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20`} />
          </div>

          <div>
            <span className="text-primary text-sm font-medium">{project.category}</span>
            <h3 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* <div className="flex gap-4">
              <Button variant="gradient" className="flex-1">
                <ExternalLink size={16} />
                Live Demo
              </Button>
              <Button variant="outline" className="flex-1">
                <Github size={16} />
                Source Code
              </Button>
            </div> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative py-32 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />

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
                <Layers size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Featured Work</span>
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Selected
                <span className="text-gradient"> Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A showcase of my best work, from complex web applications to creative experiments.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer glass"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 backdrop-blur-sm"
                  >
                    <ExternalLink size={16} className="text-primary" />
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

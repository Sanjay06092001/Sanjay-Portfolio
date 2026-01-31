import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CustomCursor } from '@/components/CustomCursor';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <PageTransition>
      {/* <Helmet>
        <title>John Doe | Creative Developer & Designer</title>
        <meta
          name="description"
          content="I'm John Doe, a creative developer specializing in immersive web experiences with React, Three.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="web developer, frontend developer, react developer, creative developer, portfolio"
        />
        <meta property="og:title" content="John Doe | Creative Developer & Designer" />
        <meta
          property="og:description"
          content="I'm John Doe, a creative developer specializing in immersive web experiences with React, Three.js, and modern web technologies."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe | Creative Developer & Designer" />
        <meta
          name="twitter:description"
          content="I'm John Doe, a creative developer specializing in immersive web experiences with React, Three.js, and modern web technologies."
        />
        <link rel="canonical" href="https://johndoe.dev" />
      </Helmet> */}

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Custom Cursor (Desktop only) */}
        <div className="hidden lg:block">
          <CustomCursor />
        </div>

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;

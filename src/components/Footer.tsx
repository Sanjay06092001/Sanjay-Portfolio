import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Sanjay06092001', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjay-raja-7100a3248/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/s_a_n_j_a_y_r_a_j_a_/', label: 'Instagram' },
];

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo removed for Sanjay Raja branding */}

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart size={14} className="text-destructive fill-destructive" /> by Sanjay Raja
              <span className="mx-2">•</span>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

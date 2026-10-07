'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FiCpu, 
  FiDatabase, 
  FiSettings, 
  FiTarget, 
  FiZap,
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
  FiArrowRight
} from 'react-icons/fi';

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const projects = [
    {
      id: 'qair',
      title: 'QAIR',
      subtitle: 'Quantom AI Runtime',
      description: 'An AI execution runtime designed for robotics, IoT, edge AI and intelligent automation systems.',
      tags: ['AI Runtime', 'Robotics', 'Edge AI', 'IoT'],
      accent: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'jafar',
      title: 'JAFAR',
      subtitle: 'Embodied Facility AI',
      description: 'An embodied/facility AI assistant built on QAIR, designed to interact with people, knowledge, tools and intelligent facility systems.',
      tags: ['Embodied AI', 'Facility Intelligence', 'Human-AI Interaction'],
      accent: 'from-purple-500 to-pink-500'
    },
    {
      id: 'agrisense',
      title: 'AgriSense',
      subtitle: 'IoT Agriculture Platform',
      description: 'An IoT agriculture platform using ESP32-based sensing, Firebase and intelligent decision/alert workflows.',
      tags: ['IoT', 'ESP32', 'Firebase', 'Agriculture'],
      accent: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ponderaiot',
      title: 'PonderaIoT',
      subtitle: 'Aquaculture Monitoring',
      description: 'An IoT fish-pond monitoring concept focused on environmental monitoring and intelligent aquaculture.',
      tags: ['IoT', 'Aquaculture', 'Environmental Monitoring'],
      accent: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'raiih',
      title: 'RAIIH',
      subtitle: 'Rwanda AI Institute & Innovation Hub',
      description: 'A Deep Tech infrastructure vision spanning AI, robotics, advanced computing, innovation and talent development.',
      tags: ['AI Infrastructure', 'Innovation Hub', 'Robotics', 'Talent Development'],
      accent: 'from-orange-500 to-red-500'
    },
    {
      id: 'techthingz',
      title: 'Labs With Techthingz',
      subtitle: 'STEM/STEAM Edutainment',
      description: 'A STEM/STEAM edutainment and learning ecosystem combining technology education, robotics, IoT, AI and media.',
      tags: ['STEM Education', 'Robotics', 'Edutainment', 'AI Learning'],
      accent: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    { name: 'AI / ML', category: 'ai' },
    { name: 'Generative AI', category: 'ai' },
    { name: 'Agentic AI', category: 'ai' },
    { name: 'Deep Learning', category: 'ai' },
    { name: 'Edge AI', category: 'ai' },
    { name: 'IoT', category: 'hardware' },
    { name: 'ESP32', category: 'hardware' },
    { name: 'Raspberry Pi', category: 'hardware' },
    { name: 'NVIDIA Jetson', category: 'hardware' },
    { name: 'Robotics', category: 'hardware' },
    { name: 'Computer Vision', category: 'ai' },
    { name: 'Cloud / AWS', category: 'cloud' },
    { name: 'DevOps', category: 'cloud' },
    { name: 'Python', category: 'software' },
    { name: 'TypeScript', category: 'software' },
    { name: 'Next.js', category: 'software' },
    { name: 'Firebase', category: 'cloud' },
    { name: 'LangChain', category: 'ai' },
    { name: 'LangFlow', category: 'ai' },
    { name: 'MOA', category: 'ai' },
    { name: 'Docker', category: 'cloud' },
    { name: 'Automation', category: 'software' },
    { name: 'n8n', category: 'software' },
    { name: 'Make', category: 'software' }
  ];

  const stackLevels = [
    { 
      label: 'SENSE', 
      icon: <FiCpu className="w-6 h-6" />,
      description: 'Sensors / IoT'
    },
    { 
      label: 'CONNECT', 
      icon: <FiDatabase className="w-6 h-6" />,
      description: 'Data / Connectivity'
    },
    { 
      label: 'COMPUTE', 
      icon: <FiSettings className="w-6 h-6" />,
      description: 'Edge & Cloud Computing'
    },
    { 
      label: 'REASON', 
      icon: <FiTarget className="w-6 h-6" />,
      description: 'AI / Intelligence'
    },
    { 
      label: 'ACT', 
      icon: <FiZap className="w-6 h-6" />,
      description: 'Robotics / Automation'
    }
  ];

  const certifications = [
    'CCNA',
    'CCNP',
    'CyberOps',
    'IoT',
    '3MTT Deep Tech / Data Science',
    'AI Automation Training',
    'Certified Artificial Intelligence Consultant — in progress'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
          
          {/* Circuit-like lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0" y1="20%"
              x2="100%" y2="20%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              animate={{ x2: [0, 100] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.line
              x1="0" y1="80%"
              x2="100%" y2="80%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              animate={{ x2: [0, 100] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </svg>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-sm md:text-base tracking-[0.3em] text-gray-400 mb-4 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Engineering Intelligence. Building the Future.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8 relative inline-block"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src="/jude-photo.png"
                    alt="Jude Michael Baba"
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              <span className="gradient-text">JUDE MICHAEL BABA</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8">
              Chief Innovation Architect
            </h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I build intelligent systems at the intersection of AI, robotics, IoT and human ingenuity.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm md:text-base text-gray-500">
              <span>AI</span>
              <span className="text-gray-700">•</span>
              <span>Deep Tech</span>
              <span className="text-gray-700">•</span>
              <span>Robotics</span>
              <span className="text-gray-700">•</span>
              <span>IoT</span>
              <span className="text-gray-700">•</span>
              <span>Intelligent Automation</span>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                aria-label="Explore Jude Michael Baba's projects"
              >
                Explore My Work
              </button>
              <button 
                className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all duration-300"
                aria-label="Start a conversation with Jude Michael Baba"
              >
                Let&apos;s Build Something
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Circuits to Intelligent Systems</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Electrical/Electronic Engineering → IoT → Robotics → AI/ML → Intelligent Automation → Deep Tech Infrastructure → Embodied AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m an Electrical/Electronic Engineer, technology entrepreneur, STEM educator, content creator and Chief Innovation Architect working across AI, Deep Tech, Robotics, IoT, intelligent automation and innovation infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My work spans hardware, software, AI and real-world systems. I don&apos;t just write code—I build intelligent systems that perceive, reason, and act in the physical world.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="space-y-4">
                {['Hardware Engineering', 'Software Development', 'AI/ML Systems', 'IoT & Robotics', 'Intelligent Automation'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Building intelligent systems across domains</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 h-full border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.accent} mb-6 flex items-center justify-center`}>
                    <FiCpu className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    Explore Project <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Constellation */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Constellation</h2>
            <p className="text-xl text-gray-400">Working across the intelligent systems stack</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="relative"
              >
                <div className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  hoveredTech === tech.name 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* I Build Across the Stack */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">I Build Across the Stack</h2>
            <p className="text-xl text-gray-400">Systems-thinking from sensor to action</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {stackLevels.map((level, index) => (
              <motion.div
                key={level.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="glass rounded-2xl p-8 w-40 h-40 flex flex-col items-center justify-center border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="text-blue-400 mb-3">{level.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{level.label}</h3>
                  <p className="text-xs text-gray-500 text-center">{level.description}</p>
                </div>
                
                {index < stackLevels.length - 1 && (
                  <div className="hidden md:block text-gray-600 text-2xl mt-4">→</div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex justify-center mt-8 text-gray-600 text-2xl">
            ↓
          </div>
        </div>
      </section>

      {/* STEM / Education */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Labs With Techthingz</h2>
            <p className="text-2xl text-gray-400 mb-4">&ldquo;Technology should not only be built. It should be understood.&rdquo;</p>
            <p className="text-lg text-gray-500">STEM/STEAM Edutainment & Learning Ecosystem</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  My work in STEM education combines technology education, robotics, IoT, AI learning, camps, workshops and edutainment.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe in making complex technology accessible and exciting for the next generation of builders and innovators.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Robotics', 'IoT', 'AI Learning', 'Camps', 'Workshops', 'Edutainment'].map((item) => (
                  <div key={item} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RAIIH / Future Vision */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">RAIIH</h2>
            <p className="text-2xl text-gray-400 mb-4">Rwanda Artificial Intelligence Institute & Innovation Hub</p>
            <p className="text-xl text-purple-400">&ldquo;Building infrastructure for the next generation of African intelligence.&rdquo;</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                A vision for AI, robotics, advanced computing, innovation commercialization and talent development in Rwanda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['AI Infrastructure', 'Robotics', 'Advanced Computing', 'Innovation', 'Talent Development'].map((item) => (
                  <span key={item} className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career / Credentials */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Credentials</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Education</h3>
              <p className="text-gray-300">Electrical / Electronic Engineering</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400">Certifications & Training</h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-gray-300 text-sm">{cert}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed text-gray-200">
              &ldquo;I don&apos;t want to simply use technology.
              <br />
              <br />
              I want to understand it, build it, teach it, and push it into the real world.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Have a problem worth solving?</h2>
            <p className="text-2xl text-gray-400 mb-12">Let&apos;s build something intelligent.</p>
            
            <button 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mb-12"
              aria-label="Start a conversation with Jude Michael Baba"
            >
              Start a Conversation
            </button>
            
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
                <FiMail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="YouTube">
                <FiYoutube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Jude Michael Baba. Engineering Intelligence. Building the Future.</p>
        </div>
      </footer>
    </div>
  );
}

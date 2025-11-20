import { useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import { 
  Github, 
  Mail, 
  Globe, 
  BookOpen, 
  Briefcase, 
  Cpu
} from 'lucide-react'

const BentoGrid = ({ lang }: { lang: 'en' | 'zh' }) => {
  const data = content[lang];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-6 relative z-10">
      
      {/* About - Large Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="col-span-1 md:col-span-2 glass-panel p-8 min-h-[200px] flex flex-col justify-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-electricViolet to-neonMagenta">
          {data.about.title}
        </h2>
        <p className="text-lg leading-relaxed text-white/90">
          {data.about.text}
        </p>
      </motion.div>

      {/* Contact - Small Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="col-span-1 glass-panel p-8 flex flex-col justify-center items-center gap-6"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electricViolet to-neonMagenta flex items-center justify-center shadow-[0_0_20px_rgba(143,0,255,0.5)]">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <a href={`mailto:${data.contact.email}`} className="text-white/80 hover:text-white transition-colors">
          {data.contact.email}
        </a>
        <div className="flex gap-4">
            <a href={`https://github.com/${data.contact.github}`} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Github className="w-6 h-6" />
            </a>
        </div>
      </motion.div>

      {/* Education - Tall Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="col-span-1 md:col-span-1 row-span-2 glass-panel p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-neonMagenta" />
          <h3 className="text-xl font-bold">Education</h3>
        </div>
        <div className="space-y-6">
          {data.education.map((edu, i) => (
            <div key={i} className="relative pl-4 border-l border-white/20">
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-electricViolet" />
              <h4 className="font-bold text-sm">{edu.school}</h4>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/70 inline-block mb-1">{edu.degree}</span>
              <p className="text-xs text-white/60">{edu.dept}</p>
              <p className="text-xs text-white/40 mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Career */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="col-span-1 md:col-span-2 glass-panel p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-electricViolet" />
          <h3 className="text-xl font-bold">Career</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.career.map((job, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <h4 className="font-bold">{job.company}</h4>
              <p className="text-sm text-neonMagenta mt-1">{job.role}</p>
              <p className="text-xs text-white/50 mt-2">{job.period}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="col-span-1 md:col-span-2 glass-panel p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="text-neonMagenta" />
          <h3 className="text-xl font-bold">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
           {data.skills.map((skillGroup, i) => {
             const [category, items] = skillGroup.split(': ');
             return (
               <div key={i} className="w-full mb-2">
                 <span className="text-xs font-bold text-electricViolet uppercase tracking-wider mr-2">{category}</span>
                 <div className="flex flex-wrap gap-2 mt-1">
                   {items.split(' / ').map((skill, j) => (
                     <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs hover:border-neonMagenta/50 transition-colors cursor-default">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             )
           })}
        </div>
      </motion.div>
    </div>
  )
}

const App = () => {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  return (
    <div className="relative w-full min-h-screen text-white selection:bg-neonMagenta selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <span className="font-bold text-xl tracking-tighter">GRATIA</span>
        <button 
          onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{lang === 'en' ? 'ZH' : 'EN'}</span>
        </button>
      </nav>

      {/* Hero Section Overlay */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center pointer-events-auto">
          <h1 className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 opacity-90 text-glow mix-blend-overlay">
            GRATIA
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light tracking-[0.5em] uppercase text-white/70">
            {content[lang].hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content - Bento Grid */}
      <section className="relative pb-20">
        <BentoGrid lang={lang} />
      </section>

      {/* Footer */}
      <footer className="relative z-10 p-8 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Gratia Li. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

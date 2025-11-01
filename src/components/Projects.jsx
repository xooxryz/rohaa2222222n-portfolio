import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const Card = ({ p }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="glass rounded-3xl overflow-hidden flex flex-col"
  >
    <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
    <div className="p-6 flex flex-col gap-3 grow">
      <h4 className="text-lg font-semibold">{p.title}</h4>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
      <div className="flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/20">{t}</span>
        ))}
      </div>
      <div className="mt-auto flex gap-3 pt-2">
        <a className="bg-accent text-white px-3 py-1.5 rounded-xl text-sm font-semibold" href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
        <a className="glass px-3 py-1.5 rounded-xl text-sm font-semibold" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins">Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <Card key={p.id} p={p} />)}
      </div>
    </section>
  )
}

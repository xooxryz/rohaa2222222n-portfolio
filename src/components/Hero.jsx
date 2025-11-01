import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-accent blur-[180px] opacity-20"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight font-poppins"
        >
          Hi, I’m <span className="text-accent">Rohan</span> 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300"
        >
          Flutter Developer&nbsp;|&nbsp;Social Media Specialist&nbsp;|&nbsp;Content Writer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <a href="#projects" className="inline-flex items-center rounded-2xl bg-accent px-6 py-3 font-semibold text-white shadow-lg hover:scale-[1.02] active:scale-[0.99] transition">
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

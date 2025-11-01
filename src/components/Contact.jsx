import { Github, Instagram, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins">Let’s Connect</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">I’m open to freelance, collab, and internship opportunities.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href="mailto:arifulhaquerohan@gmail.com" className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-xl font-semibold">
            <Mail className="w-4 h-4" /> Email Me
          </a>
          <a href="https://www.instagram.com/xoxryz/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-4 py-2 rounded-xl font-semibold">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-4 py-2 rounded-xl font-semibold">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>

        <form className="mt-8 grid sm:grid-cols-2 gap-4">
          <input className="glass rounded-xl px-4 py-3" placeholder="Your name" />
          <input className="glass rounded-xl px-4 py-3" placeholder="Your email" type="email" />
          <textarea className="glass rounded-xl px-4 py-3 sm:col-span-2" placeholder="Message" rows="4"></textarea>
          <button type="button" className="bg-accent text-white px-4 py-2 rounded-xl font-semibold w-max">Send</button>
        </form>
      </div>
    </section>
  )
}

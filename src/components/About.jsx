import { QRCodeCanvas } from 'qrcode.react'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center">
          <img src="/favicon.svg" alt="Rohan avatar" className="w-28 h-28 rounded-full mb-4" />
          <h2 className="text-2xl font-bold font-poppins">About Me</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            I’m Rohan, a passionate Flutter Developer, Social Media Expert, and Content Writer focused on creating impactful digital experiences.
            I blend efficient mobile development with growth-focused social strategies and clear, creative storytelling.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/Rohan-Resume.pdf" className="glass px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">Download Resume</a>
            <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">Contact Me</a>
          </div>
        </div>

        <div className="glass rounded-3xl p-8">
          <h3 className="text-lg font-semibold mb-4">Instagram QR & Social</h3>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-black">
              <QRCodeCanvas value="https://www.instagram.com/xoxryz/" size={160} includeMargin />
            </div>
            <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p>Scan to follow on Instagram:</p>
              <a href="https://www.instagram.com/xoxryz/" target="_blank" rel="noreferrer" className="text-accent underline break-all">
                instagram.com/xoxryz
              </a>
              <div className="opacity-80">
                <p>Email: <a href="mailto:arifulhaquerohan@gmail.com" className="underline">arifulhaquerohan@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

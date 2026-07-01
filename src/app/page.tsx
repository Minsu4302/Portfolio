import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import TechStack from '@/components/TechStack'
import ProjectCard from '@/components/ProjectCard'
import Contact from '@/components/Contact'
import { projects } from '@/data/projects'

export default function Home() {
  const allProjects = projects.filter((p) =>
    ['bytepick', 'llm-monitoring', 'harness', 'infra', 'taskscope'].includes(p.slug)
  )

  return (
    <>
      <Nav />
      <main>
        <Hero />

        <div className="bg-gray-50 border-y border-gray-100">
          <About />
        </div>

        <TechStack />

        <div className="bg-gray-50 border-y border-gray-100">
          <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
            <p className="text-xs font-600 tracking-widest text-brand uppercase mb-3">Projects</p>
            <h2 className="text-2xl font-700 text-navy mb-8">프로젝트</h2>

            <div className="space-y-4">
              {allProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        </div>

        <Education />

        <Contact />
      </main>

      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © 2026 차민수 · <a href="https://github.com/Minsu4302/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors duration-150">Designed &amp; Developed by Minsu Cha</a>
      </footer>
    </>
  )
}

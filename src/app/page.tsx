import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectCard from '@/components/ProjectCard'
import ProjectMiniCard from '@/components/ProjectMiniCard'
import Contact from '@/components/Contact'
import { projects } from '@/data/projects'

export default function Home() {
  const mainProjects = projects.filter((p) =>
    ['bytepick', 'llm-monitoring', 'harness'].includes(p.slug)
  )
  const miniProjects = projects.filter((p) =>
    ['infra', 'erp'].includes(p.slug)
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

            <div className="space-y-4 mb-6">
              {mainProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {miniProjects.map((p) => (
                <ProjectMiniCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        </div>

        <Contact />
      </main>

      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © 2026 차민수. Built with Next.js + Tailwind CSS.
      </footer>
    </>
  )
}

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import DetailHero from '@/components/detail/DetailHero'
import StatRow from '@/components/detail/StatRow'
import ProblemBox from '@/components/detail/ProblemBox'
import ArchDiagram from '@/components/detail/ArchDiagram'
import ContribGrid from '@/components/detail/ContribGrid'
import TsCard from '@/components/detail/TsCard'
import ProjectNav from '@/components/detail/ProjectNav'
import { projects, getProject, getAdjacentProjects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — 차민수`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <DetailHero project={project} />

        {project.stats && project.stats.length > 0 && (
          <StatRow stats={project.stats} />
        )}

        <ProblemBox background={project.background} />

        <ArchDiagram slug={project.slug} />

        <ContribGrid contributions={project.contributions} />

        <TsCard items={project.troubleshooting} />

        <ProjectNav prev={prev} next={next} />
      </main>

      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © 2026 차민수. Built with Next.js + Tailwind CSS.
      </footer>
    </>
  )
}

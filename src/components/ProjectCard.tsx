import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative border border-gray-200 rounded-xl p-6 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 hover:-translate-y-px overflow-hidden">
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-xl" />

        <div className="flex gap-5">
          {/* Left: project icon */}
          {project.image && (
            <div className="shrink-0">
              <Image
                src={project.image}
                alt={project.name}
                width={88}
                height={88}
                className="rounded-2xl border border-gray-100 shadow-sm"
              />
            </div>
          )}

          {/* Right: all content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-500 bg-brand-subtle text-brand-deep px-2.5 py-0.5 rounded-full">
                  {project.role}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {project.status === '운영 중' ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                  ) : (
                    <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6.5L4.5 9L10 3" />
                    </svg>
                  )}
                  {project.status}
                </span>
              </div>
              <span className="text-xs text-gray-400 shrink-0">{project.period}</span>
            </div>

            <h3 className="text-lg font-700 text-navy mb-1.5 group-hover:text-brand transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">{project.summary}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.stack.slice(0, 5).map((s) => (
                <span key={s} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                  {s}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span className="text-xs text-gray-400 px-2 py-0.5">+{project.stack.length - 5}</span>
              )}
            </div>

            <div className="flex items-center gap-1 text-xs font-500 text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              자세히 보기 <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

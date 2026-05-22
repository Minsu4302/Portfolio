import Image from 'next/image'
import { GitBranch } from 'lucide-react'
import { Project } from '@/data/projects'

interface Props {
  project: Project
}

export default function DetailHero({ project }: Props) {
  return (
    <div className="border-b border-gray-100 pb-8 mb-10">
      <div className="flex gap-6 items-start">
        {/* Logo */}
        {project.image && (
          <div className="shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              width={96}
              height={96}
              className="rounded-2xl border border-gray-100 shadow-sm"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-3">
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
            <span className="text-xs text-gray-400 ml-auto">{project.period}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-700 text-navy mb-2">{project.name}</h1>
          <p className="text-gray-500 text-base leading-relaxed mb-4">{project.summary}</p>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-4 py-2 hover:border-brand hover:text-brand transition-colors duration-200 mb-5"
            >
              <GitBranch size={14} />
              GitHub 저장소
            </a>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-md border border-slate-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

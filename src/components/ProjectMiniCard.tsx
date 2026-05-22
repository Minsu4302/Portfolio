import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/data/projects'

interface Props {
  project: Project
}

export default function ProjectMiniCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 hover:-translate-y-px overflow-hidden h-full">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-xl" />

        <div className="flex gap-4">
          {project.image && (
            <div className="shrink-0">
              <Image
                src={project.image}
                alt={project.name}
                width={64}
                height={64}
                className="rounded-xl border border-gray-100 shadow-sm"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-500 bg-brand-subtle text-brand-deep px-2.5 py-0.5 rounded-full">
                {project.role}
              </span>
              <span className="text-xs text-gray-400">{project.period}</span>
            </div>

            <h3 className="text-base font-700 text-navy mb-1 group-hover:text-brand transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-2.5">{project.summary}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((s) => (
                <span key={s} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs font-500 text-brand mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              자세히 보기 <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

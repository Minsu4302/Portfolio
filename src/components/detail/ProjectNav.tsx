import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '@/data/projects'

interface Props {
  prev?: Project
  next?: Project
}

export default function ProjectNav({ prev, next }: Props) {
  return (
    <div className="border-t border-gray-100 mt-12 pt-8 flex items-center justify-between">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors duration-200"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          <div>
            <p className="text-xs text-gray-400 mb-0.5">이전 프로젝트</p>
            <p className="font-600 text-navy group-hover:text-brand transition-colors duration-200">{prev.name}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors duration-200 text-right"
        >
          <div>
            <p className="text-xs text-gray-400 mb-0.5">다음 프로젝트</p>
            <p className="font-600 text-navy group-hover:text-brand transition-colors duration-200">{next.name}</p>
          </div>
          <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

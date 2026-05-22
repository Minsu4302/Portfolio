import { Stat } from '@/data/projects'

interface Props {
  stats: Stat[]
}

export default function StatRow({ stats }: Props) {
  return (
    <div className="mb-10">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-4">Impact</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.num} className="border border-gray-200 rounded-xl p-5 bg-white text-center hover:border-blue-200 hover:shadow-sm transition-all duration-200">
            <div className="text-2xl font-700 text-brand mb-1">{s.num}</div>
            <div className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { Contribution } from '@/data/projects'

interface Props {
  contributions: Contribution[]
}

export default function ContribGrid({ contributions }: Props) {
  if (contributions.length === 0) return null

  return (
    <div className="mb-10">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-4">Contributions</p>
      <div className="grid md:grid-cols-2 gap-4">
        {contributions.map((c) => (
          <div key={c.title} className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200">
            <h4 className="text-sm font-700 text-navy mb-2">{c.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

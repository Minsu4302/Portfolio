import { Troubleshooting } from '@/data/projects'

interface Props {
  items: Troubleshooting[]
}

export default function TsCard({ items }: Props) {
  if (items.length === 0) return null

  return (
    <div className="mb-10">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-4">Troubleshooting</p>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <div className="px-5 py-3 border-b border-gray-100 bg-slate-50">
              <h4 className="text-sm font-700 text-navy">{item.title}</h4>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="px-5 py-4">
                <p className="text-xs font-600 text-gray-400 uppercase tracking-wide mb-1.5">문제</p>
                <p className="text-xs text-gray-600 leading-relaxed break-keep">{item.problem}</p>
              </div>
              <div className="grid md:grid-cols-[1.6fr_1fr] divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="px-5 py-4">
                  <p className="text-xs font-600 text-brand uppercase tracking-wide mb-1.5">원인 &amp; 해결</p>
                  <p className="text-xs text-gray-600 leading-relaxed break-keep">{item.solution}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-600 text-gray-400 uppercase tracking-wide mb-1.5">결과</p>
                  <p className="text-xs text-gray-600 leading-relaxed break-keep">{item.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

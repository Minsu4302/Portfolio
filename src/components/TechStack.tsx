import { Code2, Database, Activity, Cloud } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const categories: { label: string; icon: LucideIcon; primary: boolean; items: string[]; primaryItems?: string[] }[] = [
  {
    label: 'Backend',
    icon: Code2,
    primary: true,
    items: ['Java', 'Spring Boot', 'JPA/Hibernate', 'Python', 'FastAPI'],
    primaryItems: ['Java', 'Spring Boot', 'Python', 'FastAPI'],
  },
  {
    label: 'Database',
    icon: Database,
    primary: false,
    items: ['MySQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Cloud & Infra',
    icon: Cloud,
    primary: false,
    items: ['AWS (S3, EC2, RDS)', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'Observability',
    icon: Activity,
    primary: false,
    items: ['Prometheus', 'Grafana', 'OpenTelemetry'],
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-600 tracking-widest text-brand uppercase mb-3">Tech Stack</p>
        <h2 className="text-2xl font-700 text-navy mb-10">기술 스택</h2>

        <div className="space-y-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.label} className="flex items-start gap-6">
                <div className="w-36 shrink-0 flex items-center gap-2 pt-0.5">
                  <Icon size={14} className="text-brand shrink-0" />
                  <span className="text-xs font-600 text-gray-400 uppercase tracking-wide">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const isPrimary = cat.primary && cat.primaryItems?.includes(item)
                    return (
                      <span
                        key={item}
                        className={
                          isPrimary
                            ? 'bg-navy text-white text-xs font-500 px-3 py-1 rounded-md'
                            : 'bg-slate-100 text-slate-600 text-xs font-400 px-3 py-1 rounded-md border border-slate-200'
                        }
                      >
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

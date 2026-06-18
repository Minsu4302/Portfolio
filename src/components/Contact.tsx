import { Mail, GitBranch, FileText, Phone } from 'lucide-react'

const links = [
  {
    icon: Phone,
    label: '010-8798-4302',
    href: 'tel:01087984302',
  },
  {
    icon: Mail,
    label: 'gkdltpa9987@gmail.com',
    href: 'mailto:gkdltpa9987@gmail.com',
  },
  {
    icon: GitBranch,
    label: 'github.com/Minsu4302',
    href: 'https://github.com/Minsu4302',
  },
  {
    icon: FileText,
    label: '이력서 보기',
    href: '/resume',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-navy rounded-2xl p-10 text-center">
          <p className="text-xs font-600 tracking-widest text-brand-light uppercase mb-3">Contact</p>
          <h2 className="text-2xl font-700 text-white mb-2">새로운 가치를 함께 만들 준비가 되어 있습니다.</h2>
          <p className="text-sm text-slate-400 mb-8">언제든지 연락주세요.</p>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

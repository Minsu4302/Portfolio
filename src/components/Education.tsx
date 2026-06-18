const items = [
  {
    date: '2026.08.20',
    org: '단국대학교',
    title: '컴퓨터공학과 졸업 예정',
    detail: '3학년 편입 · 학과 차석',
  },
  {
    date: '2026.06.12',
    org: '한국산업인력공단',
    title: '정보처리기사 취득',
    detail: '',
  },
  {
    date: '2026.06.12',
    org: 'OPIc (ACTFL)',
    title: 'OPIc IH 취득',
    detail: '',
  },
]

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-3">Education &amp; Certifications</p>
      <h2 className="text-2xl font-700 text-navy mb-8">학력 &amp; 자격</h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-6 border-l-2 border-brand pl-5"
          >
            <div className="w-28 shrink-0 pt-0.5">
              <div className="text-sm text-gray-500">{item.date}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.org}</div>
            </div>
            <div className="pt-0.5">
              <div className="text-sm font-700 text-navy">{item.title}</div>
              {item.detail && (
                <div className="text-xs text-gray-500 mt-0.5">{item.detail}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

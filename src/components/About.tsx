const stats = [
  { num: '163위', label: '앱스토어\n다운로드 순위' },
  { num: '30개', label: '운영 중인\n점주 수' },
  { num: '6mo+', label: '실서비스\n운영 기간' },
  { num: '차석', label: '학과 석차' },
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text */}
        <div>
          <p className="text-xs font-600 tracking-widest text-brand uppercase mb-3">About</p>
          <h2 className="text-2xl font-700 text-navy mb-5">사람이 병목이 되는 구간을<br />직접 발견하고 제거합니다</h2>
          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <p>
              단국대학교 컴퓨터공학과에서 학과 차석으로 재학 중이며, B2B 외식업 플랫폼{' '}
              <span className="font-600 text-navy">바이트픽</span>에서 Backend 단독으로 6개월 이상 실서비스를 운영하고 있습니다.
            </p>
            <p>
              Prometheus·Grafana 기반 모니터링을 운영하며 모든 핵심 액션이 사람을 거쳐야 하는 구조적 한계를 직접 경험했고,
              이를 해결하기 위해 <span className="font-600 text-navy">LLM 기반 자동 모니터링 시스템</span>을 설계·구현했습니다.
            </p>
            <p>
              결제 SDK 충돌, FCM Race Condition, GitLab Webhook 다단계 디버깅 등
              실서비스에서 마주치는 병목을 직접 파고들어 제거하는 것을 좋아합니다.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.num} className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200">
              <div className="text-2xl font-700 text-brand mb-1">{s.num}</div>
              <div className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

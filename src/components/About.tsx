const stats = [
  { num: '163위', label: '앱스토어\n다운로드 순위' },
  { num: '30개', label: '운영 중인\n점주 수' },
  { num: '6개월+', label: '실서비스\n운영 기간' },
  { num: '차석', label: '학과\n성적 순위' },
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-3">About</p>
      <h2 className="text-2xl font-700 text-navy mb-6">
        해결이 남긴 다음 질문을<br />따라가며 성장하는 백엔드 개발자
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Description */}
        <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
          <p>
            B2B 외식업 플랫폼{' '}
            <span className="font-600 text-navy">바이트픽</span>에서 Backend를 단독으로 6개월 이상 운영하고 있습니다.
            30개 점주가 실제로 사용하는 서비스를 책임지며 앱스토어 다운로드 순위 163위를 달성했습니다.
          </p>
          <p>
            운영 과정에서 JaCoCo·SpotBugs 정적 분석 도구를 도입해 Branch 커버리지를 19% → 40.2%,
            Line 커버리지를 37% → 58%로 끌어올렸습니다. Prometheus·Grafana 모니터링을 운영하며
            수동 의존의 구조적 한계를 직접 경험했고, 이를 해결하기 위해{' '}
            <span className="font-600 text-navy">LLM 기반 자동 모니터링 시스템</span>을 설계·구현했습니다.
          </p>
          <p>
            하나의 해결책이 다음 질문을 남기고, 그 질문을 따라가며 다음 프로젝트로 이어집니다.
            LLM 모니터링이 AI 에이전트 비용 문제를 드러냈고, 하네스로 비용을 줄이자
            이번엔 "에이전트가 어디서 왜 비용을 쓰는지"가 보이지 않아{' '}
            <span className="font-600 text-navy">TaskScope</span>로 이어졌습니다.
          </p>
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

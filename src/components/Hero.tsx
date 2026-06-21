import Image from 'next/image'
import { ArrowRight, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-subtle text-brand-deep text-sm font-500 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
            Backend Developer · 2026 졸업 예정
          </div>

          <h1 className="text-3xl md:text-4xl font-700 text-navy leading-tight mb-4">
            운영하며 만난 병목을
            <br />
            <span className="text-brand">자동화로 해결하는</span>
            <br />
            백엔드 개발자
          </h1>

          <p className="text-gray-500 text-base leading-relaxed mb-8">
            비용과 안전성을 통제할 수 있는 자동화로 성장하겠습니다<br className="hidden md:block" />
            앱스토어 163위 달성 실서비스 운영
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-500 px-5 py-2.5 rounded-lg hover:bg-navy-soft transition-colors duration-200"
            >
              Projects 보기 <ArrowRight size={15} />
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 border border-gray-200 text-navy text-sm font-500 px-5 py-2.5 rounded-lg hover:border-brand hover:text-brand transition-colors duration-200"
            >
              이력서 보기 <FileText size={15} />
            </a>
          </div>
        </div>

        {/* Team photo */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full overflow-hidden rounded-xl aspect-[4/3]">
            <Image
              src="/team.jpg"
              alt="팀 협업 사진"
              width={1330}
              height={998}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

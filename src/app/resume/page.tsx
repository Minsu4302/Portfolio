import Nav from '@/components/Nav'
import type { Metadata } from 'next'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: '이력서 — 차민수',
  description: '직접 운영하며 만난 병목을 자동화로 해결하고, 그 해결이 남긴 다음 질문을 따라가며 성장하는 백엔드 개발자 차민수의 이력서',
}

const css = `
@page { size: A4; margin: 14mm 16mm; }

@media print {
  nav, .print-actions { display: none !important; }
  .resume-shell { background: white !important; padding: 0 !important; }
  .resume-wrapper { box-shadow: none !important; border: none !important; border-radius: 0 !important; }
}

.resume-content * { box-sizing: border-box; margin: 0; padding: 0; }

.resume-content {
  font-family: "Noto Sans CJK KR", "Noto Sans KR", sans-serif;
  color: #1f2937;
  font-size: 10pt;
  line-height: 1.5;
}

.resume-content .header {
  border-bottom: 2.5px solid #1a2940;
  padding-bottom: 8px;
  margin-bottom: 14px;
}
.resume-content .header h1 {
  font-size: 23pt;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.resume-content .header h1 .name-gray { color: #475569; }
.resume-content .header h1 .name-blue { color: #2563a8; }
.resume-content .header .positioning {
  margin-top: 16px;
  font-size: 10.8pt;
  color: #2563a8;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.resume-content .contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  row-gap: 12px;
  page-break-inside: avoid;
}
.resume-content .contact-card {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  page-break-inside: avoid;
}
.resume-content .contact-card svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: #2563a8;
  margin-top: 2px;
}
.resume-content .contact-card .label {
  font-size: 8.5pt;
  font-weight: 700;
  color: #1a2940;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.resume-content .contact-card .value {
  font-size: 9.2pt;
  color: #374151;
  overflow-wrap: break-word;
  word-break: normal;
}
.resume-content .contact-card .value a {
  color: #374151;
  text-decoration: none;
}

.resume-content section { margin-bottom: 10px; }

.resume-content h2 {
  font-size: 11pt;
  font-weight: 800;
  color: #1a2940;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 4px;
  margin-bottom: 10px;
}

.resume-content .tech-stack {
  display: grid;
  grid-template-columns: 110px 1fr;
  row-gap: 4px;
  column-gap: 12px;
  font-size: 9.8pt;
}
.resume-content .tech-stack .label { font-weight: 700; color: #1a2940; }
.resume-content .tech-stack .label.primary { color: #2563a8; }
.resume-content .tech-stack .items { color: #374151; }

.resume-content .project { margin-bottom: 11px; page-break-inside: avoid; }
.resume-content .project:last-child { margin-bottom: 0; }
.resume-content .project + .project {
  border-top: 1px solid #eef0f3;
  padding-top: 10px;
}

.resume-content .project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
  flex-wrap: wrap;
  gap: 4px;
}
.resume-content .project-title-wrap {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
}
.resume-content .project-title {
  font-size: 11.5pt;
  font-weight: 800;
  color: #1a2940;
}
.resume-content .project-title .role {
  font-weight: 500;
  color: #6b7280;
  font-size: 9pt;
}
.resume-content .project-link {
  font-size: 8.3pt;
  color: #2563a8;
  text-decoration: none;
  border: 1px solid #b9d3ea;
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
}
.resume-content .project-meta { font-size: 9pt; color: #6b7280; font-style: italic; }
.resume-content .project-stack { font-size: 8.8pt; color: #4b5563; margin-bottom: 4px; }

.resume-content .project ul { list-style: none; padding-left: 0; }
.resume-content .project ul li {
  position: relative;
  padding-left: 13px;
  margin-bottom: 3px;
  font-size: 9.8pt;
  line-height: 1.5;
}
.resume-content .project ul li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #2563a8;
  font-size: 8pt;
  top: 3px;
}
.resume-content .project ul li b { color: #1a2940; font-weight: 700; }

.resume-content .ts-list li { padding-left: 13px; }
.resume-content .ts-list .result { color: #374151; }
.resume-content .ts-list .arrow { color: #9ca3af; margin: 0 2px; }

.resume-content .project-category {
  font-size: 8.3pt;
  font-weight: 700;
  color: #2563a8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-left: 2.5px solid #2563a8;
  padding-left: 6px;
  margin-top: 6px;
  margin-bottom: 4px;
}

.resume-content .timeline { display: flex; flex-direction: column; gap: 9px; }
.resume-content .timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-left: 2.5px solid #2563a8;
  padding-left: 12px;
}
.resume-content .timeline-date { width: 110px; flex-shrink: 0; padding-top: 1px; }
.resume-content .timeline-date .date { font-size: 9.3pt; color: #6b7280; }
.resume-content .timeline-date .org { font-size: 8.3pt; color: #9ca3af; }
.resume-content .timeline-content .title {
  font-size: 9.8pt;
  font-weight: 700;
  color: #1a2940;
  line-height: 1.3;
}
`

const html = `
<div class="header">
  <h1><span class="name-gray">Minsu</span><span class="name-blue">Cha</span></h1>
  <div class="positioning">직접 운영하며 만난 병목을 비용과 안전성을 통제할 수 있는 자동화로 해결하고, 그 해결이 남긴 다음 질문을 따라가며 성장하는 백엔드 개발자가 되겠습니다</div>
</div>

<section>
  <h2>Tech Stack</h2>
  <div class="tech-stack">
    <div class="label primary">Backend</div>
    <div class="items">Java, Spring Boot, JPA/Hibernate, Python, FastAPI</div>

    <div class="label">Database</div>
    <div class="items">MySQL, MongoDB, Redis</div>

    <div class="label">Cloud &amp; Infra</div>
    <div class="items">AWS (S3, EC2, RDS), GCP, Docker, Kubernetes, Terraform</div>

    <div class="label">Observability</div>
    <div class="items">Prometheus, Grafana, OpenTelemetry</div>
  </div>
</section>

<section>
  <h2>Projects &amp; Experience</h2>

  <div class="project">
    <div class="project-header">
      <div class="project-title-wrap">
        <span class="project-title">바이트픽 (실서비스 운영, 30개 점주)</span>
        <span class="project-meta">2025.11 – 현재 · 9개월+</span>
      </div>
      <a class="project-link" href="https://github.com/Bite-Pick/bitepick-back">GitHub: Bite-Pick/bitepick-back</a>
    </div>
    <div class="project-stack">Spring Boot · AWS (S3, ECR, EC2, RDS) · Prometheus · Grafana · Blue-Green 배포 · 헥사고날 아키텍처 · JaCoCo · SpotBugs</div>

    <div class="project-category">주요 성과</div>
    <ul>
      <li><b>앱스토어 다운로드 순위 163위 달성 —</b> 30개 점주 실서비스 운영 중인 B2B 외식업 플랫폼의 Backend를 책임지고 개발</li>
      <li><b>Admin 페이지 단독 설계·개발:</b> 영업팀 미팅에서 점주 요구사항 직접 청취 &rarr; 매장·상품 조회·통계 기능 구현 &rarr; 운영 문의 감소</li>
      <li><b>S3 PreSigned URL 업로드 플로우 설계:</b> 이미지 업로드를 클라이언트 직접 전송 방식으로 전환 &rarr; 서버 부하 감소</li>
      <li><b>정적 분석 도구(JaCoCo, SpotBugs) 도입 및 품질 개선:</b> SpotBugs High/Medium 이슈 전체 해소(EI/EI2 false positive 일괄 제외 필터 적용 포함), 신규/보강 단위·통합 테스트로 Branch 커버리지 19% &rarr; 40.2%, Line 커버리지 37% &rarr; 58%로 개선(각 +21%p)</li>
    </ul>

    <div class="project-category">트러블슈팅</div>
    <ul class="ts-list">
      <li><b>PortOne SDK V1/V2 마이그레이션:</b> 결제 SDK 버전 충돌 발생 <span class="arrow">&rarr;</span> 버전별 재현 테스트로 SDK 내부 구조 문제 직접 특정 <span class="arrow">&rarr;</span> <span class="result">프론트 마이그레이션 가이드 작성 및 협업 주도로 결제 흐름 안정화</span></li>
      <li><b>FCM APNs Race Condition 대응:</b> 알림 중복·누락 재현 <span class="arrow">&rarr;</span> 로그 분석으로 토큰 등록 타이밍 이슈 특정 <span class="arrow">&rarr;</span> <span class="result">retry loop + 중복 방지 로직 설계로 재현 이슈 현저히 감소</span></li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title-wrap">
        <span class="project-title">인프라 자동화 / CI·CD 파이프라인 구축</span>
        <span class="project-meta">2024 – 2025</span>
      </div>
      <a class="project-link" href="https://github.com/Minsu4302/DevOps_Infra">GitHub: DevOps_Infra</a>
    </div>
    <div class="project-stack">Terraform · Ansible · Kubernetes (Kubeadm, MetalLB, Calico) · Jenkins · GitLab · CloudStack</div>

    <div class="project-category">주요 성과 &amp; 트러블슈팅</div>
    <ul>
      <li>이미지 빌드·푸시, 매니페스트 적용, 롤링 확인까지 이어지는 배포 과정을 사람이 순서대로 수동 수행하다 보니 배포 시간이 오래 걸리고 실수가 반복됐습니다. 인프라 전체를 코드화하고, 사람 개입 없이 끝까지 도는 배포 파이프라인으로 전환했습니다.</li>
      <li><b>인프라 코드화:</b> Terraform으로 VM·네트워크 프로비저닝, Ansible로 Kubernetes 클러스터 구성 자동화 (MetalLB, Calico)</li>
      <li><b>CI/CD 파이프라인 구축:</b> GitLab Webhook → Jenkins → Docker Registry → K8s 롤링 배포까지 end-to-end 자동화</li>
      <li><b>GitLab Webhook 3단계 연쇄 장애 대응:</b> 내부 URL 차단·Egress 차단·CSRF 순차 발생으로 빌드 트리거 전체 실패 → 단계별 원인 특정 후 전부 해결</li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title-wrap">
        <span class="project-title">LLM 기반 자동 모니터링 시스템</span>
        <span class="project-meta">2025 · 실서비스 연동 완료</span>
      </div>
      <a class="project-link" href="https://github.com/Minsu4302/Auto-Logging-Monitoring-By-LLM">GitHub: Auto-Logging-Monitoring-By-LLM</a>
    </div>
    <div class="project-stack">FastAPI · SSE · Redis · Prometheus · Grafana · Elasticsearch · OTel Collector · Langfuse · React</div>

    <div class="project-category">주요 성과 &amp; 트러블슈팅</div>
    <ul>
      <li>바이트픽을 운영하며 겪었던 수동 모니터링의 병목을 없애고 싶었습니다. 자연어 챗봇 하나로 모니터링 추가, 알림 규칙 생성, 대시보드 생성, 로그 검색까지 처리하도록 만들었습니다.</li>
      <li><b>안전한 자동화 설계:</b> 자연어 요청을 Intent로 분류하고 화이트리스트로 검증한 뒤에만 실행하도록 만들어, 임의의 Shell 명령은 차단하고 허용된 7개 액션만 수행하게 했습니다.</li>
      <li><b>실서비스 연동 완료:</b> 운영 중인 Spring Boot 서비스에 OTel Java Agent 연동, SSE 스트리밍 + Grafana 임베드로 단일 UI 구현</li>
      <li><b>LLM 환각 대응:</b> LLM이 생성한 PromQL 오류로 대시보드 오작동 위험 발생 → Prometheus API로 자동 검증·보정하는 파이프라인 추가로 구조적 차단</li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title-wrap">
        <span class="project-title">하네스 엔지니어링 + AI Orchestration</span>
        <span class="project-meta">2025 · GCP 배포 완료</span>
      </div>
      <a class="project-link" href="https://github.com/Minsu4302/Harness_Infra">GitHub: Harness_Infra</a>
    </div>
    <div class="project-stack">Shell · Spring Boot · Java 21 · GCP · GitHub Actions · Docker · Claude / Gemini / GPT</div>

    <div class="project-category">주요 성과 &amp; 트러블슈팅</div>
    <ul>
      <li>LLM 모니터링 시스템을 직접 만들면서, 정작 AI 에이전트 자신의 컨텍스트 관리와 토큰 비용, 품질 검증은 여전히 사람 손에 의존한다는 걸 깨달았습니다. 이 문제를 Harness(로컬)와 Orchestration(PR 자동 게이트) 두 레이어로 나눠 해결했습니다.</li>
      <li><b>Orchestration:</b> PR 오픈 시 GitHub Actions → GCP 서비스가 diff 분석 후 review/security/test-gen 에이전트 병렬 실행, 멀티모델 라우팅</li>
      <li><b>Harness:</b> Skeleton-of-Thought 기법으로 <b>CoT 출력 토큰 -75%</b>, 5턴 세션 기준 누적 토큰 소모 약 <b>-43%</b>, MMR 재랭킹으로 RAG 검색 비용 절감, 세션 이력 압축 <b>-98%</b></li>
      <li><b>자기 수정 루프 설계:</b> 검증 실패 시 실패 컨텍스트 재주입 후 최대 3회 재시도, 초과 시 태스크 분할 강제로 무한 루프 차단(PEV·C10), 세션 종료 후 Reflection Agent가 인사이트를 다음 세션에 자동 주입</li>
      <li>병렬 실행 중에는 여러 에이전트가 동시에 PR에 의견을 내면서 결과가 서로 충돌하는 문제가 생겼습니다. CompletableFuture로 타임아웃을 걸어 멈춘 에이전트를 정리하고, 충돌이 나면 Claude에게 판단을 다시 맡기는 방식으로 자동 해결되게 만들었습니다.</li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title-wrap">
        <span class="project-title">TaskScope — AI Agentic Task Tracer for Multi-Agent Systems</span>
        <span class="project-meta">2026</span>
      </div>
      <a class="project-link" href="https://github.com/Minsu4302/taskscope">GitHub: taskscope</a>
    </div>
    <div class="project-stack">Java 21 · Spring Boot 3.x · RabbitMQ · OpenTelemetry · Jaeger · Prometheus · Grafana · Claude API (Haiku/Sonnet)</div>

    <div class="project-category">주요 성과 &amp; 트러블슈팅</div>
    <ul>
      <li><b>Trace propagation 100% 달성:</b> 하네스로 비용은 줄였지만 어디서 왜 발생하는지 추적할 수 없다는 가시성 단절을 풀기 위해 멀티 에이전트 task 단위 추적 시스템을 설계했습니다. RabbitMQConfig의 observationEnabled 설정 누락으로 traceparent가 끊기던 원인을 잡아, dispatcher부터 LLM 호출까지 19개 span을 단일 trace로 귀속시켜 추적률을 100%까지 끌어올렸습니다.</li>
      <li><b>Prometheus 기반 비용 가드레일 + 한계 정직하게 측정:</b> 평균 비용이 임계값을 넘으면 premium(Sonnet)→standard(Haiku) 자동 강등(건당 $0.0528→$0.0167, 3.2배 절감), 단 ground truth 비교 시 standard가 설정 누락성 결함을 일관되게 놓치는 한계를 식별</li>
      <li><b>lazy regex 오진 대응:</b> maxTokens 초과로 추정했으나 4096으로 올려도 재현 → lazy 정규식이 응답 내부 코드블록에서 조기 종료되는 게 진짜 원인으로 특정, greedy 정규식 교체로 재시도 4회→1회(-75%), 건당 비용 -83%</li>
    </ul>
  </div>
</section>

<section>
  <h2>Education &amp; Certifications</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-date">
        <div class="date">2026.08.20</div>
        <div class="org">단국대학교</div>
      </div>
      <div class="timeline-content">
        <div class="title">컴퓨터공학과 졸업 예정 (3학년 편입, 학과 차석)</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">
        <div class="date">2026.06.12</div>
        <div class="org">한국산업인력공단</div>
      </div>
      <div class="timeline-content">
        <div class="title">정보처리기사 취득</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">
        <div class="date">2026.06.12</div>
        <div class="org">OPIc (ACTFL)</div>
      </div>
      <div class="timeline-content">
        <div class="title">오픽 IH 취득</div>
      </div>
    </div>
  </div>
</section>

<section style="page-break-inside: avoid;">
  <h2>Contact</h2>
  <div class="contact-grid">
    <div class="contact-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <div>
        <div class="label">Phone</div>
        <div class="value">010-8798-4302</div>
      </div>
    </div>
    <div class="contact-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
      <div>
        <div class="label">E-MAIL</div>
        <div class="value"><a href="mailto:gkdltpa9987@gmail.com">gkdltpa9987@gmail.com</a></div>
      </div>
    </div>
    <div class="contact-card">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
      <div>
        <div class="label">GitHub</div>
        <div class="value"><a href="https://github.com/Minsu4302">github.com/Minsu4302</a></div>
      </div>
    </div>
    <div class="contact-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      <div>
        <div class="label">Portfolio</div>
        <div class="value"><a href="https://portfolio-olive-chi-5y8wahaumf.vercel.app/">portfolio-olive-chi-5y8wahaumf.vercel.app</a></div>
      </div>
    </div>
  </div>
</section>
`

export default function ResumePage() {
  return (
    <>
      <style>{css}</style>
      <Nav />
      <div className="resume-shell min-h-screen bg-gray-50 py-8">
        <div className="max-w-[860px] mx-auto px-4">
          <div className="print-actions flex justify-end mb-4">
            <PrintButton />
          </div>
          <div
            className="resume-wrapper resume-content bg-white shadow-sm border border-gray-200 rounded-xl"
            style={{ padding: '14mm 16mm' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}

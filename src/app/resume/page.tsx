import Nav from '@/components/Nav'
import type { Metadata } from 'next'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: '이력서 — 차민수',
  description: '병목을 발견하고 직접 제거하는 백엔드 개발자 차민수의 이력서',
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
  font-size: 9.5pt;
  line-height: 1.5;
}

.resume-content .header {
  border-bottom: 2.5px solid #1a2940;
  padding-bottom: 8px;
  margin-bottom: 14px;
}
.resume-content .header .name-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}
.resume-content .header h1 {
  font-size: 24pt;
  font-weight: 800;
  color: #1a2940;
  letter-spacing: -0.5px;
}
.resume-content .header .contact {
  font-size: 9pt;
  color: #4b5563;
  text-align: right;
  line-height: 1.6;
}
.resume-content .header .positioning {
  margin-top: 8px;
  font-size: 11pt;
  color: #2563a8;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.resume-content section { margin-bottom: 14px; }

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
  grid-template-columns: 130px 1fr;
  row-gap: 5px;
  column-gap: 12px;
  font-size: 9.5pt;
}
.resume-content .tech-stack .label { font-weight: 700; color: #1a2940; }
.resume-content .tech-stack .label.primary { color: #2563a8; }
.resume-content .tech-stack .items { color: #374151; }

.resume-content .project { margin-bottom: 13px; page-break-inside: avoid; }
.resume-content .project:last-child { margin-bottom: 0; }

.resume-content .project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 3px;
}
.resume-content .project-title { font-size: 10.5pt; font-weight: 700; color: #2563a8; }
.resume-content .project-title .role {
  font-weight: 500;
  color: #6b7280;
  font-size: 9pt;
  margin-left: 6px;
}
.resume-content .project-meta { font-size: 9pt; color: #6b7280; font-style: italic; }
.resume-content .project-stack { font-size: 8.8pt; color: #4b5563; margin-bottom: 5px; }

.resume-content .project ul { list-style: none; padding-left: 0; }
.resume-content .project ul li {
  position: relative;
  padding-left: 12px;
  margin-bottom: 3px;
  font-size: 9.3pt;
  line-height: 1.5;
}
.resume-content .project ul li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #2563a8;
  font-size: 8pt;
  top: 2px;
}
.resume-content .project ul li b { color: #1a2940; font-weight: 700; }
.resume-content .project ul li ul { margin-top: 2px; margin-bottom: 2px; }
.resume-content .project ul li ul li {
  padding-left: 11px;
  margin-bottom: 1px;
  font-size: 9pt;
  line-height: 1.45;
  color: #374151;
}
.resume-content .project ul li ul li::before {
  content: "·";
  color: #9ca3af;
  font-size: 11pt;
  top: -2px;
}

.resume-content .project-category {
  font-size: 8.3pt;
  font-weight: 700;
  color: #2563a8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-left: 2.5px solid #2563a8;
  padding-left: 6px;
  margin-top: 7px;
  margin-bottom: 4px;
}

.resume-content .item-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 9.5pt;
  margin-bottom: 3px;
}
.resume-content .item-line .left { color: #1f2937; }
.resume-content .item-line .left b { color: #1a2940; font-weight: 700; }
.resume-content .item-line .right { color: #6b7280; font-size: 9pt; }

.resume-content code {
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 8.5pt;
  background: #f3f4f6;
  border-radius: 2px;
  padding: 0 3px;
}
`

const html = `
<div class="header">
  <div class="name-row">
    <h1>차민수</h1>
    <div class="contact">
      010-8798-4302 &nbsp;·&nbsp; gkdltpa9987@gmail.com<br>
      GitHub: https://github.com/Minsu4302
    </div>
  </div>
  <div class="positioning">병목을 발견하고 직접 제거하는 백엔드 개발자</div>
</div>

<section>
  <h2>Tech Stack</h2>
  <div class="tech-stack">
    <div class="label primary">Backend</div>
    <div class="items">Java, Spring Boot, Spring Security, JPA/Hibernate, Python, FastAPI, Shell</div>

    <div class="label">Database</div>
    <div class="items">MySQL, MongoDB, Redis, Ceph</div>

    <div class="label">Messaging</div>
    <div class="items">RabbitMQ, gRPC, WebSocket, SSE</div>

    <div class="label">Observability</div>
    <div class="items">Prometheus, Grafana, Elasticsearch, OpenTelemetry, Alertmanager, Langfuse</div>

    <div class="label">Cloud &amp; Infra</div>
    <div class="items">AWS (S3, ECR, EC2, RDS), GCP, Docker, Kubernetes (Kubeadm, MetalLB, Calico), Terraform, Ansible, Jenkins, GitLab CI/CD</div>
  </div>
</section>

<section>
  <h2>Projects &amp; Experience</h2>

  <div class="project">
    <div class="project-header">
      <div class="project-title">바이트픽 (실서비스 운영, 30개 점주)<span class="role">· Backend 단독 담당</span></div>
      <div class="project-meta">2025.11 – 현재 · 6개월+</div>
    </div>
    <div class="project-stack">Spring Boot · AWS (S3, ECR, EC2, RDS) · Prometheus · Grafana · Blue-Green 배포 · 헥사고날 아키텍처</div>

    <div class="project-category">주요 성과</div>
    <ul>
      <li><b>앱스토어 다운로드 순위 163위 달성 —</b> 30개 점주 실서비스 운영 중인 B2B 외식업 플랫폼, Backend 전체를 단독으로 담당</li>
      <li><b>Admin 페이지 단독 설계·개발:</b> 영업팀 정기 미팅에서 점주 요구사항 직접 청취 &rarr; 매장·상품 정보 수정·전체 조회·통계 기능 단독 설계·구현 &rarr; 운영 문의 감소 및 처리 시간 단축</li>
      <li><b>S3 PreSigned URL 업로드 플로우 설계:</b> 매장·상품 이미지를 서버 경유 없이 클라이언트 직접 업로드 방식으로 전환 &rarr; 서버 부하 감소 및 업로드 API 명세 프론트 공유 완료</li>
      <li><b>모니터링 운영의 구조적 병목 직접 경험 &rarr;</b> Prometheus·Grafana 운영 중 알림 분석·규칙 추가·대시보드 관리 등 핵심 액션이 모두 사람을 거쳐야 하는 한계를 인식. LLM 기반 자동 모니터링 시스템 개발의 직접적 출발점</li>
    </ul>

    <div class="project-category">트러블슈팅</div>
    <ul>
      <li>
        <b>PortOne SDK V1/V2 마이그레이션:</b> 결제 흐름에서 SDK 버전 충돌 발생, 프론트 단독 해결 불가 상황
        <ul>
          <li>SDK 내부 동작 분석으로 충돌 지점 직접 특정</li>
          <li>프론트 마이그레이션 가이드 작성 및 협업 주도</li>
          <li>결제 흐름 안정화 및 배포 완료, 프론트 연동 작업 간소화</li>
        </ul>
      </li>
      <li>
        <b>FCM APNs Race Condition 대응:</b> 알림 중복·누락 재현 이슈 발생, 로그상 타이밍 의존적 패턴 포착
        <ul>
          <li>로그 분석으로 APNs 토큰 등록 타이밍 이슈 특정</li>
          <li>retry loop + SharedPreferences 중복 방지 로직 설계</li>
          <li>재현 이슈 현저히 감소, 알림 타입별(STORE_OPEN, ORDER 등) 분기 처리 안정화</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title">LLM 기반 자동 모니터링 시스템<span class="role">· 개인 프로젝트</span></div>
      <div class="project-meta">2025 · 실서비스 연동 완료</div>
    </div>
    <div class="project-stack">FastAPI · SSE · ARQ + Redis · Prometheus · Grafana · Elasticsearch · Alertmanager · OTel Collector · Langfuse · React + TypeScript</div>
    <ul>
      <li><b>문제 정의:</b> 바이트픽 실무에서 직접 경험한 수동 모니터링 병목을 구조적으로 제거. 자연어 챗봇 인터페이스 하나로 모니터링 대상 추가·알림 규칙 생성·대시보드 생성·편집·로그 검색까지 전체 운영 액션을 처리하는 시스템 설계·구현</li>
      <li><b>안전한 자동화 설계:</b> 자연어 &rarr; Intent 분류 &rarr; 화이트리스트 검증 &rarr; 실행 파이프라인 구현. 임의 Shell 실행을 구조적으로 차단하고 허용된 7개 액션(모니터링 추가, 알림 규칙 생성, 대시보드 임포트·편집, 로그 검색, 알림 요약, 상태 조회)만 실행</li>
      <li><b>LLM 환각 대응:</b> 대시보드 패널 추가·삭제 시 LLM이 생성한 PromQL을 Prometheus API로 자동 검증·보정 후 반영. 잘못된 쿼리가 운영 대시보드에 적용되는 문제 구조적 차단</li>
      <li><b>Provider Agnostic 구조:</b> LLM 제공자를 OpenAI(gpt-4o-mini) / Anthropic(claude-sonnet-4) / Ollama(llama3) 간 코드 변경 없이 교체 가능한 추상화 레이어 설계. Semantic Cache로 동일 의도 재질의 시 LLM 호출 비용 제거</li>
      <li><b>실서비스 연동 완료:</b> 운영 중인 Spring Boot 서비스(magambell-dev)에 OTel Java Agent v2.27.0 연동, EC2 호스트 메트릭까지 수집. SSE 스트리밍 + Grafana iframe 임베드로 챗봇·대시보드 단일 UI 구현</li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title">하네스 엔지니어링 + AI Orchestration<span class="role">· 개인 프로젝트</span></div>
      <div class="project-meta">2025 · GCP 배포 완료</div>
    </div>
    <div class="project-stack">Shell · Spring Boot · Java 21 · GCP · GitHub Actions · Docker · Claude / Gemini / GPT · RAG · CoT</div>
    <ul>
      <li><b>문제 정의:</b> AI 에이전트 개발 과정에서 컨텍스트 관리·토큰 비용·코드 품질 검증이 모두 개발자 수동 작업에 의존, 반복적 병목 발생. 로컬 실행 환경(Harness)과 PR 기반 자동 게이트(Orchestration) 두 레이어로 구조적 해결</li>
      <li><b>2레이어 구조 설계:</b> AI 에이전트 실행 환경 전체를 직접 설계. Harness(로컬 컨텍스트 제어 인프라)와 Orchestration(GCP 기반 AI 게이트 서비스) 두 레이어로 구성하여 개발 흐름 전 단계를 자동화</li>
      <li>
        <b>Orchestration (GCP 배포 완료):</b> PR 오픈 시 GitHub Actions 트리거 &rarr; GCP Spring Boot 서비스가 PR diff 분석 &rarr; 필요한 에이전트만 동적 선택 후 병렬 실행
        <ul>
          <li>review / security / test-gen 3개 에이전트 + 게이트 구조, CompletableFuture 병렬 실행 + 120s 타임아웃 가드</li>
          <li>멀티모델 라우팅: Claude Sonnet 4.6 / Gemini 1.5 Flash / GPT-4o-mini 역할별 동적 배분</li>
          <li>충돌 발생 시 Claude 재위임으로 자동 Conflict Resolution, PR Comment UI(&lt;details&gt; 토글) 자동 생성</li>
          <li>Docker 멀티스테이지 빌드 + GCP e2-micro + GitHub Actions CI/CD, <b>운영 비용 $0/월</b>(GCP Always Free)</li>
        </ul>
      </li>
      <li>
        <b>Harness (로컬 컨텍스트 제어):</b> AI 에이전트 세션의 토큰 비용·품질을 쉘 스크립트 레벨에서 제어
        <ul>
          <li>Skeleton-of-Thought(SoT) + complexity 분기로 <b>CoT 출력 토큰 -75%</b>, 5턴 누적 <b>10,600 &rarr; 5,940 tokens (-43%)</b></li>
          <li>MMR 재랭킹(λ=0.5) + cksum 캐시로 RAG 검색 품질·재검색 비용 동시 해결, 문서 사전 압축 <b>-41%</b></li>
          <li>세션 버퍼 자동 압축으로 10개 세션 이력 참조 비용 <b>600줄 &rarr; 9줄 (-98%)</b></li>
          <li>C01~C09 린터 9개를 커밋·CI에서 자동 차단, <b>제약 자동화율 89%</b></li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title">인프라 자동화 / CI·CD 파이프라인 구축<span class="role">· 개인 프로젝트</span></div>
      <div class="project-meta">2024 – 2025</div>
    </div>
    <div class="project-stack">Terraform · Ansible · Kubernetes (Kubeadm, MetalLB, Calico) · Jenkins · GitLab · Docker Registry · CloudStack</div>
    <ul>
      <li><b>문제 정의:</b> 수동 빌드·배포 흐름(이미지 빌드/푸시 &rarr; 매니페스트 적용 &rarr; 롤링 확인)을 사람이 순차로 수행, 배포 시간 과다 및 휴먼 에러 반복 발생</li>
      <li><b>인프라 코드화:</b> Terraform으로 VM·네트워크·NAT 프로비저닝, Ansible Role 기반으로 Kubernetes(Kubeadm) 클러스터 구성 자동화 — MetalLB로 베어메탈 LoadBalancer 구현, Calico로 네트워크 정책 적용</li>
      <li><b>CI/CD 파이프라인 구축:</b> GitLab Webhook &rarr; Jenkins &rarr; Docker Registry &rarr; Kubernetes 롤링 배포까지 end-to-end 자동화, 커밋 푸시 한 번으로 빌드·이미지 푸시·배포 전 단계 무인 실행</li>
      <li>
        <b>GitLab OOMKilled &rarr; 인프라 재설계:</b> GitLab CE를 1C/2G 워커 노드에 배치하자 OOMKilled 반복 발생
        <ul>
          <li>GitLab CE 최소 요구사항(4C/4G 이상) 미충족이 원인으로 특정</li>
          <li>GitLab 전용 노드(4C/8G) 분리 생성, Deployment에 nodeSelector 적용으로 Pod 고정</li>
          <li>리소스 requests/limits 명시, 불필요한 Omnibus 내장 모니터링 비활성화로 메모리 절감</li>
        </ul>
      </li>
      <li>
        <b>MetalLB CRD 타이밍 이슈:</b> IPAddressPool 적용 시 "failed calling webhook" 오류로 CRD 생성 실패
        <ul>
          <li>MetalLB controller가 Available 상태가 되기 전 CRD 적용 시도가 원인으로 특정</li>
          <li>Ansible task에 <code>kubectl wait --for=condition=Available</code> 대기 로직 추가로 타이밍 제어</li>
        </ul>
      </li>
      <li>
        <b>GitLab Webhook 다단계 디버깅:</b> GitLab &rarr; Jenkins 자동 빌드 트리거 연동 과정에서 3단계 연쇄 장애 발생
        <ul>
          <li>내부 URL 차단(GitLab 보안 정책) &rarr; ngrok으로 Jenkins 외부 노출 우회</li>
          <li>ngrok 요청 실패 &rarr; 원인이 DNS·라우팅이 아닌 CloudStack Egress Rule 기본값 전체 차단(L3)임을 특정, Egress 허용으로 해결</li>
          <li>Jenkins CSRF 보호로 인한 403 &rarr; Script Console에서 crumb 비활성화, Webhook 트리거 정상화</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="project">
    <div class="project-header">
      <div class="project-title">ERP 마이크로서비스 시스템<span class="role">· 개인 프로젝트</span></div>
      <div class="project-meta">2024</div>
    </div>
    <div class="project-stack">FastAPI · gRPC · RabbitMQ · WebSocket · Kubernetes · MongoDB · MySQL</div>
    <ul>
      <li><b>문제 정의:</b> 마이크로서비스 간 통신(gRPC·RabbitMQ)·비동기 처리·분산 배포를 직접 설계·구현하며 실무 수준의 분산 시스템 복잡성을 경험하는 것이 목표. 구현 과정에서 다수의 기술적 충돌과 배포 이슈를 직접 해결</li>
      <li>
        <b>FastAPI + gRPC 동시 실행 충돌 해결:</b> uvicorn --reload reloader 프로세스와 gRPC 스레드 충돌로 gRPC 서버가 시작되지 않는 문제
        <ul>
          <li>원인을 event loop와 reloader 프로세스 간 충돌로 특정</li>
          <li>asyncio executor 기반 백그라운드 실행으로 1차 해결</li>
          <li>구조적 한계 판단 후 RabbitMQ 메시지 브로커로 전환, gRPC 의존성 제거 및 배포 복잡도 감소</li>
        </ul>
      </li>
      <li>
        <b>마이크로서비스 간 콜백 URL 불일치 디버깅:</b> APIRouter prefix + 상대 경로 조합 미고려로 결재 처리 콜백이 404 반환, 다단계 결재 흐름 전체 실패
        <ul>
          <li>실제 등록 경로(/approvals/internal/result) vs 호출 경로(/internal/approvals/result) 불일치 특정</li>
          <li>K8s 내부 DNS 및 Service 엔드포인트 전수 검증 후 수정</li>
          <li>서비스 간 통신 정상화, 다단계 결재 프로세스 완성</li>
        </ul>
      </li>
      <li><b>MongoDB datetime 직렬화 문제:</b> 연차 신청 API에서 Python datetime.date 타입이 PyMongo bson 인코더와 비호환, 500 에러 발생. jsonable_encoder + 재귀 정규화 함수로 date &rarr; ISO 문자열 변환 로직 구현하여 해결</li>
      <li><b>K8s 운영 트러블슈팅 다수:</b> 이미지 Pull 정책 오류, Dockerfile 소스 미복사, Ingress Controller 미설치 등 마이크로서비스 배포 과정에서 발생한 다수 이슈 직접 해결</li>
    </ul>
  </div>
</section>

<section>
  <h2>Education &amp; Certifications</h2>
  <div class="item-line">
    <div class="left"><b>단국대학교</b> 컴퓨터공학과 (3학년 편입, <b>학과 차석</b>)</div>
    <div class="right">2026.06 졸업 예정</div>
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

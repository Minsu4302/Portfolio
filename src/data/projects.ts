export interface Stat {
  num: string
  label: string
}

export interface Contribution {
  title: string
  desc: string
}

export interface Troubleshooting {
  title: string
  problem: string
  solution: string
  result: string
}

export interface Project {
  slug: string
  name: string
  role: string
  status: string
  period: string
  duration?: string
  summary: string
  image?: string
  stack: string[]
  stats?: Stat[]
  background: string
  contributions: Contribution[]
  troubleshooting: Troubleshooting[]
  prev: string
  next: string
}

export const projects: Project[] = [
  {
    slug: 'bytepick',
    name: '바이트픽',
    role: '실서비스',
    status: '운영 중',
    period: '2025.11 – 현재',
    duration: '6개월+',
    summary: '앱스토어 163위 달성 B2B 외식업 플랫폼. Backend 단독 담당.',
    image: '/icons/bytepick.svg',
    stack: ['Spring Boot', 'AWS (S3, ECR, EC2, RDS)', 'Prometheus', 'Grafana', 'Blue-Green 배포', '헥사고날 아키텍처'],
    stats: [
      { num: '163위', label: '앱스토어\n다운로드 순위' },
      { num: '30개', label: '운영 중인\n점주 수' },
      { num: '6mo+', label: '실서비스\n운영 기간' },
      { num: '단독', label: 'Backend\n담당 체제' },
    ],
    background: `Prometheus·Grafana 기반 모니터링을 운영하며 알림 분석·규칙 추가·대시보드 관리 등 핵심 액션이 모두 사람을 거쳐야 한다는 구조적 한계를 직접 경험했습니다. 결제 흐름의 SDK 버전 충돌, FCM 알림의 타이밍 의존적 Race Condition, 운영팀의 반복적인 Admin 업무 요청 등 사람이 병목이 되는 구간을 직접 발견하고 제거하는 경험을 쌓았습니다. 이 경험이 LLM 기반 자동 모니터링 시스템 개발의 출발점이 됩니다.`,
    contributions: [
      { title: 'Admin 페이지 단독 설계·개발', desc: '영업팀 정기 미팅에서 점주 요구사항을 직접 청취해 매장·상품 정보 수정, 전체 조회, 통계 기능 설계. 운영 문의 감소 및 처리 시간 단축.' },
      { title: 'S3 PreSigned URL 업로드 설계', desc: '매장·상품 이미지를 서버 경유 없이 클라이언트 직접 업로드 방식으로 전환. 서버 부하 감소 및 API 명세 프론트 공유 완료.' },
      { title: '모니터링 운영 구조적 병목 인식', desc: 'Prometheus·Grafana 운영 중 모든 핵심 액션이 사람을 거쳐야 하는 한계를 직접 경험. LLM 기반 자동화 시스템 개발의 출발점.' },
      { title: 'Blue-Green 배포 운영', desc: 'AWS ECR + EC2 기반 Blue-Green 배포 파이프라인 운영. 무중단 배포로 서비스 안정성 확보.' },
    ],
    troubleshooting: [
      {
        title: 'PortOne SDK V1/V2 마이그레이션',
        problem: '결제 흐름에서 SDK 버전 충돌 발생. 프론트 단독 해결 불가 상황',
        solution: 'SDK 내부 동작 분석으로 충돌 지점 직접 특정. 프론트 마이그레이션 가이드 작성 및 협업 주도',
        result: '결제 흐름 안정화 및 배포 완료. 프론트 연동 작업 간소화',
      },
      {
        title: 'FCM APNs Race Condition 대응',
        problem: '알림 중복·누락 재현 이슈. 로그상 타이밍 의존적 패턴 포착',
        solution: 'APNs 토큰 등록 타이밍 이슈 특정. retry loop + SharedPreferences 중복 방지 로직 설계',
        result: '재현 이슈 현저히 감소. 알림 타입별(STORE_OPEN, ORDER 등) 분기 처리 안정화',
      },
    ],
    prev: 'erp',
    next: 'llm-monitoring',
  },
  {
    slug: 'llm-monitoring',
    name: 'LLM 기반 자동 모니터링 시스템',
    role: '개인 프로젝트',
    status: '실서비스 연동',
    period: '2025',
    summary: '자연어 챗봇 하나로 모니터링 운영 액션 전체를 처리하는 시스템.',
    image: '/icons/llm-monitoring.svg',
    stack: ['FastAPI', 'SSE', 'ARQ + Redis', 'Prometheus', 'Grafana', 'Elasticsearch', 'Alertmanager', 'OTel Collector', 'Langfuse', 'React + TypeScript'],
    background: `바이트픽 실무에서 직접 경험한 수동 모니터링 병목을 구조적으로 제거. 자연어 챗봇 인터페이스 하나로 모니터링 대상 추가·알림 규칙 생성·대시보드 생성·편집·로그 검색까지 전체 운영 액션을 처리하는 시스템을 설계·구현했습니다.`,
    contributions: [
      { title: '화이트리스트 7개 액션 기반 안전한 자동화', desc: '자연어 → Intent 분류 → 화이트리스트 검증 → 실행 파이프라인. 임의 Shell 실행 차단. 허용 액션: 모니터링 추가, 알림 규칙 생성, 대시보드 임포트·편집, 로그 검색, 알림 요약, 상태 조회.' },
      { title: 'PromQL 자동 검증·보정 (LLM 환각 대응)', desc: '대시보드 패널 추가·삭제 시 LLM이 생성한 PromQL을 Prometheus API로 자동 검증·보정 후 반영. 잘못된 쿼리가 운영 대시보드에 적용되는 문제 구조적 차단.' },
      { title: 'Provider Agnostic 구조', desc: 'OpenAI(gpt-4o-mini) / Anthropic(claude-sonnet-4) / Ollama(llama3) 간 코드 변경 없이 교체 가능한 추상화 레이어. Semantic Cache로 동일 의도 재질의 시 LLM 호출 비용 제거.' },
      { title: '실서비스 연동 완료', desc: '운영 중인 Spring Boot 서비스(magambell-dev)에 OTel Java Agent v2.27.0 연동, EC2 호스트 메트릭까지 수집. SSE 스트리밍 + Grafana iframe 임베드로 챗봇·대시보드 단일 UI 구현.' },
    ],
    troubleshooting: [],
    prev: 'bytepick',
    next: 'harness',
  },
  {
    slug: 'harness',
    name: '하네스 엔지니어링 + AI Orchestration',
    role: '개인 프로젝트',
    status: 'GCP 배포 완료',
    period: '2025',
    summary: 'AI 에이전트 실행 환경 전체를 설계한 2레이어 인프라.',
    image: '/icons/harness.svg',
    stack: ['Shell', 'Spring Boot', 'Java 21', 'GCP', 'GitHub Actions', 'Docker', 'Claude Sonnet 4.6', 'Gemini 1.5 Flash', 'GPT-4o-mini', 'RAG', 'CoT'],
    background: `AI 에이전트 개발 과정에서 컨텍스트 관리·토큰 비용·코드 품질 검증이 모두 개발자 수동 작업에 의존, 반복적 병목 발생. Harness(로컬 컨텍스트 제어)와 Orchestration(GCP 기반 AI 게이트) 두 레이어로 구조적 해결.`,
    contributions: [
      { title: 'Orchestration — GCP 배포 완료', desc: 'PR 오픈 시 GitHub Actions 트리거 → GCP Spring Boot가 PR diff 분석 → review/security/test-gen 3개 에이전트 동적 선택 후 CompletableFuture 병렬 실행. 운영 비용 $0/월 (GCP Always Free).' },
      { title: '멀티모델 라우팅 + Conflict Resolution', desc: 'Claude Sonnet 4.6 / Gemini 1.5 Flash / GPT-4o-mini 역할별 동적 배분. 충돌 발생 시 Claude 재위임으로 자동 Conflict Resolution. PR Comment UI(<details> 토글) 자동 생성.' },
      { title: 'Harness — 토큰 비용 최적화', desc: 'SoT + complexity 분기로 CoT 출력 토큰 -75%, 5턴 누적 10,600 → 5,940 tokens (-43%). MMR 재랭킹(λ=0.5) + cksum 캐시로 RAG 품질·재검색 비용 동시 해결.' },
      { title: '세션 압축 + 제약 자동화', desc: '세션 버퍼 자동 압축으로 10개 세션 이력 600줄 → 9줄 (-98%). C01~C09 린터 9개를 커밋·CI에서 자동 차단, 제약 자동화율 89%.' },
    ],
    troubleshooting: [],
    prev: 'llm-monitoring',
    next: 'infra',
  },
  {
    slug: 'infra',
    name: '인프라 자동화 / CI·CD 파이프라인 구축',
    role: '개인 프로젝트',
    status: '구축 완료',
    period: '2024 – 2025',
    summary: 'Terraform · Ansible · K8s · Jenkins end-to-end 파이프라인.',
    image: '/icons/infra.svg',
    stack: ['Terraform', 'Ansible', 'Kubernetes (Kubeadm, MetalLB, Calico)', 'Jenkins', 'GitLab', 'Docker Registry', 'CloudStack'],
    background: `수동 빌드·배포 흐름(이미지 빌드/푸시 → 매니페스트 적용 → 롤링 확인)을 사람이 순차로 수행, 배포 시간 과다 및 휴먼 에러 반복 발생. Terraform으로 VM·네트워크·NAT를 코드화하고, GitLab push 한 번으로 빌드→이미지 푸시→K8s 롤링 배포까지 무인 실행하는 파이프라인을 구축했습니다.`,
    contributions: [
      { title: 'IaC 기반 인프라 코드화', desc: 'Terraform으로 VM·네트워크·NAT 프로비저닝, Ansible Role 기반으로 K8s 클러스터 구성 자동화. MetalLB 베어메탈 LoadBalancer, Calico 네트워크 정책 적용.' },
      { title: 'end-to-end CI/CD 파이프라인', desc: 'GitLab Webhook → Jenkins → Docker Registry → K8s 롤링 배포. 커밋 푸시 한 번으로 전 단계 무인 실행.' },
    ],
    troubleshooting: [
      {
        title: 'GitLab OOMKilled → 인프라 재설계',
        problem: 'GitLab CE를 1C/2G 워커 노드에 배치하자 OOMKilled 반복 발생',
        solution: 'GitLab CE 최소 요구사항(4C/4G+) 미충족 원인 특정. 전용 노드(4C/8G) 분리, nodeSelector 적용, Omnibus 내장 모니터링 비활성화로 메모리 절감',
        result: 'GitLab 안정적 운영. 노드별 역할 분리로 전체 클러스터 안정성 확보',
      },
      {
        title: 'MetalLB CRD 타이밍 이슈',
        problem: 'IPAddressPool 적용 시 "failed calling webhook" 오류로 CRD 생성 실패',
        solution: 'controller Available 상태 전 CRD 적용 시도가 원인. Ansible task에 kubectl wait --for=condition=Available 대기 로직 추가',
        result: 'Ansible 재실행 시에도 타이밍 이슈 없이 안정적 CRD 적용',
      },
      {
        title: 'GitLab Webhook 다단계 디버깅',
        problem: '내부 URL 차단(GitLab 보안 정책) → ngrok 우회 → 여전히 실패',
        solution: 'DNS·라우팅 문제가 아닌 CloudStack Egress Rule 기본값 전체 차단(L3)이 원인. Egress 허용 후 Jenkins CSRF 403 → Script Console에서 crumb 비활성화',
        result: 'GitLab push → Jenkins 자동 빌드 트리거 정상 동작. OSI 계층별 디버깅 경험',
      },
    ],
    prev: 'harness',
    next: 'erp',
  },
  {
    slug: 'erp',
    name: 'ERP 마이크로서비스 시스템',
    role: '개인 프로젝트',
    status: '구축 완료',
    period: '2024',
    summary: 'FastAPI · gRPC · RabbitMQ · K8s 기반 분산 시스템.',
    image: '/icons/erp.svg',
    stack: ['FastAPI', 'gRPC', 'RabbitMQ', 'WebSocket', 'Kubernetes', 'MongoDB', 'MySQL'],
    background: `마이크로서비스 간 통신(gRPC·RabbitMQ)·비동기 처리·분산 배포를 직접 설계·구현하며 실무 수준의 분산 시스템 복잡성을 경험하는 것이 목표. 구현 과정에서 다수의 기술적 충돌과 배포 이슈를 직접 해결했습니다.`,
    contributions: [],
    troubleshooting: [
      {
        title: 'FastAPI + gRPC 동시 실행 충돌',
        problem: 'uvicorn --reload reloader 프로세스와 gRPC 스레드 충돌로 gRPC 서버 시작 불가',
        solution: 'event loop와 reloader 프로세스 간 충돌로 원인 특정. asyncio executor 1차 해결 후 구조적 한계 판단, RabbitMQ 메시지 브로커로 전환',
        result: 'gRPC 의존성 제거 및 배포 복잡도 감소. RabbitMQ 기반 비동기 통신 안정화',
      },
      {
        title: '마이크로서비스 간 콜백 URL 불일치',
        problem: 'APIRouter prefix + 상대 경로 조합 미고려로 결재 콜백 404 반환, 다단계 결재 전체 실패',
        solution: '실제 등록 경로 vs 호출 경로 불일치 특정. K8s 내부 DNS 및 Service 엔드포인트 전수 검증 후 수정',
        result: '서비스 간 통신 정상화. 다단계 결재 프로세스 완성',
      },
      {
        title: 'MongoDB datetime 직렬화',
        problem: 'datetime.date 타입이 PyMongo bson 인코더와 비호환, 연차 신청 API 500 에러',
        solution: 'jsonable_encoder + 재귀 정규화 함수로 date → ISO 문자열 변환 로직 구현',
        result: 'MongoDB 저장·조회 정상화',
      },
    ],
    prev: 'infra',
    next: 'bytepick',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const project = getProject(slug)
  if (!project) return { prev: undefined, next: undefined }
  return {
    prev: getProject(project.prev),
    next: getProject(project.next),
  }
}

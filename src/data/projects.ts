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
  github?: string
  website?: string
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
    github: 'https://github.com/Bite-Pick/bitepick-back',
    website: 'https://www.bitepick.co.kr/',
    stack: ['Spring Boot', 'AWS (S3, ECR, EC2, RDS)', 'Prometheus', 'Grafana', 'Blue-Green 배포', '헥사고날 아키텍처'],
    stats: [
      { num: '163위', label: '앱스토어\n다운로드 순위' },
      { num: '30개', label: '운영 중인\n점주 수' },
      { num: '6개월+', label: '실서비스\n운영 기간' },
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
    github: 'https://github.com/Minsu4302/Auto-Logging-Monitoring-By-LLM',
    stack: ['FastAPI', 'SSE', 'ARQ + Redis', 'Prometheus', 'Grafana', 'Elasticsearch', 'Alertmanager', 'OTel Collector', 'Langfuse', 'React + TypeScript'],
    background: `바이트픽 실무에서 직접 경험한 수동 모니터링 병목을 구조적으로 제거. 자연어 챗봇 인터페이스 하나로 모니터링 대상 추가·알림 규칙 생성·대시보드 생성·편집·로그 검색까지 전체 운영 액션을 처리하는 시스템을 설계·구현했습니다.`,
    contributions: [
      { title: '화이트리스트 7개 액션 기반 안전한 자동화', desc: '자연어 → Intent 분류 → 화이트리스트 검증 → 실행 파이프라인. 임의 Shell 실행 차단. 허용 액션: 모니터링 추가, 알림 규칙 생성, 대시보드 임포트·편집, 로그 검색, 알림 요약, 상태 조회.' },
      { title: 'PromQL 자동 검증·보정 (LLM 환각 대응)', desc: '대시보드 패널 추가·삭제 시 LLM이 생성한 PromQL을 Prometheus API로 자동 검증·보정 후 반영. 잘못된 쿼리가 운영 대시보드에 적용되는 문제 구조적 차단.' },
      { title: 'Provider Agnostic 구조', desc: 'OpenAI(gpt-4o-mini) / Anthropic(claude-sonnet-4) / Ollama(llama3) 간 코드 변경 없이 교체 가능한 추상화 레이어. Semantic Cache로 동일 의도 재질의 시 LLM 호출 비용 제거.' },
      { title: '실서비스 연동 완료', desc: '운영 중인 Spring Boot 서비스(magambell-dev)에 OTel Java Agent v2.27.0 연동, EC2 호스트 메트릭까지 수집. SSE 스트리밍 + Grafana iframe 임베드로 챗봇·대시보드 단일 UI 구현.' },
    ],
    troubleshooting: [
      {
        title: 'OTel 로그 필드명 불일치로 검색 0건 반환',
        problem: 'ES 로그 검색이 항상 0건 반환. LLM이 level, service 등 일반 필드명으로 쿼리를 생성했지만 OTel Collector가 저장하는 실제 필드명과 달랐고, 인덱스 패턴도 otel-logs를 포함하지 않았음.',
        solution: '인덱스 패턴을 *logs*로 수정해 otel-logs 포함. Executor에 정규화 매핑 구현: level → SeverityText.keyword, service → Resource.service.name.keyword. service="all" 출력 시 필터 제거하는 예외 처리 추가.',
        result: '로그 검색 정상화. LLM 출력값에 무관하게 OTel 실제 필드명으로 정규화되어 안정 동작.',
      },
      {
        title: 'ngrok gRPC 차단으로 OTel 연동 실패',
        problem: 'EC2 OTel Java Agent → ngrok → 로컬 Collector 연결 실패. Agent 기본값이 gRPC(4317)인데 ngrok 무료 플랜이 gRPC를 차단함. ERR_NGROK_107.',
        solution: 'OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf로 변경해 HTTP/Protobuf(4318)로 전환. EC2 Host OTel Collector도 otlphttp exporter로 통일. ngrok은 HTTP2 기반 gRPC를 차단하지만 OTLP HTTP는 허용.',
        result: '메트릭·트레이스·로그 파이프라인 전체 정상 수집. magambell-dev JVM 및 EC2 호스트 메트릭 Prometheus 연동 완료.',
      },
      {
        title: 'Docker 컨테이너 간 localhost 격리',
        problem: 'FastAPI 컨테이너에서 Redis·Prometheus를 localhost로 접근하자 연결 거부. 컨테이너마다 독립 네트워크 네임스페이스를 가지므로 localhost는 자기 자신만 가리킴.',
        solution: 'docker-compose.yml에서 REDIS_URL=redis://redis:6379, PROMETHEUS_URL=http://prometheus:9090으로 설정해 Docker 내부 DNS 서비스명 사용. _resolve() 함수로 환경변수를 config.yml보다 우선 적용.',
        result: '컨테이너 간 통신 정상화. ARQ Queue, Semantic Cache, Prometheus 메트릭 검증 모두 정상 동작.',
      },
    ],
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
    github: 'https://github.com/Minsu4302/Harness_Infra',
    stack: ['Shell', 'Spring Boot', 'Java 21', 'GCP', 'GitHub Actions', 'Docker', 'Claude Sonnet 4.6', 'Gemini 1.5 Flash', 'GPT-4o-mini', 'RAG', 'CoT'],
    background: `AI 에이전트 개발 과정에서 컨텍스트 관리·토큰 비용·코드 품질 검증이 모두 개발자 수동 작업에 의존, 반복적 병목 발생. Harness(로컬 컨텍스트 제어)와 Orchestration(GCP 기반 AI 게이트) 두 레이어로 구조적 해결.`,
    contributions: [
      { title: 'Orchestration — GCP 배포 완료', desc: 'PR 오픈 시 GitHub Actions 트리거 → GCP Spring Boot가 PR diff 분석 → review/security/test-gen 3개 에이전트 동적 선택 후 CompletableFuture 병렬 실행. 운영 비용 $0/월 (GCP Always Free).' },
      { title: '멀티모델 라우팅 + Conflict Resolution', desc: 'Claude Sonnet 4.6 / Gemini 1.5 Flash / GPT-4o-mini 역할별 동적 배분. 충돌 발생 시 Claude 재위임으로 자동 Conflict Resolution. PR Comment UI(<details> 토글) 자동 생성.' },
      { title: 'Harness — 토큰 비용 최적화', desc: 'SoT + complexity 분기로 CoT 출력 토큰 -75%, 5턴 누적 10,600 → 5,940 tokens (-43%). MMR 재랭킹(λ=0.5) + cksum 캐시로 RAG 품질·재검색 비용 동시 해결.' },
      { title: '세션 압축 + 제약 자동화', desc: '세션 버퍼 자동 압축으로 10개 세션 이력 600줄 → 9줄 (-98%). C01~C09 린터 9개를 커밋·CI에서 자동 차단, 제약 자동화율 89%.' },
    ],
    troubleshooting: [
      {
        title: 'orchestrate.yml curl Connection refused — 원인 3단계 분류',
        problem: 'PR 오픈 시 orchestrate.yml이 GCP로 curl을 보냈지만 Connection refused. 에러 메시지만으로는 원인을 특정할 수 없어 단계적으로 접근 필요.',
        solution: '(1) VM 중지 여부 → Console에서 인스턴스 상태 확인. (2) 방화벽 포트 8080 규칙 누락 여부 → VPC 방화벽 확인. (3) 컨테이너 미실행 → docker ps로 확인. 실제 원인은 secrets.env 소유자 불일치로 Spring Boot가 API 키 없이 시작·즉시 종료.',
        result: 'chown으로 소유자 수정 후 docker compose up 재실행. 이후 VM 재시작 시 외부 IP 변경 문제도 발견해 GCP_INSTANCE_IP Secret 업데이트 절차를 문서화.',
      },
      {
        title: 'GitHub Actions SSH handshake failed — 프라이빗 키 줄바꿈 손실',
        problem: 'GCP_SSH_KEY Secret을 등록했음에도 배포 시 SSH handshake failed 에러. 키가 유효하지 않다는 로그. 키 자체는 정상이나 Secret 등록 시 문제가 있었음.',
        solution: 'cat ~/.ssh/github_actions 결과를 복사할 때 -----BEGIN/END----- 줄 포함 전체를 그대로 붙여넣어야 함. 일부 에디터나 터미널에서 복사 시 줄바꿈이 손실되어 단일 라인으로 붙여넣으면 키 파싱 실패. GitHub Secret 에디터는 멀티라인 지원.',
        result: '줄바꿈 보존 상태로 재등록 후 SSH 접속 정상화. deploy.yml GCP SSH 재배포 파이프라인 완전 동작.',
      },
      {
        title: 'Spring Boot 500 — Jackson 버전 충돌',
        problem: 'orchestrate.yml curl 호출 시 500 에러. docker logs 확인 시 Jackson InvalidDefinitionException. Spring Boot 3.3이 jackson-bom 2.17을 가져오는데 다른 의존성이 2.15를 요구해 역직렬화 실패.',
        solution: 'build.gradle에 ext { set("jackson-bom.version", "2.18.1") } 추가로 BOM 버전을 명시 고정. Spring Boot의 의존성 관리는 BOM 기반이므로 ext 블록에서 버전을 오버라이드해야 전이 의존성 충돌을 해결할 수 있음.',
        result: 'JSON 직렬화 정상화. PR diff → 에이전트 파이프라인 전 구간 정상 응답.',
      },
    ],
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
    github: 'https://github.com/Minsu4302/DevOps_Infra',
    stack: ['Terraform', 'Ansible', 'Kubernetes (Kubeadm, MetalLB, Calico)', 'Jenkins', 'GitLab', 'Docker Registry', 'CloudStack'],
    background: `수동 빌드·배포 흐름(이미지 빌드/푸시 → 매니페스트 적용 → 롤링 확인)을 사람이 순차로 수행, 배포 시간 과다 및 휴먼 에러 반복 발생. Terraform으로 VM·네트워크·NAT를 코드화하고, GitLab push 한 번으로 빌드→이미지 푸시→K8s 롤링 배포까지 무인 실행하는 파이프라인을 구축했습니다.`,
    contributions: [
      { title: 'IaC 기반 인프라 전체 코드화', desc: 'Terraform으로 VM·Isolated Network·NAT·Port Forwarding 13개 리소스 프로비저닝. Ansible Role 4개(k8s_common / k8s_master / k8s_worker / metallb)로 K8s 클러스터 전체 구성 자동화. VM 삭제 후 재생성해도 site.yaml 재실행 한 번으로 복구.' },
      { title: 'End-to-End CI/CD 파이프라인 구축', desc: 'GitLab Webhook → Jenkins → Docker Build & Push → kubectl apply K8s 롤링 배포. IMAGE_PLACEHOLDER 치환·Private Registry 연동·Rolling Update까지 커밋 푸시 한 번으로 무인 실행. 제약 리소스(vCPU 8 / 16GB) 내에서 운영 환경과 동일한 파이프라인 구현.' },
      { title: '리소스 제약 내 노드 역할 분리 설계', desc: '총 vCPU 8 / 16GB 제약에서 GitLab(4C/8G 전용) · Master(2C/4G) · Worker(1C/2G) 역할 분리. GitLab CE 최소 요구사항 사전 파악 실패로 OOMKill 발생 → 전용 노드 분리·nodeSelector 적용으로 재설계. 애플리케이션 요구사항 기반 인프라 설계의 중요성을 체득.' },
      { title: 'MetalLB 베어메탈 LB + Calico CNI 구성', desc: 'CloudStack 환경에서 퍼블릭 클라우드 LoadBalancer 미지원 → MetalLB L2 모드로 베어메탈 서비스 노출. Calico 3.28로 Pod 간 네트워크 정책 구성. Ansible CRD wait 로직으로 컨트롤러 Ready 전 적용 타이밍 이슈 구조적 해결.' },
    ],
    troubleshooting: [
      {
        title: 'GitLab OOMKilled → 인프라 재설계',
        problem: 'GitLab CE를 1C/2G 워커 노드에 배치하자 OOMKilled 반복. 리소스 요구사항 미파악으로 초기 설계 실패.',
        solution: 'GitLab CE 공식 최소 요구사항(4C/4G+) 확인. 전용 4C/8G 노드 분리, nodeSelector: node-role=gitlab 설정, Omnibus 내장 모니터링(prometheus_monitoring) 비활성화로 메모리 절감.',
        result: 'GitLab 안정 운영. 노드별 역할 분리로 타 서비스 리소스 경합 제거. 초기 설계 단계에서 앱 요구사항을 반드시 검토해야 한다는 교훈.',
      },
      {
        title: 'kubeadm preflight — 커널 설정 미달',
        problem: 'kubeadm init 실행 시 bridge-nf-call-iptables=0 경고로 초기화 중단. Calico는 iptables 브릿지 규칙에 의존하므로 미설정 시 Pod 네트워크 불가.',
        solution: 'Ansible k8s_common role에 사전 자동화 추가: modprobe br_netfilter, sysctl net.bridge.bridge-nf-call-iptables=1. NumCPU 경고는 CloudStack vCPU 제약이므로 --ignore-preflight-errors=NumCPU 처리.',
        result: 'kubeadm init 정상 완료. Ansible 재실행만으로 새 VM에도 동일 커널 환경 자동 구성. OS 수준 사전 조건을 IaC에 포함해야 한다는 패턴 학습.',
      },
      {
        title: 'MetalLB CRD 타이밍 이슈',
        problem: 'IPAddressPool 적용 시 "failed calling webhook: controller unavailable" 오류. CRD 생성 실패로 MetalLB L2 모드 적용 불가.',
        solution: 'MetalLB 컨트롤러가 완전히 시작되기 전 CRD를 적용한 것이 원인. Ansible task에 kubectl -n metallb-system wait --for=condition=Available deployment --all --timeout=300s 대기 로직 삽입 후 IPAddressPool 적용.',
        result: 'Ansible 재실행 시에도 타이밍 이슈 없이 안정적 L2 설정 적용. 컨트롤러 준비 상태 확인을 자동화 흐름에 포함하는 패턴 정착.',
      },
      {
        title: 'GitLab Webhook 다단계 디버깅 (L3 Egress 차단)',
        problem: '내부 URL(jenkins.devops.svc) 차단(GitLab 보안 정책) → ngrok 우회 → 여전히 Jenkins 접근 실패. 표면적으로는 DNS·라우팅 문제처럼 보였음.',
        solution: 'CloudStack Isolated Network의 Egress Rule 기본값이 전체 아웃바운드 차단(L3)임을 확인. Egress 허용 후 Jenkins CSRF 403 → Script Console에서 CSRF Protection 비활성화.',
        result: 'GitLab push → Jenkins 자동 빌드 트리거 정상 동작. 애플리케이션 레이어 이전에 네트워크 레이어(L3 정책)부터 계층적으로 검증해야 한다는 디버깅 원칙 체득.',
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
    github: 'https://github.com/Minsu4302/MSA_RabbitMQ_ERP',
    stack: ['FastAPI', 'gRPC', 'RabbitMQ', 'WebSocket', 'Kubernetes', 'MongoDB', 'MySQL'],
    background: `마이크로서비스 간 통신(gRPC·RabbitMQ)·비동기 처리·분산 배포를 직접 설계·구현하며 실무 수준의 분산 시스템 복잡성을 경험하는 것이 목표. 구현 과정에서 다수의 기술적 충돌과 배포 이슈를 직접 해결했습니다.`,
    contributions: [
      { title: '4개 마이크로서비스 설계 및 K8s 배포', desc: '직원관리(MySQL)/결재요청(MongoDB)/결재처리(RabbitMQ)/알림(WebSocket) 4개 FastAPI 서비스를 책임별 독립 분리. 각 서비스 Dockerfile + K8s Deployment/Service 매니페스트 작성. Docker Hub 이미지 푸시 후 kubectl rollout으로 무중단 업데이트.' },
      { title: 'RabbitMQ 기반 비동기 결재 파이프라인', desc: 'gRPC + uvicorn --reload 충돌(reloader 프로세스 간 event loop 경합) 경험 후 RabbitMQ(aio-pika)로 전환. Approval Request Service가 approval.work 큐에 Publish → Processing Service가 Subscribe하는 비동기 파이프라인. 결재 처리 결과는 REST 콜백으로 반환하는 동기/비동기 혼합 설계.' },
      { title: 'WebSocket 기반 실시간 알림 시스템', desc: 'Notification Service가 employeeId별 WebSocket 연결을 In-memory Map으로 관리. 결재 진행 시 Approval Request Service가 REST로 알림 요청 → Notification Service가 해당 결재자에게 즉시 Push. 별도 메시지 브로커 없이 FastAPI 내장 WebSocket으로 구현.' },
      { title: 'Pydantic v2 + Motor async ODM 적용', desc: 'Pydantic v2 BaseSettings 패키지 분리(pydantic-settings) 대응. Motor로 MongoDB 비동기 읽기·쓰기 구현. SQLAlchemy 2.x async 세션 패턴(get_db() Depends)으로 FastAPI local_kw 쿼리 파라미터 노출 버그 회피.' },
    ],
    troubleshooting: [
      {
        title: 'gRPC + uvicorn --reload 충돌 → RabbitMQ 전환',
        problem: 'uvicorn --reload 모드에서 gRPC 서버를 별도 스레드로 실행하자 reloader 프로세스와 event loop가 충돌. gRPC 서버 시작 로그 없이 FastAPI만 기동. asyncio executor로 1차 우회했으나 Worker 재시작 시 재발.',
        solution: '구조적 한계 판단 후 서비스 간 통신을 RabbitMQ(aio-pika)로 전환. Approval Request Service가 approval.work 큐에 Publish, Processing Service가 Subscribe. gRPC 의존성(grpcio, protobuf) 전체 제거.',
        result: 'gRPC 없이 비동기 결재 파이프라인 안정화. 배포 복잡도 감소. uvicorn reloader와의 충돌 근본 해결.',
      },
      {
        title: 'APIRouter prefix + 콜백 경로 mismatch → 404',
        problem: 'Approval Processing Service가 결재 결과를 ARS로 콜백 시 POST /internal/approvals/result → 404. ARS 라우터가 prefix="/approvals" + @router.post("/internal/result")로 실제 경로는 /approvals/internal/result인데 잘못된 경로로 호출.',
        solution: 'K8s 내부 DNS(approval-request-service:8000) 및 APIRouter prefix 조합을 Swagger /openapi.json으로 전수 검증. 콜백 URL을 /approvals/internal/result로 수정.',
        result: '서비스 간 결재 콜백 통신 정상화. 다단계 결재 전체 플로우(요청→승인→콜백→확정) 완성. APIRouter prefix를 항상 Swagger에서 검증하는 습관 정착.',
      },
      {
        title: 'MongoDB datetime.date 직렬화 실패 → 500',
        problem: '연차 결재 생성 시 leaveInfo.startDate/endDate가 Pydantic에서 datetime.date로 파싱됨. PyMongo bson 인코더가 datetime은 지원하지만 datetime.date는 미지원 → InvalidDocument 500 에러.',
        solution: 'jsonable_encoder로 Pydantic 모델 직렬화 후, 재귀 _normalize_dates() 함수로 date 객체 → ISO 문자열 변환. datetime은 MongoDB native 지원이므로 그대로 유지.',
        result: 'MongoDB 저장 정상화. LEAVE 타입 결재 생성 HTTP 201 반환. bson 인코딩 가능 타입 확인을 직렬화 전에 선행하는 패턴 도입.',
      },
      {
        title: 'FastAPI Depends(sessionmaker) → local_kw 쿼리 파라미터 노출',
        problem: 'Swagger UI에 local_kw라는 알 수 없는 쿼리 파라미터가 자동 생성. FastAPI가 Depends(AsyncSessionLocal) 시 sessionmaker 내부 **local_kw 시그니처를 분석해 OpenAPI 스펙에 노출.',
        solution: 'sessionmaker를 Depends에 직접 전달하지 않고 async def get_db() → AsyncSession yield 패턴으로 래핑. Depends(get_db)로 교체.',
        result: 'Swagger 정상화. 422 에러 없이 DB 세션 주입. FastAPI Depends는 callable 시그니처를 그대로 노출하므로 항상 명시적 함수로 래핑해야 한다는 원칙 정착.',
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

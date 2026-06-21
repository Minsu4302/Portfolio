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
    stack: ['Spring Boot', 'AWS (S3, ECR, EC2, RDS)', 'Prometheus', 'Grafana', 'Blue-Green 배포', '헥사고날 아키텍처', 'JaCoCo', 'SpotBugs'],
    stats: [
      { num: '163위', label: '앱스토어\n다운로드 순위' },
      { num: '30개', label: '운영 중인\n점주 수' },
      { num: '6개월+', label: '실서비스\n운영 기간' },
      { num: '단독', label: 'Backend\n담당 체제' },
    ],
    background: `Prometheus·Grafana 기반 모니터링을 운영하며 알림 분석·규칙 추가·대시보드 관리 등 핵심 액션이 모두 사람을 거쳐야 한다는 구조적 한계를 직접 경험했습니다. 결제 흐름의 SDK 버전 충돌, FCM 알림의 타이밍 의존적 Race Condition, 운영팀의 반복적인 Admin 업무 요청 등 사람이 병목이 되는 구간을 직접 발견하고 제거하는 경험을 쌓았습니다.`,
    contributions: [
      { title: 'Admin 페이지 단독 설계·개발', desc: '영업팀 정기 미팅에서 점주 요구사항을 직접 청취해 매장·상품 정보 수정, 전체 조회, 통계 기능 설계. 운영 문의 감소 및 처리 시간 단축.' },
      { title: 'S3 PreSigned URL 업로드 설계', desc: '매장·상품 이미지를 서버 경유 없이 클라이언트 직접 업로드 방식으로 전환. 서버 부하 감소 및 API 명세 프론트 공유 완료.' },
      { title: '정적 분석 도구 도입 및 품질 개선', desc: 'JaCoCo·SpotBugs를 도입해 SpotBugs High/Medium 이슈 전체 해소(EI/EI2 false positive 일괄 제외 필터 적용 포함). 신규/보강 단위·통합 테스트로 Branch 커버리지 19% → 40.2%, Line 커버리지 37% → 58%로 개선(각 +21%p).' },
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
    prev: 'taskscope',
    next: 'llm-monitoring',
  },
  {
    slug: 'llm-monitoring',
    name: 'LLM 기반 자동 모니터링 시스템',
    role: '풀스택 담당',
    status: '실서비스 연동 완료',
    period: '2025',
    summary: '자연어 챗봇 하나로 모니터링 운영 액션 전체를 처리하는 시스템.',
    image: '/icons/llm-monitoring.svg',
    github: 'https://github.com/Minsu4302/Auto-Logging-Monitoring-By-LLM',
    stack: ['FastAPI', 'SSE', 'ARQ + Redis', 'Prometheus', 'Grafana', 'Elasticsearch', 'Alertmanager', 'OTel Collector', 'Langfuse', 'React + TypeScript'],
    stats: [
      { num: '7개', label: '화이트리스트\n허용 액션' },
      { num: '실서비스', label: '바이트픽\n연동 완료' },
      { num: '3모델', label: '동적 할당\n멀티모델' },
      { num: '자동 보정', label: 'PromQL\n환각 차단' },
    ],
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
    role: '백엔드 담당',
    status: 'GCP 배포 완료',
    period: '2025',
    summary: 'AI 에이전트 실행 환경 전체를 설계한 2레이어 인프라.',
    image: '/icons/harness.svg',
    github: 'https://github.com/Minsu4302/Harness_Infra',
    stack: ['Shell', 'Spring Boot', 'Java 21', 'GCP', 'GitHub Actions', 'Docker', 'Claude Sonnet 4.6', 'Gemini 1.5 Flash', 'GPT-4o-mini', 'RAG', 'CoT'],
    stats: [
      { num: '-75%', label: 'CoT 출력\n토큰 절감' },
      { num: '-98%', label: '세션 이력\n자동 압축' },
      { num: '89%', label: '제약\n자동화율' },
      { num: '3개', label: '병렬 실행\nAI 에이전트' },
    ],
    background: `LLM 기반 자동 모니터링을 직접 구축하며 AI 에이전트 자체의 컨텍스트 관리·토큰 비용·코드 품질 검증이 수동 의존이라는 새 병목을 발견했습니다. Harness(로컬 컨텍스트 제어)와 Orchestration(GCP 기반 AI 게이트) 두 레이어로 구조적 해결.`,
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
    role: '백엔드 담당',
    status: '구축 완료',
    period: '2024 – 2025',
    summary: 'Terraform · Ansible · K8s · Jenkins end-to-end 파이프라인.',
    image: '/icons/infra.svg',
    github: 'https://github.com/Minsu4302/DevOps_Infra',
    stack: ['Terraform', 'Ansible', 'Kubernetes (Kubeadm, MetalLB, Calico)', 'Jenkins', 'GitLab', 'Docker Registry', 'CloudStack'],
    stats: [
      { num: '13개', label: 'IaC\n프로비저닝 리소스' },
      { num: '4개', label: 'Ansible\nRole 구성' },
      { num: '1커밋', label: '배포 트리거\n자동화' },
      { num: '무중단', label: '롤링 배포\n파이프라인' },
    ],
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
    next: 'taskscope',
  },
  {
    slug: 'taskscope',
    name: 'TaskScope',
    role: '백엔드 담당',
    status: '개발 완료',
    period: '2026.06',
    summary: 'AI 에이전트 비용·품질·가시성을 동시에 통제하는 멀티 에이전트 트레이싱 시스템.',
    image: '/icons/taskscope.svg',
    github: 'https://github.com/Minsu4302/taskscope',
    stack: ['Java 21', 'Spring Boot 3.x', 'RabbitMQ', 'OpenTelemetry', 'Jaeger', 'Prometheus', 'Grafana', 'Anthropic Claude API'],
    stats: [
      { num: '100%', label: 'trace\npropagation' },
      { num: '3.2배', label: 'LLM 비용\n절감' },
      { num: '19개', label: '단일 trace\nspan 수' },
      { num: '7개', label: 'Grafana\n집계 패널' },
    ],
    background: `하네스로 AI 에이전트 비용을 줄인 뒤, 새로운 질문이 남았습니다. "에이전트들이 실제로 얼마를 쓰고 있고, 어디서 루프가 끊기는가?" — 비용 데이터는 Anthropic 청구서에만 있었고, trace는 에이전트마다 단절되어 있었습니다. TaskScope는 이 가시성 공백을 추적 가능한 형태로 만든 시스템입니다.`,
    contributions: [
      { title: 'trace propagation 100% — 단일 trace에 19개 span', desc: 'traceparent 헤더 누락 버그(RabbitMQConfig observationEnabled 미설정) 수정 후, dispatcher HTTP → AMQP → 3개 워커 → llm.call 전체를 하나의 Jaeger trace로 귀속. 에이전트마다 새 trace가 생성되던 0%에서 100%로.' },
      { title: 'Prometheus 비용 가드레일 — 건당 3.2배 절감 (Phase 6 실측)', desc: '최근 10분 평균 비용이 임계값 초과 시 premium(Sonnet) → standard(Haiku) 자동 강등. 실측: $0.0528/건 → $0.0167/건. 단, ground truth 3건 비교에서 standard 모델이 설정 누락성 결함(observationEnabled 미설정 등)을 일관되게 놓침 — 비용과 품질의 트레이드오프를 수치로 확인.' },
      { title: '복잡도 분류기 3피처 고도화', desc: '단일 diffLines 임계값에서 파일 확장자(.sh/.yml → context-heavy) + 워커 종류(test_gen은 더 낮은 임계값) 3피처로 확장. need_context 루프 감소 예측.' },
      { title: 'LLM 판단 기반 에이전트 루프 + Observability 파이프라인', desc: 'Claude JSON 응답 status(complete / need_context / retry)에 따라 GitHub Contents API로 파일 fetch 후 컨텍스트 보강. Micrometer → OTel Collector → Prometheus로 llm_cost_usd_total 등 4개 메트릭 수집, Grafana 7개 패널로 실시간 집계.' },
    ],
    troubleshooting: [
      {
        title: 'lazy regex 오진 — maxTokens 탓으로 잘못 추정한 뒤 실제 원인 발견',
        problem: 'SMALL 커밋(4 diffLines)에서 iter=4까지 JSON parse 실패. 최초 가설: maxTokens=2048 초과 → 4096으로 증가. 그러나 out=464~597 토큰으로 2048과 무관하게 동일 에러 재발.',
        solution: 'BaseWorker.extractJson()의 lazy regex `[\\s\\S]*?`가 응답 내 코드블록 backtick에서 조기 종료하는 것이 실제 원인. greedy `[\\s\\S]*`으로 교체해 마지막 backtick까지 캡처. maxTokens는 LARGE Sonnet 출력(~2100 토큰) 케이스를 위해 4096 병행 적용.',
        result: 'SMALL code_review iter 4→1 (-75%), 비용 $0.012→$0.002 (-83%). retry 원인 3유형(lazy regex / maxTokens 초과 / 본질적 장문 test_gen) 분류 완료.',
      },
      {
        title: '구 worker 프로세스 누수 — 측정 비용의 10배 청구',
        problem: '측정된 LLM 비용 $0.3~0.4인데 실제 청구 ~$5. RabbitMQ 통계에서 redeliver=303 (publish=55 대비 6.5배) 발견. 이전 세션 Java 프로세스 13개가 동일 큐에 consumer로 계속 붙어, Spring AMQP 예외 발생 시 메시지 requeue → 동일 메시지를 여러 워커가 반복 소비.',
        solution: '세션 시작 전 체크리스트 수립: Java 프로세스 전수 종료 → RabbitMQ consumers 수 확인(큐당 1개) → 새 워커 기동 후 로그 확인 순서 정착.',
        result: '프로세스 정리 후 비용 측정값·청구액 일치. 비용 급증 원인을 Grafana → Jaeger drill-down으로 3분 내 특정 가능한 체계 구축.',
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

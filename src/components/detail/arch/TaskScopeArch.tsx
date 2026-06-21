export default function TaskScopeArch() {
  return (
    <svg viewBox="0 0 820 430" className="w-full h-auto">
      <defs>
        <marker id="ts-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="ts-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#2563a8" />
        </marker>
        <marker id="ts-o" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="ts-p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#8b5cf6" />
        </marker>
        <marker id="ts-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#059669" />
        </marker>
      </defs>

      {/* ── GitHub Client ── */}
      <rect x="14" y="34" width="128" height="56" rx="5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.2" />
      <text x="78" y="54" textAnchor="middle" fontSize="9" fill="#374151" fontWeight="700">GitHub Commits</text>
      <text x="78" y="66" textAnchor="middle" fontSize="7" fill="#6b7280">Diff · 변경 파일 목록</text>
      <text x="78" y="78" textAnchor="middle" fontSize="7" fill="#6b7280">REST API (PAT 인증)</text>

      {/* GitHub → Dispatcher */}
      <line x1="142" y1="62" x2="178" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ts-a)" />
      <text x="160" y="56" textAnchor="middle" fontSize="7" fill="#9ca3af">REST</text>

      {/* ── Dispatcher ── */}
      <rect x="178" y="16" width="238" height="112" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="178" y="16" width="238" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="297" y="29" textAnchor="middle" fontSize="9" fill="#1e3a8a" fontWeight="700">Dispatcher (Spring Boot 3.x / Java 21)</text>
      <text x="297" y="48" textAnchor="middle" fontSize="7" fill="#1d4ed8">POST /tasks → CommitTaskService</text>
      <text x="297" y="60" textAnchor="middle" fontSize="7" fill="#475569">ComplexityRouter: diffLines + 파일확장자 + 워커종류</text>
      <text x="297" y="72" textAnchor="middle" fontSize="7" fill="#475569">SMALL/MEDIUM → Haiku (standard)</text>
      <text x="297" y="84" textAnchor="middle" fontSize="7" fill="#475569">LARGE / .sh·.yml → Sonnet (premium)</text>
      <text x="297" y="96" textAnchor="middle" fontSize="7" fill="#8b5cf6">CostGuardrailService: Prometheus avg_cost 참조</text>
      <text x="297" y="108" textAnchor="middle" fontSize="7" fill="#059669">OTel span: task.dispatch (traceparent 주입)</text>

      {/* Dispatcher → RabbitMQ */}
      <line x1="297" y1="128" x2="297" y2="158" stroke="#2563a8" strokeWidth="1.5" markerEnd="url(#ts-b)" />

      {/* ── RabbitMQ ── */}
      <rect x="165" y="158" width="264" height="56" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="297" y="178" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="700">RabbitMQ</text>
      <text x="297" y="192" textAnchor="middle" fontSize="7" fill="#b45309">code-review · security · test-gen 3개 큐</text>
      <text x="297" y="204" textAnchor="middle" fontSize="7" fill="#92400e">traceparent 헤더 보존 → trace context 100% 전파</text>

      {/* RabbitMQ → Workers (3 paths) */}
      <path d="M208,214 L208,234 L91,234 L91,252" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#ts-p)" />
      <line x1="297" y1="214" x2="297" y2="252" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#ts-p)" />
      <path d="M388,214 L388,234 L500,234 L500,252" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#ts-p)" />

      {/* ── CodeReview Worker ── */}
      <rect x="14" y="252" width="154" height="82" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="14" y="252" width="154" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="91" y="265" textAnchor="middle" fontSize="8" fill="#1e3a8a" fontWeight="700">CodeReviewWorker</text>
      <text x="91" y="281" textAnchor="middle" fontSize="7" fill="#475569">코드 품질 · 버그 · 컨벤션 리뷰</text>
      <text x="91" y="293" textAnchor="middle" fontSize="7" fill="#475569">status: complete / need_context / retry</text>
      <text x="91" y="305" textAnchor="middle" fontSize="7" fill="#475569">loop cap = 5 · maxTokens = 4096</text>
      <text x="91" y="317" textAnchor="middle" fontSize="7" fill="#059669">span: worker.code_review + llm.call</text>

      {/* ── Security Worker ── */}
      <rect x="220" y="252" width="154" height="82" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="220" y="252" width="154" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="297" y="265" textAnchor="middle" fontSize="8" fill="#1e3a8a" fontWeight="700">SecurityWorker</text>
      <text x="297" y="281" textAnchor="middle" fontSize="7" fill="#475569">하드코딩 시크릿 · 인젝션 취약점</text>
      <text x="297" y="293" textAnchor="middle" fontSize="7" fill="#475569">status: complete / need_context / retry</text>
      <text x="297" y="305" textAnchor="middle" fontSize="7" fill="#475569">loop cap = 5 · maxTokens = 4096</text>
      <text x="297" y="317" textAnchor="middle" fontSize="7" fill="#059669">span: worker.security + llm.call</text>

      {/* ── TestGen Worker ── */}
      <rect x="426" y="252" width="154" height="82" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="426" y="252" width="154" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="503" y="265" textAnchor="middle" fontSize="8" fill="#1e3a8a" fontWeight="700">TestGenWorker</text>
      <text x="503" y="281" textAnchor="middle" fontSize="7" fill="#475569">JUnit 5 테스트 케이스 생성</text>
      <text x="503" y="293" textAnchor="middle" fontSize="7" fill="#475569">status: complete / need_context / retry</text>
      <text x="503" y="305" textAnchor="middle" fontSize="7" fill="#475569">loop cap = 5 · maxTokens = 4096</text>
      <text x="503" y="317" textAnchor="middle" fontSize="7" fill="#059669">span: worker.test_gen + llm.call</text>

      {/* Workers → Claude API (right side path) */}
      <path d="M580,293 L610,293 L610,72 L594,72" stroke="#f97316" strokeWidth="1.2" fill="none" markerEnd="url(#ts-o)" />
      <text x="624" y="186" textAnchor="middle" fontSize="7" fill="#f97316" transform="rotate(-90, 624, 186)">llm.call (span 기록)</text>

      {/* ── Claude API ── */}
      <rect x="594" y="16" width="216" height="112" rx="6" fill="#fdf4ff" stroke="#8b5cf6" strokeWidth="1.5" />
      <rect x="594" y="16" width="216" height="18" rx="6" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="702" y="29" textAnchor="middle" fontSize="9" fill="#581c87" fontWeight="700">Anthropic Claude API</text>
      <text x="702" y="48" textAnchor="middle" fontSize="7" fill="#6d28d9">standard: claude-haiku-4-5</text>
      <text x="702" y="60" textAnchor="middle" fontSize="7" fill="#6d28d9">premium: claude-sonnet-4-6</text>
      <text x="702" y="72" textAnchor="middle" fontSize="7" fill="#475569">JSON: complete / need_context / retry</text>
      <text x="702" y="84" textAnchor="middle" fontSize="7" fill="#475569">Phase 6 실측: Haiku $0.0167/건</text>
      <text x="702" y="96" textAnchor="middle" fontSize="7" fill="#475569">Sonnet $0.0528/건 (3.2× 차이)</text>
      <text x="702" y="108" textAnchor="middle" fontSize="7" fill="#9ca3af">need_context → GitHub Contents API fetch</text>

      {/* ── Observability row ── */}

      {/* Workers → OTel Collector */}
      <path d="M91,334 L91,356 L91,374" stroke="#059669" strokeWidth="1.2" fill="none" markerEnd="url(#ts-g)" />
      <path d="M297,334 L297,356 L138,356 L138,374" stroke="#059669" strokeWidth="1.2" fill="none" markerEnd="url(#ts-g)" />

      {/* OTel Collector */}
      <rect x="14" y="374" width="148" height="48" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="88" y="393" textAnchor="middle" fontSize="9" fill="#14532d" fontWeight="700">OTel Collector</text>
      <text x="88" y="405" textAnchor="middle" fontSize="7" fill="#15803d">span 수집 + Micrometer metrics</text>
      <text x="88" y="417" textAnchor="middle" fontSize="7" fill="#15803d">gRPC: 14320 / HTTP: 14321</text>

      {/* OTel → Jaeger */}
      <line x1="162" y1="393" x2="200" y2="393" stroke="#16a34a" strokeWidth="1.2" markerEnd="url(#ts-g)" />

      {/* Jaeger */}
      <rect x="200" y="374" width="140" height="48" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="270" y="393" textAnchor="middle" fontSize="9" fill="#14532d" fontWeight="700">Jaeger</text>
      <text x="270" y="405" textAnchor="middle" fontSize="7" fill="#15803d">단일 trace에 19개 span</text>
      <text x="270" y="417" textAnchor="middle" fontSize="7" fill="#15803d">trace propagation 100%</text>

      {/* OTel → Prometheus */}
      <line x1="162" y1="406" x2="360" y2="406" stroke="#16a34a" strokeWidth="1.2" markerEnd="url(#ts-g)" />

      {/* Prometheus */}
      <rect x="360" y="374" width="148" height="48" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="434" y="393" textAnchor="middle" fontSize="9" fill="#14532d" fontWeight="700">Prometheus</text>
      <text x="434" y="405" textAnchor="middle" fontSize="7" fill="#15803d">llm_cost_usd_total</text>
      <text x="434" y="417" textAnchor="middle" fontSize="7" fill="#15803d">llm_calls_total · tokens</text>

      {/* Prometheus → Grafana */}
      <line x1="508" y1="393" x2="546" y2="393" stroke="#16a34a" strokeWidth="1.2" markerEnd="url(#ts-g)" />

      {/* Grafana */}
      <rect x="546" y="374" width="140" height="48" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="616" y="393" textAnchor="middle" fontSize="9" fill="#14532d" fontWeight="700">Grafana</text>
      <text x="616" y="405" textAnchor="middle" fontSize="7" fill="#15803d">7개 대시보드 패널</text>
      <text x="616" y="417" textAnchor="middle" fontSize="7" fill="#15803d">비용 / 토큰 / 모델 분포 실시간</text>

      {/* Prometheus → CostGuardrail (dashed back to Dispatcher) */}
      <path d="M434,374 L434,350 L550,350 L550,72 L416,72" stroke="#f97316" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#ts-o)" />
      <text x="500" y="344" textAnchor="middle" fontSize="7" fill="#f97316">avg_cost 초과 → premium→standard 강등</text>

      {/* Legend */}
      <g transform="translate(696, 374)">
        <rect x="0" y="0" width="114" height="48" rx="4" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="8" y1="14" x2="22" y2="14" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="26" y="18" fontSize="7" fill="#6b7280">AMQP consume</text>
        <line x1="8" y1="28" x2="22" y2="28" stroke="#f97316" strokeWidth="1.2" />
        <text x="26" y="32" fontSize="7" fill="#6b7280">LLM 호출 / 가드레일</text>
        <line x1="8" y1="42" x2="22" y2="42" stroke="#16a34a" strokeWidth="1.2" />
        <text x="26" y="46" fontSize="7" fill="#6b7280">Observability</text>
      </g>
    </svg>
  )
}

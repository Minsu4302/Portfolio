export default function LlmMonitoringArch() {
  return (
    <svg viewBox="0 0 720 340" className="w-full h-auto">
      <defs>
        <marker id="llm-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="llm-am" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#a78bfa" />
        </marker>
      </defs>

      {/* Row labels */}
      <text x="18" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">PIPELINE</text>
      <text x="558" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">TARGETS</text>

      {/* === Pipeline (left to right) === */}

      {/* 자연어 Input */}
      <rect x="18" y="60" width="85" height="36" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="60" y="77" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">자연어</text>
      <text x="60" y="90" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">Input</text>

      {/* FastAPI + LLM */}
      <rect x="133" y="38" width="140" height="80" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="203" y="60" textAnchor="middle" fontSize="12" fill="#1a2940" fontWeight="700">FastAPI</text>
      <text x="203" y="76" textAnchor="middle" fontSize="9" fill="#2563a8">Intent 분류 · LLM 추론</text>
      <text x="203" y="90" textAnchor="middle" fontSize="8" fill="#6b7280">Claude / GPT / Ollama</text>
      <text x="203" y="105" textAnchor="middle" fontSize="8" fill="#6b7280">ARQ + Redis (비동기)</text>

      {/* Whitelist 검증 */}
      <rect x="305" y="60" width="105" height="36" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1" />
      <text x="357" y="77" textAnchor="middle" fontSize="10" fill="#633806" fontWeight="600">Whitelist</text>
      <text x="357" y="90" textAnchor="middle" fontSize="9" fill="#633806">검증 (7개 액션)</text>

      {/* 허용 액션 목록 */}
      <rect x="440" y="22" width="100" height="152" rx="6" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="490" y="42" textAnchor="middle" fontSize="10" fill="#3c3489" fontWeight="700">허용 액션</text>
      <line x1="448" y1="48" x2="532" y2="48" stroke="#534ab7" strokeWidth="0.5" opacity="0.4" />
      <text x="490" y="64" textAnchor="middle" fontSize="9" fill="#3c3489">모니터링 추가</text>
      <text x="490" y="80" textAnchor="middle" fontSize="9" fill="#3c3489">알림 규칙 생성</text>
      <text x="490" y="96" textAnchor="middle" fontSize="9" fill="#3c3489">대시보드 임포트</text>
      <text x="490" y="112" textAnchor="middle" fontSize="9" fill="#3c3489">대시보드 편집</text>
      <text x="490" y="128" textAnchor="middle" fontSize="9" fill="#3c3489">로그 검색</text>
      <text x="490" y="144" textAnchor="middle" fontSize="9" fill="#3c3489">알림 요약</text>
      <text x="490" y="160" textAnchor="middle" fontSize="9" fill="#3c3489">상태 조회</text>

      {/* === Target Systems (right column) === */}

      {/* Prometheus */}
      <rect x="572" y="22" width="110" height="30" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="627" y="41" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Prometheus</text>

      {/* Grafana */}
      <rect x="572" y="66" width="110" height="30" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="627" y="85" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Grafana</text>

      {/* Elasticsearch */}
      <rect x="572" y="110" width="110" height="30" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="627" y="129" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Elasticsearch</text>

      {/* Langfuse */}
      <rect x="572" y="154" width="110" height="30" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="627" y="173" textAnchor="middle" fontSize="11" fill="#085041" fontWeight="500">Langfuse</text>

      {/* Alertmanager */}
      <rect x="572" y="198" width="110" height="30" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="627" y="217" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Alertmanager</text>

      {/* SSE → React UI */}
      <rect x="133" y="168" width="140" height="36" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="203" y="185" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="500">SSE 스트리밍</text>
      <text x="203" y="198" textAnchor="middle" fontSize="9" fill="#6b7280">React + Grafana iframe</text>

      {/* === ARROWS === */}

      {/* Input → FastAPI */}
      <line x1="103" y1="78" x2="133" y2="78" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* FastAPI → Whitelist */}
      <line x1="273" y1="78" x2="305" y2="78" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* Whitelist → 허용 액션 */}
      <line x1="410" y1="78" x2="440" y2="98" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* 허용 액션 → Prometheus */}
      <line x1="540" y1="52" x2="572" y2="37" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* 허용 액션 → Grafana */}
      <line x1="540" y1="80" x2="572" y2="81" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* 허용 액션 → Elasticsearch */}
      <line x1="540" y1="110" x2="572" y2="125" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* 허용 액션 → Alertmanager */}
      <line x1="540" y1="150" x2="572" y2="213" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* FastAPI --LLM trace--> Langfuse (dashed) */}
      <path d="M203,118 L203,135 L627,135 L627,154" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" fill="none" markerEnd="url(#llm-am)" />

      {/* FastAPI → SSE */}
      <line x1="203" y1="118" x2="203" y2="168" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#llm-a)" />

      {/* Legend */}
      <g transform="translate(18, 270)">
        <line x1="0" y1="5" x2="18" y2="5" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="18" cy="5" r="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
        <text x="24" y="9" fontSize="9" fill="#9ca3af">동기 호출</text>
        <line x1="90" y1="5" x2="108" y2="5" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="108" cy="5" r="3" fill="white" stroke="#a78bfa" strokeWidth="1" />
        <text x="114" y="9" fontSize="9" fill="#9ca3af">LLM 추적 (Langfuse)</text>
      </g>
    </svg>
  )
}

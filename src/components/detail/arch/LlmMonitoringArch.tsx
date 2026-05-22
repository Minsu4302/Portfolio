export default function LlmMonitoringArch() {
  return (
    <svg viewBox="0 0 820 450" className="w-full h-auto">
      <defs>
        <marker id="lm-a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#94a3b8" />
        </marker>
        <marker id="lm-p" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#a78bfa" />
        </marker>
        <marker id="lm-o" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#f97316" />
        </marker>
        <marker id="lm-b" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#3b82f6" />
        </marker>
        <marker id="lm-g" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#22c55e" />
        </marker>
      </defs>

      {/* ══ SECTION LABELS ══ */}
      <text x="12" y="13" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">CHAT INTERFACE</text>
      <text x="210" y="13" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">FASTAPI BACKEND</text>
      <text x="560" y="13" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">OBSERVABILITY STACK</text>
      <text x="12" y="263" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">AWS EC2 (실서비스)</text>

      {/* ── React Chatbot UI ── */}
      <rect x="12" y="22" width="150" height="75" rx="8" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="87" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a2940">React Chatbot UI</text>
      <text x="87" y="56" textAnchor="middle" fontSize="8" fill="#2563a8">SSE 스트리밍 수신</text>
      <text x="87" y="69" textAnchor="middle" fontSize="8" fill="#2563a8">Grafana iframe 임베드</text>
      <text x="87" y="82" textAnchor="middle" fontSize="8" fill="#64748b">챗봇 + 대시보드 단일 UI</text>

      {/* React → FastAPI SSE */}
      <line x1="162" y1="58" x2="207" y2="58" stroke="#2563a8" strokeWidth="1.5" markerEnd="url(#lm-b)" />
      <text x="183" y="52" textAnchor="middle" fontSize="7" fill="#2563a8">SSE</text>

      {/* ── FastAPI Backend ── */}
      <rect x="207" y="22" width="330" height="205" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* Intent Classifier */}
      <rect x="220" y="38" width="95" height="38" rx="5" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="267" y="54" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a2940">Intent</text>
      <text x="267" y="66" textAnchor="middle" fontSize="8" fill="#2563a8">Classifier</text>

      {/* Orchestrator */}
      <rect x="330" y="38" width="95" height="38" rx="5" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="377" y="54" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a2940">Orchestrator</text>
      <text x="377" y="66" textAnchor="middle" fontSize="8" fill="#2563a8">Whitelist(7)</text>

      {/* Executor */}
      <rect x="440" y="38" width="85" height="38" rx="5" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="482" y="54" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a2940">Executor</text>
      <text x="482" y="66" textAnchor="middle" fontSize="8" fill="#2563a8">API 실행</text>

      {/* Arrows: Intent→Orch→Exec */}
      <line x1="315" y1="57" x2="330" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lm-a)" />
      <line x1="425" y1="57" x2="440" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lm-a)" />

      {/* LLM Provider row */}
      <text x="220" y="103" fontSize="7" fill="#9ca3af" fontWeight="600">LLM PROVIDER</text>
      <rect x="220" y="110" width="78" height="30" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="259" y="129" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">OpenAI GPT</text>
      <rect x="306" y="110" width="78" height="30" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="345" y="129" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Claude</text>
      <rect x="392" y="110" width="78" height="30" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="431" y="129" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Ollama</text>
      <text x="431" y="138" textAnchor="middle" fontSize="7" fill="#16a34a">(offline)</text>

      {/* Arrows from Orchestrator to each LLM */}
      <line x1="377" y1="76" x2="377" y2="100" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#lm-g)" />
      <path d="M377,100 L259,100 L259,110" stroke="#22c55e" strokeWidth="1" fill="none" strokeDasharray="3 2" />
      <line x1="377" y1="100" x2="345" y2="110" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#lm-g)" />
      <line x1="377" y1="100" x2="431" y2="110" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#lm-g)" />

      {/* Semantic Cache + ARQ row */}
      <text x="220" y="162" fontSize="7" fill="#9ca3af" fontWeight="600">INFRA</text>
      <rect x="220" y="168" width="120" height="30" rx="4" fill="#faf5ff" stroke="#9333ea" strokeWidth="1.2" />
      <text x="280" y="183" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">Semantic Cache</text>
      <text x="280" y="193" textAnchor="middle" fontSize="7" fill="#9333ea">Redis · 동일의도 LLM절감</text>
      <rect x="352" y="168" width="118" height="30" rx="4" fill="#faf5ff" stroke="#9333ea" strokeWidth="1.2" />
      <text x="411" y="183" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">ARQ Job Queue</text>
      <text x="411" y="193" textAnchor="middle" fontSize="7" fill="#9333ea">Redis · 무거운 분석 비동기</text>

      {/* Executor → SSE back */}
      <path d="M482,76 L482,215 L87,215 L87,97" stroke="#2563a8" strokeWidth="1" strokeDasharray="4 2" fill="none" markerEnd="url(#lm-b)" />
      <text x="280" y="224" textAnchor="middle" fontSize="7" fill="#2563a8">SSE stream 응답</text>

      {/* Executor → Observability (right) */}
      <line x1="537" y1="57" x2="558" y2="57" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#lm-a)" />

      {/* ══ OBSERVABILITY STACK ══ */}
      <rect x="558" y="22" width="252" height="225" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* OTel Collector */}
      <rect x="570" y="35" width="228" height="30" rx="5" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="684" y="55" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">OTel Collector (수신)</text>

      {/* 3 storage targets */}
      <rect x="570" y="80" width="66" height="28" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.2" />
      <text x="603" y="98" textAnchor="middle" fontSize="8" fontWeight="600" fill="#3c3489">Prometheus</text>

      <rect x="645" y="80" width="66" height="28" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.2" />
      <text x="678" y="98" textAnchor="middle" fontSize="8" fontWeight="600" fill="#3c3489">Tempo</text>

      <rect x="720" y="80" width="58" height="28" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.2" />
      <text x="749" y="98" textAnchor="middle" fontSize="8" fontWeight="600" fill="#3c3489">Elastic</text>

      {/* OTel Collector → 3 targets */}
      <line x1="630" y1="65" x2="603" y2="80" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#lm-o)" />
      <line x1="684" y1="65" x2="678" y2="80" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#lm-o)" />
      <line x1="738" y1="65" x2="749" y2="80" stroke="#f97316" strokeWidth="1.2" markerEnd="url(#lm-o)" />

      {/* Grafana */}
      <rect x="570" y="124" width="86" height="28" rx="4" fill="#fff7ed" stroke="#f97316" strokeWidth="1.2" />
      <text x="613" y="142" textAnchor="middle" fontSize="8" fontWeight="600" fill="#c2410c">Grafana</text>
      {/* Prometheus → Grafana */}
      <line x1="603" y1="108" x2="603" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lm-a)" />

      {/* Alertmanager */}
      <rect x="666" y="124" width="110" height="28" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.2" />
      <text x="721" y="142" textAnchor="middle" fontSize="8" fontWeight="600" fill="#3c3489">Alertmanager</text>
      {/* Prometheus → Alertmanager */}
      <line x1="636" y1="94" x2="666" y2="138" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#lm-a)" />

      {/* Fluent Bit + Langfuse */}
      <rect x="570" y="168" width="86" height="28" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="613" y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Fluent Bit</text>
      <rect x="666" y="168" width="110" height="28" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1.2" />
      <text x="721" y="183" textAnchor="middle" fontSize="8" fontWeight="700" fill="#085041">Langfuse</text>
      <text x="721" y="193" textAnchor="middle" fontSize="7" fill="#0f6e56">LLM 호출 추적·비용</text>

      {/* FastAPI → Langfuse (dashed purple) */}
      <path d="M482,100 L540,100 L540,182 L666,182" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 2" fill="none" markerEnd="url(#lm-p)" />

      {/* Executor → Grafana/Alertmanager directly */}
      <path d="M537,57 L558,57" stroke="#94a3b8" strokeWidth="1" fill="none" />

      {/* ngrok label inside OTel */}
      <rect x="570" y="212" width="228" height="25" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3 2" />
      <text x="684" y="229" textAnchor="middle" fontSize="8" fontWeight="600" fill="#92400e">ngrok tunnel — OTLP/HTTP:4318 (gRPC:4317 차단)</text>

      {/* ══ EC2 REAL SERVICE ══ */}
      <rect x="12" y="272" width="540" height="145" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="24" y="288" fontSize="8" fontWeight="700" fill="#dc2626" letterSpacing="0.5">AWS EC2 — magambell-dev (실제 운영 서비스)</text>

      {/* Spring Boot + OTel Agent */}
      <rect x="24" y="296" width="220" height="55" rx="6" fill="#fff" stroke="#2563a8" strokeWidth="1.5" />
      <text x="134" y="314" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a2940">Spring Boot</text>
      <text x="134" y="327" textAnchor="middle" fontSize="8" fill="#2563a8">+ OTel Java Agent v2.27.0</text>
      <text x="134" y="340" textAnchor="middle" fontSize="7" fill="#64748b">traces / metrics / logs 자동 계측</text>

      {/* OTel Collector (host metrics) */}
      <rect x="24" y="363" width="220" height="42" rx="6" fill="#fff" stroke="#f97316" strokeWidth="1.5" />
      <text x="134" y="380" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">OTel Collector</text>
      <text x="134" y="393" textAnchor="middle" fontSize="8" fill="#f97316">hostmetrics receiver (CPU/MEM/Disk/Net)</text>

      {/* ngrok box (EC2 side) */}
      <rect x="268" y="310" width="90" height="38" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
      <text x="313" y="326" textAnchor="middle" fontSize="9" fontWeight="700" fill="#92400e">ngrok</text>
      <text x="313" y="338" textAnchor="middle" fontSize="7" fill="#b45309">OTLP/HTTP:4318</text>

      {/* OTel Collector (receive - local) */}
      <rect x="383" y="310" width="155" height="38" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="460" y="326" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">OTel Collector</text>
      <text x="460" y="338" textAnchor="middle" fontSize="8" fill="#f97316">(로컬 수신 → Prometheus/ES/Tempo)</text>

      {/* Spring Boot → ngrok */}
      <line x1="244" y1="323" x2="268" y2="323" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#lm-o)" />
      <text x="256" y="317" textAnchor="middle" fontSize="6" fill="#f97316">OTLP</text>
      {/* OTel Collector host → ngrok */}
      <line x1="244" y1="382" x2="313" y2="348" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#lm-o)" />
      {/* ngrok → local OTel Collector */}
      <line x1="358" y1="329" x2="383" y2="329" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#lm-a)" />

      {/* local OTel Collector → Observability Stack (up) */}
      <path d="M538,329 L558,329 L558,237" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#lm-o)" />

      {/* ── LEGEND ── */}
      <g transform="translate(12, 428)">
        <line x1="0" y1="4" x2="16" y2="4" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="20" y="8" fontSize="7" fill="#9ca3af">동기 호출</text>
        <line x1="80" y1="4" x2="96" y2="4" stroke="#2563a8" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="100" y="8" fontSize="7" fill="#9ca3af">SSE 스트리밍</text>
        <line x1="180" y1="4" x2="196" y2="4" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="200" y="8" fontSize="7" fill="#9ca3af">LLM 호출</text>
        <line x1="260" y1="4" x2="276" y2="4" stroke="#a78bfa" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="280" y="8" fontSize="7" fill="#9ca3af">Langfuse 추적</text>
        <line x1="360" y1="4" x2="376" y2="4" stroke="#f97316" strokeWidth="1.2" />
        <text x="380" y="8" fontSize="7" fill="#9ca3af">OTel Push (OTLP/HTTP)</text>
      </g>
    </svg>
  )
}

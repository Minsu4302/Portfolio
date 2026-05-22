export default function ErpArch() {
  return (
    <svg viewBox="0 0 720 360" className="w-full h-auto">
      <defs>
        <marker id="erp-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="erp-am" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#a78bfa" />
        </marker>
      </defs>

      {/* Region labels */}
      <text x="18" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">FASTAPI MICROSERVICES</text>
      <text x="392" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">MESSAGE BROKER</text>
      <text x="570" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">STORAGE</text>

      {/* Separator 1 */}
      <line x1="360" y1="20" x2="360" y2="330" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />
      {/* Separator 2 */}
      <line x1="560" y1="20" x2="560" y2="330" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />

      {/* K8s wrapper */}
      <rect x="18" y="25" width="330" height="280" rx="8" fill="transparent" stroke="#2563a8" strokeWidth="1" strokeDasharray="6 3" opacity="0.4" />
      <text x="183" y="42" textAnchor="middle" fontSize="9" fill="#2563a8" opacity="0.7">Kubernetes Cluster</text>

      {/* === FastAPI Services === */}

      {/* HR Service */}
      <rect x="32" y="55" width="100" height="36" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="82" y="72" textAnchor="middle" fontSize="11" fill="#1a2940" fontWeight="600">HR Service</text>
      <text x="82" y="85" textAnchor="middle" fontSize="9" fill="#2563a8">연차 / 직원 관리</text>

      {/* Approval Service */}
      <rect x="32" y="120" width="100" height="36" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="82" y="136" textAnchor="middle" fontSize="10" fill="#1a2940" fontWeight="600">Approval</text>
      <text x="82" y="149" textAnchor="middle" fontSize="9" fill="#2563a8">다단계 결재</text>

      {/* Notification Service */}
      <rect x="32" y="185" width="100" height="36" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="82" y="200" textAnchor="middle" fontSize="10" fill="#1a2940" fontWeight="600">Notification</text>
      <text x="82" y="213" textAnchor="middle" fontSize="9" fill="#2563a8">WebSocket · SSE</text>

      {/* Auth Service */}
      <rect x="32" y="250" width="100" height="36" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="82" y="266" textAnchor="middle" fontSize="11" fill="#1a2940" fontWeight="600">Auth Service</text>
      <text x="82" y="279" textAnchor="middle" fontSize="9" fill="#2563a8">JWT / OAuth2</text>

      {/* API Gateway */}
      <rect x="220" y="152" width="110" height="40" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1.5" />
      <text x="275" y="169" textAnchor="middle" fontSize="11" fill="#633806" fontWeight="600">API Gateway</text>
      <text x="275" y="183" textAnchor="middle" fontSize="9" fill="#633806">라우팅 / 인증</text>

      {/* === RabbitMQ === */}
      <rect x="380" y="142" width="150" height="60" rx="8" fill="#faeeda" stroke="#854f0b" strokeWidth="1.5" />
      <text x="455" y="165" textAnchor="middle" fontSize="12" fill="#633806" fontWeight="700">RabbitMQ</text>
      <text x="455" y="182" textAnchor="middle" fontSize="9" fill="#633806">메시지 브로커</text>
      <text x="455" y="196" textAnchor="middle" fontSize="8" fill="#854f0b" opacity="0.8">비동기 이벤트 처리</text>

      {/* === Storage === */}

      {/* MongoDB */}
      <rect x="578" y="80" width="110" height="36" rx="6" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1.5" />
      <text x="633" y="97" textAnchor="middle" fontSize="11" fill="#085041" fontWeight="600">MongoDB</text>
      <text x="633" y="110" textAnchor="middle" fontSize="9" fill="#085041">HR / 연차 데이터</text>

      {/* MySQL */}
      <rect x="578" y="160" width="110" height="36" rx="6" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1.5" />
      <text x="633" y="177" textAnchor="middle" fontSize="11" fill="#085041" fontWeight="600">MySQL</text>
      <text x="633" y="190" textAnchor="middle" fontSize="9" fill="#085041">결재 / 사용자</text>

      {/* Redis */}
      <rect x="578" y="240" width="110" height="36" rx="6" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1.5" />
      <text x="633" y="257" textAnchor="middle" fontSize="11" fill="#085041" fontWeight="600">Redis</text>
      <text x="633" y="270" textAnchor="middle" fontSize="9" fill="#085041">세션 / 캐시</text>

      {/* === ARROWS === */}

      {/* Services → API Gateway */}
      <line x1="132" y1="73" x2="220" y2="165" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />
      <line x1="132" y1="138" x2="220" y2="165" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />
      <line x1="132" y1="203" x2="220" y2="178" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />
      <line x1="132" y1="268" x2="220" y2="178" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />

      {/* API Gateway → RabbitMQ (async, dashed) */}
      <line x1="330" y1="172" x2="380" y2="172" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#erp-am)" />

      {/* RabbitMQ → MongoDB */}
      <line x1="530" y1="158" x2="578" y2="108" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />

      {/* RabbitMQ → MySQL */}
      <line x1="530" y1="172" x2="578" y2="178" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />

      {/* RabbitMQ → Redis */}
      <line x1="530" y1="185" x2="578" y2="248" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#erp-a)" />

      {/* Legend */}
      <g transform="translate(18, 320)">
        <line x1="0" y1="5" x2="18" y2="5" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="18" cy="5" r="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
        <text x="24" y="9" fontSize="9" fill="#9ca3af">동기 호출</text>
        <line x1="90" y1="5" x2="108" y2="5" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="108" cy="5" r="3" fill="white" stroke="#a78bfa" strokeWidth="1" />
        <text x="114" y="9" fontSize="9" fill="#9ca3af">비동기 메시지</text>
      </g>
    </svg>
  )
}

export default function ErpArch() {
  return (
    <svg viewBox="0 0 820 405" className="w-full h-auto">
      <defs>
        <marker id="ea-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="ea-o" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f97316" />
        </marker>
        <marker id="ea-p" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#8b5cf6" />
        </marker>
        <marker id="ea-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#059669" />
        </marker>
      </defs>

      {/* K8s box */}
      <rect x="14" y="24" width="792" height="352" rx="8" fill="none" stroke="#2563a8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
      <text x="400" y="37" textAnchor="middle" fontSize="9" fill="#2563a8" opacity="0.7" fontWeight="600">Kubernetes Cluster — erp namespace</text>

      {/* ── Employee Service ── */}
      <rect x="24" y="50" width="180" height="90" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="24" y="50" width="180" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="114" y="63" textAnchor="middle" fontSize="9" fill="#1e3a8a" fontWeight="700">Employee Service</text>
      <text x="114" y="80" textAnchor="middle" fontSize="7" fill="#1d4ed8">FastAPI + SQLAlchemy 2.x (asyncmy)</text>
      <text x="114" y="92" textAnchor="middle" fontSize="7" fill="#475569">직원 · 근태 · 연차 관리</text>
      <text x="114" y="104" textAnchor="middle" fontSize="7" fill="#475569">REST :8001 | Port 8000 (K8s)</text>
      <text x="114" y="116" textAnchor="middle" fontSize="7" fill="#64748b">/employees /attendance /leaves</text>
      <text x="114" y="128" textAnchor="middle" fontSize="7" fill="#64748b">caching_sha2_password + cryptography</text>

      {/* MySQL */}
      <rect x="215" y="62" width="100" height="66" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="265" y="78" textAnchor="middle" fontSize="8" fill="#15803d" fontWeight="700">MySQL 8</text>
      <text x="265" y="90" textAnchor="middle" fontSize="7" fill="#15803d">employees</text>
      <text x="265" y="102" textAnchor="middle" fontSize="7" fill="#15803d">attendance_records</text>
      <text x="265" y="114" textAnchor="middle" fontSize="7" fill="#15803d">leave_records</text>

      {/* MongoDB */}
      <rect x="428" y="62" width="96" height="66" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="476" y="78" textAnchor="middle" fontSize="8" fill="#15803d" fontWeight="700">MongoDB</text>
      <text x="476" y="90" textAnchor="middle" fontSize="7" fill="#15803d">approvals (Collection)</text>
      <text x="476" y="102" textAnchor="middle" fontSize="7" fill="#15803d">결재 문서 · 단계 이력</text>
      <text x="476" y="114" textAnchor="middle" fontSize="7" fill="#15803d">Motor async ODM</text>

      {/* ── Approval Request Service ── */}
      <rect x="532" y="50" width="204" height="90" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="532" y="50" width="204" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="634" y="63" textAnchor="middle" fontSize="9" fill="#1e3a8a" fontWeight="700">Approval Request Service</text>
      <text x="634" y="80" textAnchor="middle" fontSize="7" fill="#1d4ed8">FastAPI + Motor (MongoDB async)</text>
      <text x="634" y="92" textAnchor="middle" fontSize="7" fill="#475569">결재 요청 생성 · 상태 관리</text>
      <text x="634" y="104" textAnchor="middle" fontSize="7" fill="#475569">REST :8002 | Port 8000 (K8s)</text>
      <text x="634" y="116" textAnchor="middle" fontSize="7" fill="#64748b">POST/GET /approvals</text>
      <text x="634" y="128" textAnchor="middle" fontSize="7" fill="#8b5cf6">→ Publish approval.work</text>

      {/* RabbitMQ */}
      <rect x="326" y="166" width="148" height="58" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="400" y="184" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="700">RabbitMQ</text>
      <text x="400" y="196" textAnchor="middle" fontSize="7" fill="#b45309">Queue: approval.work</text>
      <text x="400" y="208" textAnchor="middle" fontSize="7" fill="#b45309">비동기 결재 작업 큐 (K8s)</text>
      <text x="400" y="219" textAnchor="middle" fontSize="7" fill="#92400e">Port: 5672 / aio-pika</text>

      {/* ── Notification Service ── */}
      <rect x="24" y="266" width="180" height="90" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <rect x="24" y="266" width="180" height="18" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
      <text x="114" y="279" textAnchor="middle" fontSize="9" fill="#14532d" fontWeight="700">Notification Service</text>
      <text x="114" y="296" textAnchor="middle" fontSize="7" fill="#16a34a">FastAPI + WebSocket (native)</text>
      <text x="114" y="308" textAnchor="middle" fontSize="7" fill="#475569">실시간 결재 알림 푸시</text>
      <text x="114" y="320" textAnchor="middle" fontSize="7" fill="#475569">{"WS :8004 → /ws/{employeeId}"}</text>
      <text x="114" y="332" textAnchor="middle" fontSize="7" fill="#64748b">In-memory 연결 관리</text>
      <text x="114" y="344" textAnchor="middle" fontSize="7" fill="#64748b">결재자에게 실시간 Push</text>

      {/* ── Approval Processing Service ── */}
      <rect x="532" y="266" width="204" height="90" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <rect x="532" y="266" width="204" height="18" rx="6" fill="#dbeafe" stroke="#2563a8" strokeWidth="1.5" />
      <text x="634" y="279" textAnchor="middle" fontSize="9" fill="#1e3a8a" fontWeight="700">Approval Processing Service</text>
      <text x="634" y="296" textAnchor="middle" fontSize="7" fill="#1d4ed8">FastAPI + aio-pika</text>
      <text x="634" y="308" textAnchor="middle" fontSize="7" fill="#475569">결재 승인 · 반려 처리</text>
      <text x="634" y="320" textAnchor="middle" fontSize="7" fill="#475569">REST :8003 | Port 8000 (K8s)</text>
      <text x="634" y="332" textAnchor="middle" fontSize="7" fill="#8b5cf6">Subscribe ← approval.work</text>
      <text x="634" y="344" textAnchor="middle" fontSize="7" fill="#64748b">처리 후 → ARS 결과 콜백</text>

      {/* ── ARROWS ── */}

      {/* ES → MySQL */}
      <line x1="204" y1="95" x2="215" y2="95" stroke="#16a34a" strokeWidth="1.2" markerEnd="url(#ea-g)" />

      {/* ARS → MongoDB */}
      <line x1="532" y1="95" x2="524" y2="95" stroke="#16a34a" strokeWidth="1.2" markerEnd="url(#ea-g)" />

      {/* ARS → ES (직원 검증, 연차 확정) — route above services */}
      <path d="M532,50 L532,44 L204,44 L204,50" stroke="#f97316" strokeWidth="1.2" fill="none" markerEnd="url(#ea-o)" />
      <text x="368" y="41" textAnchor="middle" fontSize="7" fill="#f97316">직원 검증 · 연차 확정 (REST)</text>

      {/* ARS → NS (알림 요청) — route through row gap */}
      <path d="M532,140 L532,250 L204,250 L204,266" stroke="#f97316" strokeWidth="1.2" fill="none" markerEnd="url(#ea-o)" />
      <text x="368" y="246" textAnchor="middle" fontSize="7" fill="#f97316">알림 요청 (REST)</text>

      {/* ARS → RabbitMQ (Publish) */}
      <path d="M634,140 L634,160 L474,160 L474,166" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#ea-p)" />
      <text x="556" y="157" textAnchor="middle" fontSize="7" fill="#8b5cf6">Publish</text>

      {/* RabbitMQ → APS (Subscribe) */}
      <path d="M400,224 L400,248 L634,248 L634,266" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" fill="none" markerEnd="url(#ea-p)" />
      <text x="517" y="244" textAnchor="middle" fontSize="7" fill="#8b5cf6">Subscribe</text>

      {/* APS → ARS (결과 콜백) — right side path */}
      <path d="M736,300 L756,300 L756,95 L736,95" stroke="#f97316" strokeWidth="1.2" fill="none" markerEnd="url(#ea-o)" />
      <text x="762" y="197" fontSize="7" fill="#f97316">결과 콜백</text>

      {/* Legend */}
      <g transform="translate(14, 386)">
        <line x1="0" y1="5" x2="16" y2="5" stroke="#16a34a" strokeWidth="1.2" />
        <text x="20" y="9" fontSize="8" fill="#9ca3af">DB 연결</text>
        <line x1="68" y1="5" x2="84" y2="5" stroke="#f97316" strokeWidth="1.2" />
        <text x="88" y="9" fontSize="8" fill="#9ca3af">내부 REST (동기)</text>
        <line x1="192" y1="5" x2="208" y2="5" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="212" y="9" fontSize="8" fill="#9ca3af">RabbitMQ (비동기)</text>
      </g>
    </svg>
  )
}

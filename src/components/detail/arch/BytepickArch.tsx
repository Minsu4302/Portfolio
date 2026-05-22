export default function BytepickArch() {
  return (
    <svg viewBox="0 0 720 380" className="w-full h-auto">
      <defs>
        <marker id="bp-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="bp-am" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#a78bfa" />
        </marker>
        <marker id="bp-ae" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#f87171" />
        </marker>
      </defs>

      {/* Section labels */}
      <text x="22" y="15" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">CLIENT</text>
      <text x="22" y="105" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">BACKEND</text>
      <text x="22" y="195" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">AWS</text>
      <text x="22" y="282" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">CI/CD</text>
      <text x="382" y="105" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">MONITORING</text>
      <text x="540" y="105" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">EXTERNAL</text>

      {/* Separator */}
      <line x1="358" y1="20" x2="358" y2="360" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />

      {/* Mobile App */}
      <rect x="62" y="22" width="110" height="34" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="117" y="44" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="500">Mobile App</text>

      {/* Spring Boot */}
      <rect x="32" y="112" width="150" height="36" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="107" y="135" textAnchor="middle" fontSize="12" fill="#1a2940" fontWeight="700">Spring Boot API</text>

      {/* S3 */}
      <rect x="22" y="205" width="76" height="32" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="60" y="225" textAnchor="middle" fontSize="11" fill="#085041">AWS S3</text>

      {/* RDS */}
      <rect x="113" y="205" width="76" height="32" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="151" y="225" textAnchor="middle" fontSize="11" fill="#085041">AWS RDS</text>

      {/* ECR/EC2 */}
      <rect x="204" y="205" width="82" height="32" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="245" y="225" textAnchor="middle" fontSize="11" fill="#085041">ECR / EC2</text>

      {/* Blue-Green */}
      <rect x="88" y="290" width="130" height="32" rx="4" fill="#faeeda" stroke="#854f0b" strokeWidth="1" />
      <text x="153" y="311" textAnchor="middle" fontSize="11" fill="#633806" fontWeight="500">Blue-Green 배포</text>

      {/* Prometheus */}
      <rect x="382" y="112" width="110" height="32" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="437" y="132" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Prometheus</text>

      {/* Grafana */}
      <rect x="382" y="200" width="110" height="32" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="437" y="220" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Grafana</text>

      {/* Alertmanager */}
      <rect x="382" y="288" width="130" height="32" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="447" y="308" textAnchor="middle" fontSize="11" fill="#3c3489" fontWeight="500">Alertmanager</text>

      {/* External: PortOne + FCM */}
      <rect x="537" y="112" width="145" height="58" rx="4" fill="#faece7" stroke="#993c1d" strokeWidth="1" strokeDasharray="4 2" />
      <text x="609" y="135" textAnchor="middle" fontSize="11" fill="#712b13" fontWeight="500">PortOne</text>
      <text x="609" y="155" textAnchor="middle" fontSize="11" fill="#712b13" fontWeight="500">FCM (APNs)</text>

      {/* === ARROWS === */}

      {/* Mobile → Spring Boot */}
      <line x1="117" y1="56" x2="107" y2="112" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#bp-a)" />

      {/* Spring Boot → S3 */}
      <line x1="72" y1="148" x2="60" y2="205" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#bp-a)" />

      {/* Spring Boot → RDS */}
      <line x1="120" y1="148" x2="151" y2="205" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#bp-a)" />

      {/* Spring Boot → ECR */}
      <line x1="162" y1="148" x2="232" y2="205" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#bp-a)" />

      {/* ECR → Blue-Green */}
      <line x1="228" y1="237" x2="182" y2="290" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#bp-a)" />

      {/* Spring Boot --metrics--> Prometheus (dashed purple) */}
      <line x1="182" y1="128" x2="382" y2="128" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#bp-am)" />

      {/* Prometheus → Grafana */}
      <line x1="437" y1="144" x2="437" y2="200" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#bp-a)" />

      {/* Grafana --alerts--> Alertmanager (dashed) */}
      <line x1="437" y1="232" x2="447" y2="288" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#bp-am)" />

      {/* External --call--> Spring Boot (dashed red, elbow) */}
      <path d="M537,141 L490,141 L490,128 L182,128" stroke="#f87171" strokeWidth="1" strokeDasharray="4 2" fill="none" markerEnd="url(#bp-ae)" />

      {/* Legend */}
      <g transform="translate(22, 352)">
        <line x1="0" y1="5" x2="18" y2="5" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="18" cy="5" r="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
        <text x="24" y="9" fontSize="9" fill="#9ca3af">동기 호출</text>
        <line x1="90" y1="5" x2="108" y2="5" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="108" cy="5" r="3" fill="white" stroke="#a78bfa" strokeWidth="1" />
        <text x="114" y="9" fontSize="9" fill="#9ca3af">비동기 / 메트릭</text>
        <line x1="214" y1="5" x2="232" y2="5" stroke="#f87171" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="232" cy="5" r="3" fill="white" stroke="#f87171" strokeWidth="1" />
        <text x="238" y="9" fontSize="9" fill="#9ca3af">외부 연동</text>
      </g>
    </svg>
  )
}

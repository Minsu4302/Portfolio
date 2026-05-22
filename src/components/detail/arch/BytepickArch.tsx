export default function BytepickArch() {
  return (
    <svg viewBox="0 0 800 480" className="w-full h-auto">
      <defs>
        <marker id="bp-a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#94a3b8" />
        </marker>
        <marker id="bp-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#3b82f6" />
        </marker>
        <marker id="bp-orange" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#f97316" />
        </marker>
        <marker id="bp-purple" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#a78bfa" />
        </marker>
        <marker id="bp-green" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#22c55e" />
        </marker>
      </defs>

      {/* ── DEVELOPER COLUMN ── */}
      {/* IntelliJ IDE */}
      <rect x="10" y="90" width="72" height="38" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="46" y="106" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">IntelliJ</text>
      <text x="46" y="119" textAnchor="middle" fontSize="8" fill="#f97316">IDE</text>

      {/* GitHub Actions */}
      <rect x="10" y="165" width="72" height="38" rx="6" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
      <text x="46" y="181" textAnchor="middle" fontSize="9" fontWeight="700" fill="#075985">GitHub</text>
      <text x="46" y="194" textAnchor="middle" fontSize="8" fill="#0284c7">Actions</text>

      {/* IDE → Actions */}
      <line x1="46" y1="128" x2="46" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <text x="50" y="150" fontSize="7" fill="#9ca3af">push</text>

      {/* ── ECR ── */}
      <rect x="107" y="165" width="68" height="38" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="141" y="181" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">AWS</text>
      <text x="141" y="194" textAnchor="middle" fontSize="8" fill="#f97316">ECR</text>

      {/* Actions → ECR */}
      <line x1="82" y1="184" x2="107" y2="184" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#bp-orange)" />
      <text x="92" y="178" fontSize="7" fill="#f97316">push</text>

      {/* ECR → DEV (up) */}
      <path d="M141,165 L141,118 L200,118" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#bp-orange)" />

      {/* ECR → PROD (down) */}
      <path d="M141,203 L141,305 L200,305" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#bp-orange)" />

      {/* ══ DEV ENVIRONMENT ══ */}
      <rect x="200" y="38" width="330" height="190" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="212" y="54" fontSize="9" fontWeight="700" fill="#475569" letterSpacing="1">DEV</text>

      {/* Blue side label */}
      <text x="270" y="74" textAnchor="middle" fontSize="7" fill="#3b82f6" fontWeight="600">Blue port: 8081</text>
      {/* Docker blue */}
      <rect x="215" y="80" width="54" height="32" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="242" y="93" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8">Docker</text>
      <text x="242" y="105" textAnchor="middle" fontSize="7" fill="#3b82f6">:8081</text>
      {/* Spring Boot blue */}
      <rect x="284" y="80" width="54" height="32" rx="5" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
      <text x="311" y="93" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Spring</text>
      <text x="311" y="105" textAnchor="middle" fontSize="7" fill="#16a34a">Boot</text>
      <line x1="269" y1="96" x2="284" y2="96" stroke="#3b82f6" strokeWidth="1.2" markerEnd="url(#bp-blue)" />

      {/* Green side label */}
      <text x="270" y="128" textAnchor="middle" fontSize="7" fill="#22c55e" fontWeight="600">Green port: 8082</text>
      {/* Docker green */}
      <rect x="215" y="134" width="54" height="32" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="242" y="147" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8">Docker</text>
      <text x="242" y="159" textAnchor="middle" fontSize="7" fill="#3b82f6">:8082</text>
      {/* Spring Boot green */}
      <rect x="284" y="134" width="54" height="32" rx="5" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
      <text x="311" y="147" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Spring</text>
      <text x="311" y="159" textAnchor="middle" fontSize="7" fill="#16a34a">Boot</text>
      <line x1="269" y1="150" x2="284" y2="150" stroke="#3b82f6" strokeWidth="1.2" markerEnd="url(#bp-blue)" />

      {/* Nginx DEV */}
      <rect x="358" y="90" width="52" height="62" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="384" y="119" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">N</text>
      <text x="384" y="131" textAnchor="middle" fontSize="7" fill="#16a34a">Nginx</text>
      <line x1="338" y1="96" x2="358" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <line x1="338" y1="150" x2="358" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />

      {/* SonarQube DEV */}
      <rect x="426" y="96" width="88" height="50" rx="5" fill="#faf5ff" stroke="#9333ea" strokeWidth="1" strokeDasharray="4 2" />
      <text x="470" y="115" textAnchor="middle" fontSize="8" fontWeight="600" fill="#7e22ce">SonarQube</text>
      <text x="470" y="127" textAnchor="middle" fontSize="7" fill="#9333ea">Quality Gate</text>
      <text x="470" y="139" textAnchor="middle" fontSize="7" fill="#9333ea">(DEV only)</text>
      <line x1="410" y1="121" x2="426" y2="121" stroke="#9333ea" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#bp-purple)" />

      {/* ══ PROD ENVIRONMENT ══ */}
      <rect x="200" y="265" width="330" height="190" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="212" y="281" fontSize="9" fontWeight="700" fill="#475569" letterSpacing="1">PROD</text>

      {/* Blue side label PROD */}
      <text x="270" y="301" textAnchor="middle" fontSize="7" fill="#3b82f6" fontWeight="600">Blue port: 8081</text>
      {/* Docker blue PROD */}
      <rect x="215" y="307" width="54" height="32" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="242" y="320" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8">Docker</text>
      <text x="242" y="332" textAnchor="middle" fontSize="7" fill="#3b82f6">:8081</text>
      {/* Spring Boot blue PROD */}
      <rect x="284" y="307" width="54" height="32" rx="5" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
      <text x="311" y="320" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Spring</text>
      <text x="311" y="332" textAnchor="middle" fontSize="7" fill="#16a34a">Boot</text>
      <line x1="269" y1="323" x2="284" y2="323" stroke="#3b82f6" strokeWidth="1.2" markerEnd="url(#bp-blue)" />

      {/* Green side label PROD */}
      <text x="270" y="355" textAnchor="middle" fontSize="7" fill="#22c55e" fontWeight="600">Green port: 8082</text>
      {/* Docker green PROD */}
      <rect x="215" y="361" width="54" height="32" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="242" y="374" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8">Docker</text>
      <text x="242" y="386" textAnchor="middle" fontSize="7" fill="#3b82f6">:8082</text>
      {/* Spring Boot green PROD */}
      <rect x="284" y="361" width="54" height="32" rx="5" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
      <text x="311" y="374" textAnchor="middle" fontSize="8" fontWeight="600" fill="#15803d">Spring</text>
      <text x="311" y="386" textAnchor="middle" fontSize="7" fill="#16a34a">Boot</text>
      <line x1="269" y1="377" x2="284" y2="377" stroke="#3b82f6" strokeWidth="1.2" markerEnd="url(#bp-blue)" />

      {/* Nginx PROD */}
      <rect x="358" y="317" width="52" height="62" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="384" y="346" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">N</text>
      <text x="384" y="358" textAnchor="middle" fontSize="7" fill="#16a34a">Nginx</text>
      <line x1="338" y1="323" x2="358" y2="337" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <line x1="338" y1="377" x2="358" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />

      {/* ── USERS ── */}
      <circle cx="570" cy="348" r="14" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <text x="570" y="353" textAnchor="middle" fontSize="8" fill="#334155">👤</text>
      <text x="570" y="373" textAnchor="middle" fontSize="8" fill="#64748b">Users</text>

      {/* PROD Nginx → Users */}
      <line x1="410" y1="348" x2="556" y2="348" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#bp-a)" />

      {/* ── S3 PRE-SIGNED URL FLOW (bottom) ── */}
      {/* PNG file */}
      <rect x="10" y="428" width="50" height="34" rx="5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
      <text x="35" y="443" textAnchor="middle" fontSize="8" fontWeight="600" fill="#475569">PNG</text>
      <text x="35" y="455" textAnchor="middle" fontSize="7" fill="#64748b">image</text>

      {/* S3 */}
      <rect x="80" y="428" width="60" height="34" rx="5" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1.5" />
      <text x="110" y="443" textAnchor="middle" fontSize="9" fontWeight="600" fill="#085041">AWS S3</text>
      <text x="110" y="455" textAnchor="middle" fontSize="7" fill="#0f6e56">Bucket</text>

      {/* Pre-Signed URL */}
      <rect x="162" y="428" width="110" height="34" rx="5" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
      <text x="217" y="443" textAnchor="middle" fontSize="8" fontWeight="600" fill="#92400e">Pre-Signed URL</text>
      <text x="217" y="455" textAnchor="middle" fontSize="7" fill="#b45309">발급 (서버 경유 없음)</text>

      {/* Users (S3) */}
      <circle cx="310" cy="445" r="12" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <text x="310" y="450" textAnchor="middle" fontSize="7" fill="#334155">👤</text>
      <text x="310" y="465" textAnchor="middle" fontSize="7" fill="#64748b">Users</text>

      {/* PNG → S3 → Pre-Signed → Users */}
      <line x1="60" y1="445" x2="80" y2="445" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <line x1="140" y1="445" x2="162" y2="445" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <line x1="272" y1="445" x2="298" y2="445" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />

      {/* Spring Boot (PROD) → S3 (Pre-Signed 발급) */}
      <path d="M311,339 L311,420 L217,420 L217,428" stroke="#ca8a04" strokeWidth="1" strokeDasharray="4 2" fill="none" markerEnd="url(#bp-a)" />
      <text x="260" y="416" fontSize="7" fill="#b45309">URL 발급 요청</text>

      {/* ── MONITORING (right) ── */}
      <rect x="625" y="38" width="160" height="210" rx="10" fill="#faf5ff" stroke="#9333ea" strokeWidth="1" strokeDasharray="4 3" />
      <text x="636" y="54" fontSize="9" fontWeight="700" fill="#7e22ce" letterSpacing="1">MONITORING</text>

      {/* ECR (monitoring) */}
      <rect x="640" y="62" width="60" height="32" rx="5" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="670" y="75" textAnchor="middle" fontSize="8" fontWeight="600" fill="#c2410c">AWS</text>
      <text x="670" y="87" textAnchor="middle" fontSize="7" fill="#f97316">ECR</text>

      {/* Docker (monitoring) */}
      <rect x="640" y="112" width="60" height="32" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="670" y="125" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1d4ed8">Docker</text>
      <text x="670" y="137" textAnchor="middle" fontSize="7" fill="#3b82f6">container</text>

      {/* Grafana */}
      <rect x="640" y="162" width="60" height="32" rx="5" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="670" y="178" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">Grafana</text>

      {/* Prometheus */}
      <rect x="640" y="212" width="60" height="32" rx="5" fill="#fff1f2" stroke="#e11d48" strokeWidth="1.5" />
      <text x="670" y="228" textAnchor="middle" fontSize="8" fontWeight="600" fill="#be123c">Prome-</text>
      <text x="670" y="238" textAnchor="middle" fontSize="7" fill="#e11d48">theus</text>

      {/* ECR → Docker → Grafana → Prometheus */}
      <line x1="670" y1="94" x2="670" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <line x1="670" y1="144" x2="670" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />
      <line x1="670" y1="194" x2="670" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bp-a)" />

      {/* Spring Boot (PROD) --metrics--> Prometheus */}
      <path d="M338,323 L338,228 L640,228" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" fill="none" markerEnd="url(#bp-purple)" />
      <text x="480" y="220" fontSize="7" fill="#a78bfa">metrics</text>

      {/* ── LEGEND ── */}
      <g transform="translate(10, 470)">
        <line x1="0" y1="4" x2="16" y2="4" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="20" y="8" fontSize="8" fill="#9ca3af">동기 호출</text>
        <line x1="90" y1="4" x2="106" y2="4" stroke="#f97316" strokeWidth="1.2" />
        <text x="110" y="8" fontSize="8" fill="#9ca3af">ECR 배포</text>
        <line x1="180" y1="4" x2="196" y2="4" stroke="#a78bfa" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="200" y="8" fontSize="8" fill="#9ca3af">메트릭 수집</text>
        <line x1="280" y1="4" x2="296" y2="4" stroke="#ca8a04" strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="300" y="8" fontSize="8" fill="#9ca3af">Pre-Signed URL</text>
      </g>
    </svg>
  )
}

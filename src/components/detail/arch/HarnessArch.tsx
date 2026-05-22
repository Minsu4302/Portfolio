export default function HarnessArch() {
  return (
    <svg viewBox="0 0 720 360" className="w-full h-auto">
      <defs>
        <marker id="hn-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="hn-ab" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#2563a8" />
        </marker>
      </defs>

      {/* Region labels */}
      <text x="18" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">LOCAL — HARNESS</text>
      <text x="448" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">CLOUD — GCP ORCHESTRATION</text>

      {/* Separator */}
      <line x1="400" y1="20" x2="400" y2="340" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />

      {/* === LEFT: Harness === */}

      {/* Developer */}
      <rect x="18" y="140" width="80" height="36" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="58" y="163" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="500">Developer</text>

      {/* Harness 로컬 (big box) */}
      <rect x="126" y="80" width="200" height="160" rx="8" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="226" y="103" textAnchor="middle" fontSize="12" fill="#1a2940" fontWeight="700">Harness 로컬</text>
      <line x1="134" y1="110" x2="318" y2="110" stroke="#2563a8" strokeWidth="0.5" opacity="0.3" />
      <text x="226" y="128" textAnchor="middle" fontSize="9" fill="#2563a8">CoT 출력 토큰 -75%</text>
      <text x="226" y="144" textAnchor="middle" fontSize="9" fill="#2563a8">MMR 재랭킹 + RAG 캐시</text>
      <text x="226" y="160" textAnchor="middle" fontSize="9" fill="#2563a8">세션 압축 600줄 → 9줄 (-98%)</text>
      <text x="226" y="176" textAnchor="middle" fontSize="9" fill="#2563a8">린터 9개 자동화 (89%)</text>
      <text x="226" y="196" textAnchor="middle" fontSize="9" fill="#6b7280">SoT + complexity 분기</text>
      <text x="226" y="210" textAnchor="middle" fontSize="9" fill="#6b7280">cksum 캐시 · MMR λ=0.5</text>
      <text x="226" y="224" textAnchor="middle" fontSize="9" fill="#6b7280">C01–C09 커밋·CI 자동 차단</text>

      {/* Git Commit → PR */}
      <rect x="348" y="140" width="100" height="36" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1" />
      <text x="398" y="157" textAnchor="middle" fontSize="10" fill="#633806" fontWeight="600">Git Commit</text>
      <text x="398" y="170" textAnchor="middle" fontSize="9" fill="#633806">PR Open</text>

      {/* === RIGHT: Cloud === */}

      {/* GitHub Actions */}
      <rect x="428" y="80" width="130" height="36" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="493" y="103" textAnchor="middle" fontSize="11" fill="#334155" fontWeight="500">GitHub Actions</text>

      {/* GCP Spring Boot */}
      <rect x="418" y="168" width="170" height="60" rx="6" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="503" y="190" textAnchor="middle" fontSize="12" fill="#1a2940" fontWeight="700">GCP Orchestration</text>
      <text x="503" y="207" textAnchor="middle" fontSize="9" fill="#2563a8">Spring Boot · PR diff 분석</text>
      <text x="503" y="220" textAnchor="middle" fontSize="9" fill="#6b7280">CompletableFuture 병렬 실행</text>

      {/* 3 Agents */}
      <rect x="418" y="278" width="90" height="36" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="463" y="295" textAnchor="middle" fontSize="10" fill="#3c3489" fontWeight="500">Review</text>
      <text x="463" y="308" textAnchor="middle" fontSize="9" fill="#3c3489">Claude 4.6</text>

      <rect x="523" y="278" width="90" height="36" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="568" y="295" textAnchor="middle" fontSize="10" fill="#3c3489" fontWeight="500">Security</text>
      <text x="568" y="308" textAnchor="middle" fontSize="9" fill="#3c3489">Gemini Flash</text>

      <rect x="628" y="278" width="80" height="36" rx="4" fill="#eeedfe" stroke="#534ab7" strokeWidth="1" />
      <text x="668" y="295" textAnchor="middle" fontSize="10" fill="#3c3489" fontWeight="500">Test-Gen</text>
      <text x="668" y="308" textAnchor="middle" fontSize="9" fill="#3c3489">GPT-4o</text>

      {/* PR Comment (result) */}
      <rect x="540" y="80" width="120" height="36" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="600" y="97" textAnchor="middle" fontSize="10" fill="#085041" fontWeight="500">PR Comment</text>
      <text x="600" y="110" textAnchor="middle" fontSize="9" fill="#085041">&lt;details&gt; 토글 UI</text>

      {/* === ARROWS === */}

      {/* Developer → Harness */}
      <line x1="98" y1="158" x2="126" y2="158" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#hn-a)" />

      {/* Harness → Git Commit */}
      <line x1="326" y1="158" x2="348" y2="158" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#hn-a)" />

      {/* Git Commit → GitHub Actions (elbow) */}
      <path d="M398,140 L398,98 L428,98" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#hn-a)" />

      {/* GitHub Actions → GCP */}
      <line x1="493" y1="116" x2="503" y2="168" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#hn-a)" />

      {/* GCP → Review */}
      <line x1="463" y1="228" x2="463" y2="278" stroke="#2563a8" strokeWidth="1" markerEnd="url(#hn-ab)" />

      {/* GCP → Security */}
      <line x1="503" y1="228" x2="568" y2="278" stroke="#2563a8" strokeWidth="1" markerEnd="url(#hn-ab)" />

      {/* GCP → Test-Gen */}
      <line x1="540" y1="228" x2="650" y2="278" stroke="#2563a8" strokeWidth="1" markerEnd="url(#hn-ab)" />

      {/* GitHub Actions → PR Comment */}
      <line x1="558" y1="98" x2="540" y2="98" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#hn-a)" />

      {/* Legend */}
      <g transform="translate(18, 320)">
        <line x1="0" y1="5" x2="18" y2="5" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="18" cy="5" r="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
        <text x="24" y="9" fontSize="9" fill="#9ca3af">동기 호출</text>
        <line x1="90" y1="5" x2="108" y2="5" stroke="#2563a8" strokeWidth="1" />
        <circle cx="108" cy="5" r="3" fill="white" stroke="#2563a8" strokeWidth="1" />
        <text x="114" y="9" fontSize="9" fill="#9ca3af">병렬 에이전트 실행</text>
      </g>
    </svg>
  )
}

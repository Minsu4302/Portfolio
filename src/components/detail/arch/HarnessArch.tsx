export default function HarnessArch() {
  return (
    <svg viewBox="0 0 880 600" className="w-full h-auto">
      <defs>
        <marker id="hn-a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#94a3b8" />
        </marker>
        <marker id="hn-b" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#2563a8" />
        </marker>
        <marker id="hn-g" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#22c55e" />
        </marker>
        <marker id="hn-p" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#9333ea" />
        </marker>
        <marker id="hn-o" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#f97316" />
        </marker>
        <marker id="hn-y" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#ca8a04" />
        </marker>
        <marker id="hn-r" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#dc2626" />
        </marker>
        <marker id="hn-c" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <path d="M0,0 L7,2.5 L0,5 Z" fill="#0891b2" />
        </marker>
      </defs>

      {/* ══ SECTION LABELS ══ */}
      <text x="12" y="13" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">LOCAL — HARNESS</text>
      <text x="352" y="13" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">CI / CD</text>
      <text x="500" y="13" fontSize="8" fontWeight="700" fill="#9ca3af" letterSpacing="1">GCP — ORCHESTRATION</text>

      {/* ══════════════════════════════════════════
          LOCAL HARNESS BOX
      ══════════════════════════════════════════ */}
      <rect x="10" y="22" width="320" height="530" rx="10" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* Developer */}
      <rect x="22" y="35" width="72" height="34" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.2" />
      <text x="58" y="50" textAnchor="middle" fontSize="8" fontWeight="700" fill="#334155">Developer</text>
      <text x="58" y="62" textAnchor="middle" fontSize="7" fill="#64748b">Claude Code</text>

      {/* context-loader.sh */}
      <rect x="108" y="35" width="210" height="34" rx="5" fill="#fff" stroke="#2563a8" strokeWidth="1.2" />
      <text x="213" y="50" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1a2940">context-loader.sh</text>
      <text x="213" y="63" textAnchor="middle" fontSize="7" fill="#2563a8">CoT 템플릿 주입 · 세션 버퍼 로드</text>

      {/* Developer → context-loader */}
      <line x1="94" y1="52" x2="108" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />

      {/* ── RAG LAYER ── */}
      <rect x="22" y="82" width="296" height="140" rx="7" fill="#fff" stroke="#9333ea" strokeWidth="1" strokeDasharray="4 2" />
      <text x="34" y="96" fontSize="7" fontWeight="700" fill="#7e22ce" letterSpacing="0.5">RAG LAYER</text>

      {/* A3 */}
      <rect x="30" y="104" width="130" height="40" rx="4" fill="#faf5ff" stroke="#9333ea" strokeWidth="1" />
      <text x="95" y="119" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">A3 · doc-compress.sh</text>
      <text x="95" y="132" textAnchor="middle" fontSize="7" fill="#9333ea">51줄 → 30줄 (-41%)</text>

      {/* A2 */}
      <rect x="172" y="104" width="132" height="40" rx="4" fill="#faf5ff" stroke="#9333ea" strokeWidth="1" />
      <text x="238" y="119" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">A2 · 쿼리 해시 캐시</text>
      <text x="238" y="132" textAnchor="middle" fontSize="7" fill="#9333ea">재검색 비용 0</text>

      {/* B1 */}
      <rect x="30" y="154" width="130" height="40" rx="4" fill="#faf5ff" stroke="#9333ea" strokeWidth="1" />
      <text x="95" y="169" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">B1 · MMR 재랭킹</text>
      <text x="95" y="182" textAnchor="middle" fontSize="7" fill="#9333ea">λ=0.5 중복 페널티</text>

      {/* B2 */}
      <rect x="172" y="154" width="132" height="40" rx="4" fill="#faf5ff" stroke="#9333ea" strokeWidth="1" />
      <text x="238" y="169" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">B2 · 세션 버퍼 압축</text>
      <text x="238" y="182" textAnchor="middle" fontSize="7" fill="#9333ea">60줄 → 1줄 (-98%)</text>

      {/* context-loader → RAG (down) */}
      <line x1="213" y1="69" x2="213" y2="82" stroke="#9333ea" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#hn-p)" />

      {/* RAG LAYER → SoT (RAG 결과를 SoT 분기에 활용) */}
      <line x1="243" y1="222" x2="243" y2="242" stroke="#9333ea" strokeWidth="1.2" markerEnd="url(#hn-p)" />

      {/* ── gc-agent & SoT row ── */}
      {/* gc-agent: 세션 중 독립 실행 (RAG와 무관) */}
      <rect x="22" y="242" width="135" height="46" rx="5" fill="#fff" stroke="#f97316" strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="89" y="256" textAnchor="middle" fontSize="8" fontWeight="700" fill="#c2410c">gc-agent.sh</text>
      <text x="89" y="268" textAnchor="middle" fontSize="7" fill="#f97316">예산 80% 감지 → GC 실행</text>
      <text x="89" y="280" textAnchor="middle" fontSize="7" fill="#9ca3af">세션 중 독립 실행</text>

      <rect x="168" y="242" width="150" height="46" rx="5" fill="#fff" stroke="#2563a8" strokeWidth="1.2" />
      <text x="243" y="257" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1a2940">SoT + complexity 분기</text>
      <text x="243" y="270" textAnchor="middle" fontSize="7" fill="#2563a8">RAG 결과 → CoT 출력 토큰 -75%</text>

      {/* ── constraint-check.sh ── */}
      <rect x="22" y="306" width="296" height="40" rx="5" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.2" />
      <text x="170" y="321" textAnchor="middle" fontSize="8" fontWeight="700" fill="#92400e">constraint-check.sh</text>
      <text x="170" y="334" textAnchor="middle" fontSize="7" fill="#b45309">C01~C10 자동 검증 · 커밋·CI 차단 (자동화율 90%)</text>

      {/* gc-agent & SoT → constraint */}
      <line x1="89" y1="288" x2="89" y2="306" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#hn-a)" />
      <line x1="243" y1="288" x2="243" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />

      {/* ── loop-runner.sh (L1 PEV Loop) ── */}
      <rect x="22" y="364" width="296" height="46" rx="5" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.2" />
      <text x="170" y="379" textAnchor="middle" fontSize="8" fontWeight="700" fill="#991b1b">L1 · loop-runner.sh (PEV 루프)</text>
      <text x="170" y="391" textAnchor="middle" fontSize="7" fill="#dc2626">FAIL → 실패 컨텍스트 재주입 → 재시도 (최대 3회)</text>
      <text x="170" y="403" textAnchor="middle" fontSize="7" fill="#dc2626">C10 · 3회 초과 → 태스크 분할 강제</text>

      {/* constraint → loop-runner */}
      <line x1="170" y1="346" x2="170" y2="364" stroke="#dc2626" strokeWidth="1.2" markerEnd="url(#hn-r)" />

      {/* loop-runner FAIL retry (self-loop back to constraint-check) */}
      <path d="M318,387 C 340,387 340,326 318,326" stroke="#dc2626" strokeWidth="1.2" fill="none" strokeDasharray="3 2" markerEnd="url(#hn-r)" />
      <text x="344" y="360" fontSize="7" fill="#dc2626" transform="rotate(-90,344,360)">FAIL 재시도</text>

      {/* ── git push / PR Open ── */}
      <rect x="22" y="428" width="296" height="38" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="170" y="443" textAnchor="middle" fontSize="9" fontWeight="700" fill="#15803d">git push / PR Open</text>
      <text x="170" y="457" textAnchor="middle" fontSize="7" fill="#16a34a">PASS 시 → GitHub Actions 트리거</text>

      {/* loop-runner → git push (PASS) */}
      <line x1="170" y1="410" x2="170" y2="428" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#hn-g)" />
      <text x="176" y="422" fontSize="7" fill="#16a34a">PASS</text>

      {/* ── reflect-agent.sh (L2 Reflection Agent) ── */}
      <rect x="22" y="484" width="296" height="38" rx="5" fill="#ecfeff" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="170" y="499" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0e7490">L2 · reflect-agent.sh (Reflection Agent)</text>
      <text x="170" y="512" textAnchor="middle" fontSize="7" fill="#0891b2">세션 종료 → 태스크·루프 히스토리 분석 → reflection.md 갱신</text>

      {/* git push → reflect-agent */}
      <line x1="170" y1="466" x2="170" y2="484" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />

      {/* reflect-agent → context-loader.sh (다음 세션 자동 주입, feedback loop) */}
      <path d="M22,503 L4,503 L4,52 L22,52" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="3 2" fill="none" markerEnd="url(#hn-c)" />
      <text x="8" y="280" fontSize="7" fill="#0891b2" transform="rotate(-90,8,280)">다음 세션 자동 주입</text>

      {/* ══════════════════════════════════════════
          GITHUB ACTIONS (CI/CD BRIDGE)
      ══════════════════════════════════════════ */}
      <rect x="340" y="22" width="126" height="420" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" />

      {/* deploy.yml */}
      <rect x="351" y="80" width="104" height="56" rx="5" fill="#fff" stroke="#f97316" strokeWidth="1.5" />
      <text x="403" y="99" textAnchor="middle" fontSize="8" fontWeight="700" fill="#c2410c">deploy.yml</text>
      <text x="403" y="111" textAnchor="middle" fontSize="7" fill="#f97316">main push 감지</text>
      <text x="403" y="123" textAnchor="middle" fontSize="7" fill="#f97316">ghcr.io 빌드·푸시</text>

      {/* orchestrate.yml */}
      <rect x="351" y="260" width="104" height="56" rx="5" fill="#fff" stroke="#2563a8" strokeWidth="1.5" />
      <text x="403" y="279" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1a2940">orchestrate.yml</text>
      <text x="403" y="291" textAnchor="middle" fontSize="7" fill="#2563a8">PR 오픈·업데이트</text>
      <text x="403" y="303" textAnchor="middle" fontSize="7" fill="#2563a8">POST /api/orchestrate</text>

      {/* git push → deploy.yml (main push path) */}
      <path d="M318,442 L332,442 L332,108 L351,108" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#hn-o)" />
      <text x="326" y="260" fontSize="7" fill="#f97316" transform="rotate(-90,326,260)">main push</text>

      {/* git push → orchestrate.yml (PR open path) */}
      <path d="M318,448 L336,448 L336,288 L351,288" stroke="#2563a8" strokeWidth="1.5" fill="none" markerEnd="url(#hn-b)" />
      <text x="330" y="380" fontSize="7" fill="#2563a8" transform="rotate(-90,330,380)">PR open</text>

      {/* ══════════════════════════════════════════
          GCP — ORCHESTRATION
      ══════════════════════════════════════════ */}
      <rect x="478" y="22" width="392" height="420" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="1" strokeDasharray="4 3" />

      {/* ── 배포 파이프라인 (deploy.yml 타깃) ── 상단 별도 박스 */}
      <rect x="490" y="35" width="368" height="38" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
      <text x="674" y="50" textAnchor="middle" fontSize="8" fontWeight="700" fill="#c2410c">GCP 컨테이너 갱신</text>
      <text x="674" y="63" textAnchor="middle" fontSize="7" fill="#f97316">SSH 접속 → docker pull ghcr.io → 컨테이너 재시작 (서비스 최신 상태 유지)</text>

      {/* deploy.yml → GCP 컨테이너 갱신 */}
      <line x1="455" y1="108" x2="490" y2="54" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#hn-o)" />
      <text x="458" y="82" fontSize="7" fill="#f97316">SSH 재배포</text>

      {/* ── AI 파이프라인 시작: ContextPruner ── */}
      <rect x="490" y="92" width="368" height="38" rx="5" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="674" y="107" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1a2940">ContextPruner</text>
      <text x="674" y="120" textAnchor="middle" fontSize="7" fill="#2563a8">lock 제거 · 8,000자 트런케이트 · PR diff 전처리</text>

      {/* orchestrate.yml → ContextPruner */}
      <line x1="455" y1="288" x2="478" y2="288" stroke="#2563a8" strokeWidth="1.5" fill="none" />
      <path d="M478,288 L478,111 L490,111" stroke="#2563a8" strokeWidth="1.5" fill="none" markerEnd="url(#hn-b)" />
      <text x="461" y="207" fontSize="7" fill="#2563a8" transform="rotate(-90,461,207)">curl 요청</text>

      {/* ── OrchestratorService ── */}
      <rect x="490" y="148" width="368" height="40" rx="5" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="674" y="164" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1a2940">OrchestratorService (Claude Planner)</text>
      <text x="674" y="178" textAnchor="middle" fontSize="7" fill="#2563a8">PR diff 분석 → review / security / test-gen 동적 선택·스킵 결정</text>

      {/* ContextPruner → OrchestratorService */}
      <line x1="674" y1="130" x2="674" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />

      {/* 병렬 실행 label */}
      <text x="674" y="204" textAnchor="middle" fontSize="7" fill="#9ca3af">CompletableFuture 병렬 실행 · 120s 타임아웃 가드</text>

      {/* ── 3 Agents ── */}
      <rect x="490" y="212" width="112" height="56" rx="5" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.5" />
      <text x="546" y="229" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3c3489">Review Agent</text>
      <text x="546" y="241" textAnchor="middle" fontSize="7" fill="#534ab7">Claude Sonnet 4.6</text>
      <text x="546" y="253" textAnchor="middle" fontSize="7" fill="#9ca3af">코드 품질 검토</text>

      <rect x="618" y="212" width="112" height="56" rx="5" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.5" />
      <text x="674" y="229" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3c3489">Security Agent</text>
      <text x="674" y="241" textAnchor="middle" fontSize="7" fill="#534ab7">Gemini 1.5 Flash</text>
      <text x="674" y="253" textAnchor="middle" fontSize="7" fill="#9ca3af">보안 취약점 분석</text>

      <rect x="746" y="212" width="112" height="56" rx="5" fill="#eeedfe" stroke="#534ab7" strokeWidth="1.5" />
      <text x="802" y="229" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3c3489">Test-Gen Agent</text>
      <text x="802" y="241" textAnchor="middle" fontSize="7" fill="#534ab7">GPT-4o-mini</text>
      <text x="802" y="253" textAnchor="middle" fontSize="7" fill="#9ca3af">테스트 케이스 생성</text>

      {/* OrchestratorService → 3 Agents */}
      <line x1="546" y1="188" x2="546" y2="212" stroke="#2563a8" strokeWidth="1.2" markerEnd="url(#hn-b)" />
      <line x1="674" y1="188" x2="674" y2="212" stroke="#2563a8" strokeWidth="1.2" markerEnd="url(#hn-b)" />
      <line x1="802" y1="188" x2="802" y2="212" stroke="#2563a8" strokeWidth="1.2" markerEnd="url(#hn-b)" />

      {/* ── ConflictResolver ── */}
      <rect x="490" y="288" width="368" height="40" rx="5" fill="#faf5ff" stroke="#9333ea" strokeWidth="1.5" />
      <text x="674" y="304" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7e22ce">ConflictResolver</text>
      <text x="674" y="318" textAnchor="middle" fontSize="7" fill="#9333ea">review ⊕ security 충돌 → YES: Claude 재위임 판정 · NO: 표준 규칙</text>

      {/* 3 Agents → ConflictResolver */}
      <line x1="546" y1="268" x2="546" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />
      <line x1="674" y1="268" x2="674" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />
      <line x1="802" y1="268" x2="802" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />

      {/* ── DeploymentGateService ── */}
      <rect x="490" y="348" width="368" height="40" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="674" y="364" textAnchor="middle" fontSize="8" fontWeight="700" fill="#15803d">DeploymentGateService</text>
      <text x="674" y="378" textAnchor="middle" fontSize="7" fill="#16a34a">APPROVED → merge 허용 · REJECTED → 차단 사유 리포트</text>

      <line x1="674" y1="328" x2="674" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#hn-a)" />

      {/* ── PR Comment ── */}
      <rect x="490" y="406" width="368" height="28" rx="5" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1.5" />
      <text x="674" y="419" textAnchor="middle" fontSize="8" fontWeight="700" fill="#085041">PR Comment</text>
      <text x="674" y="430" textAnchor="middle" fontSize="7" fill="#0f6e56">&lt;details&gt; 접기/펼치기 · review / security / test-gen 분리 리포트</text>

      <line x1="674" y1="388" x2="674" y2="406" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#hn-g)" />

      {/* ── LEGEND ── */}
      <g transform="translate(10, 566)">
        <line x1="0" y1="4" x2="14" y2="4" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="18" y="8" fontSize="7" fill="#9ca3af">동기 호출</text>
        <line x1="75" y1="4" x2="89" y2="4" stroke="#2563a8" strokeWidth="1.2" />
        <text x="93" y="8" fontSize="7" fill="#9ca3af">Orchestration 흐름</text>
        <line x1="195" y1="4" x2="209" y2="4" stroke="#9333ea" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="213" y="8" fontSize="7" fill="#9ca3af">RAG / 컨텍스트 주입</text>
        <line x1="325" y1="4" x2="339" y2="4" stroke="#f97316" strokeWidth="1.2" />
        <text x="343" y="8" fontSize="7" fill="#9ca3af">배포 파이프라인</text>
        <line x1="435" y1="4" x2="449" y2="4" stroke="#22c55e" strokeWidth="1.2" />
        <text x="453" y="8" fontSize="7" fill="#9ca3af">PASS / APPROVED</text>
        <line x1="555" y1="4" x2="569" y2="4" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="573" y="8" fontSize="7" fill="#9ca3af">PEV 루프 재시도</text>
        <line x1="665" y1="4" x2="679" y2="4" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="683" y="8" fontSize="7" fill="#9ca3af">Reflection 피드백</text>
      </g>
    </svg>
  )
}

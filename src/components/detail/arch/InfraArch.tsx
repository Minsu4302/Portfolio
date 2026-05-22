export default function InfraArch() {
  return (
    <svg viewBox="0 0 720 360" className="w-full h-auto">
      <defs>
        <marker id="inf-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="inf-ab" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#2563a8" />
        </marker>
      </defs>

      {/* Region labels */}
      <text x="18" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">PROVISIONING (IaC)</text>
      <text x="390" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">CI/CD PIPELINE</text>

      {/* Separator */}
      <line x1="360" y1="20" x2="360" y2="340" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />

      {/* === LEFT: IaC === */}

      {/* Terraform */}
      <rect x="18" y="50" width="110" height="36" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1.5" />
      <text x="73" y="73" textAnchor="middle" fontSize="12" fill="#633806" fontWeight="700">Terraform</text>

      {/* Terraform outputs */}
      <rect x="18" y="140" width="78" height="30" rx="4" fill="#f1efe8" stroke="#5f5e5a" strokeWidth="1" />
      <text x="57" y="158" textAnchor="middle" fontSize="10" fill="#444441">VM / 네트워크</text>

      <rect x="108" y="140" width="78" height="30" rx="4" fill="#f1efe8" stroke="#5f5e5a" strokeWidth="1" />
      <text x="147" y="158" textAnchor="middle" fontSize="10" fill="#444441">NAT / Firewall</text>

      {/* Ansible */}
      <rect x="210" y="50" width="110" height="36" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1.5" />
      <text x="265" y="73" textAnchor="middle" fontSize="12" fill="#633806" fontWeight="700">Ansible</text>

      {/* K8s Cluster box */}
      <rect x="60" y="220" width="280" height="100" rx="8" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="200" y="242" textAnchor="middle" fontSize="11" fill="#1a2940" fontWeight="700">Kubernetes Cluster</text>
      <line x1="68" y1="248" x2="332" y2="248" stroke="#2563a8" strokeWidth="0.5" opacity="0.3" />

      {/* K8s nodes */}
      <rect x="78" y="258" width="72" height="28" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="114" y="276" textAnchor="middle" fontSize="9" fill="#334155">Master Node</text>

      <rect x="165" y="258" width="72" height="28" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="201" y="276" textAnchor="middle" fontSize="9" fill="#334155">Worker × N</text>

      <rect x="252" y="258" width="76" height="28" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="290" y="272" textAnchor="middle" fontSize="8" fill="#085041">MetalLB</text>
      <text x="290" y="282" textAnchor="middle" fontSize="8" fill="#085041">Calico</text>

      {/* === RIGHT: CI/CD === */}

      {/* Developer */}
      <rect x="380" y="50" width="80" height="36" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="420" y="73" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="500">Developer</text>

      {/* GitLab */}
      <rect x="490" y="50" width="90" height="36" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1.5" />
      <text x="535" y="73" textAnchor="middle" fontSize="12" fill="#633806" fontWeight="700">GitLab</text>

      {/* Jenkins */}
      <rect x="618" y="50" width="90" height="36" rx="6" fill="#faeeda" stroke="#854f0b" strokeWidth="1.5" />
      <text x="663" y="73" textAnchor="middle" fontSize="12" fill="#633806" fontWeight="700">Jenkins</text>

      {/* Docker Registry */}
      <rect x="618" y="150" width="90" height="36" rx="4" fill="#e1f5ee" stroke="#0f6e56" strokeWidth="1" />
      <text x="663" y="168" textAnchor="middle" fontSize="10" fill="#085041" fontWeight="500">Docker</text>
      <text x="663" y="180" textAnchor="middle" fontSize="9" fill="#085041">Registry</text>

      {/* Rolling Deploy → K8s */}
      <rect x="490" y="220" width="130" height="36" rx="4" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="555" y="237" textAnchor="middle" fontSize="10" fill="#1a2940" fontWeight="600">K8s Rolling 배포</text>
      <text x="555" y="250" textAnchor="middle" fontSize="9" fill="#2563a8">kubectl apply</text>

      {/* === ARROWS === */}

      {/* Terraform → VM */}
      <line x1="57" y1="86" x2="57" y2="140" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#inf-a)" />

      {/* Terraform → NAT */}
      <line x1="80" y1="86" x2="147" y2="140" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#inf-a)" />

      {/* Ansible → K8s (cluster setup) */}
      <line x1="265" y1="86" x2="220" y2="220" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#inf-a)" />

      {/* Developer → GitLab */}
      <line x1="460" y1="68" x2="490" y2="68" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#inf-a)" />

      {/* GitLab Webhook → Jenkins */}
      <line x1="580" y1="68" x2="618" y2="68" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#inf-a)" />

      {/* Jenkins → Docker Registry */}
      <line x1="663" y1="86" x2="663" y2="150" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#inf-a)" />

      {/* Docker Registry → Rolling Deploy (elbow) */}
      <path d="M618,168 L555,168 L555,220" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#inf-a)" />

      {/* Rolling Deploy → K8s Cluster */}
      <path d="M490,238 L380,238 L380,270 L340,270" stroke="#2563a8" strokeWidth="1" fill="none" markerEnd="url(#inf-ab)" />

      {/* Legend */}
      <g transform="translate(18, 330)">
        <line x1="0" y1="5" x2="18" y2="5" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="18" cy="5" r="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
        <text x="24" y="9" fontSize="9" fill="#9ca3af">파이프라인 흐름</text>
        <line x1="120" y1="5" x2="138" y2="5" stroke="#2563a8" strokeWidth="1" />
        <circle cx="138" cy="5" r="3" fill="white" stroke="#2563a8" strokeWidth="1" />
        <text x="144" y="9" fontSize="9" fill="#9ca3af">K8s 배포 트리거</text>
      </g>
    </svg>
  )
}

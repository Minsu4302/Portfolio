export default function InfraArch() {
  return (
    <svg viewBox="0 0 800 460" className="w-full h-auto">
      <defs>
        <marker id="if-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#94a3b8" />
        </marker>
        <marker id="if-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#2563a8" />
        </marker>
        <marker id="if-o" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#d97706" />
        </marker>
        <marker id="if-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#059669" />
        </marker>
      </defs>

      {/* Section labels */}
      <text x="20" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">PROVISIONING (IaC)</text>
      <text x="430" y="14" fontSize="9" fill="#9ca3af" fontWeight="600" letterSpacing="0.08em">CI/CD PIPELINE</text>
      <line x1="402" y1="20" x2="402" y2="270" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />

      {/* ── LEFT: IaC ── */}
      <rect x="20" y="28" width="110" height="36" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="75" y="44" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">Terraform</text>
      <text x="75" y="56" textAnchor="middle" fontSize="8" fill="#b45309">VM · 네트워크 · NAT 코드화</text>

      <rect x="148" y="28" width="110" height="36" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="203" y="44" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">Ansible</text>
      <text x="203" y="56" textAnchor="middle" fontSize="8" fill="#b45309">K8s 클러스터 자동 구성</text>

      {/* CloudStack Zone box */}
      <rect x="14" y="78" width="378" height="164" rx="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="24" y="92" fontSize="8" fill="#8b5cf6" fontWeight="700">CloudStack Zone (DKU) — Isolated Network 192.168.77.0/24</text>

      {/* k8s-master VM */}
      <rect x="22" y="100" width="112" height="132" rx="5" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
      <rect x="22" y="100" width="112" height="18" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="78" y="113" textAnchor="middle" fontSize="8" fill="#334155" fontWeight="700">k8s-master</text>
      <text x="78" y="130" textAnchor="middle" fontSize="7" fill="#94a3b8">2C / 4GB</text>
      <text x="78" y="142" textAnchor="middle" fontSize="7" fill="#475569">Control Plane</text>
      <text x="78" y="154" textAnchor="middle" fontSize="7" fill="#0369a1">kubeadm init</text>
      <text x="78" y="166" textAnchor="middle" fontSize="7" fill="#0369a1">Calico CNI 3.28</text>
      <text x="78" y="178" textAnchor="middle" fontSize="7" fill="#0369a1">MetalLB 0.13.12</text>
      <text x="78" y="190" textAnchor="middle" fontSize="7" fill="#475569">hostPath PV 관리</text>
      <text x="78" y="202" textAnchor="middle" fontSize="7" fill="#94a3b8">192.168.77.10</text>
      <text x="78" y="214" textAnchor="middle" fontSize="7" fill="#94a3b8">Global: 10.0.11.210</text>

      {/* k8s-gitlab VM */}
      <rect x="146" y="100" width="112" height="132" rx="5" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
      <rect x="146" y="100" width="112" height="18" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="202" y="113" textAnchor="middle" fontSize="8" fill="#334155" fontWeight="700">k8s-gitlab</text>
      <text x="202" y="130" textAnchor="middle" fontSize="7" fill="#94a3b8">4C / 8GB (전용 노드)</text>
      <text x="202" y="142" textAnchor="middle" fontSize="7" fill="#475569">GitLab CE (Omnibus)</text>
      <text x="202" y="154" textAnchor="middle" fontSize="7" fill="#8b5cf6">node-role=gitlab</text>
      <text x="202" y="166" textAnchor="middle" fontSize="7" fill="#8b5cf6">PVC 50GB</text>
      <text x="202" y="178" textAnchor="middle" fontSize="7" fill="#475569">:30080 (HTTP)</text>
      <text x="202" y="190" textAnchor="middle" fontSize="7" fill="#475569">:30022 (SSH)</text>
      <text x="202" y="202" textAnchor="middle" fontSize="7" fill="#94a3b8">192.168.77.20</text>
      <text x="202" y="214" textAnchor="middle" fontSize="7" fill="#94a3b8">Global: 10.0.11.209</text>

      {/* k8s-worker VM */}
      <rect x="270" y="100" width="112" height="132" rx="5" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
      <rect x="270" y="100" width="112" height="18" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="326" y="113" textAnchor="middle" fontSize="8" fill="#334155" fontWeight="700">k8s-worker</text>
      <text x="326" y="130" textAnchor="middle" fontSize="7" fill="#94a3b8">1C / 2GB</text>
      <text x="326" y="142" textAnchor="middle" fontSize="7" fill="#475569">Jenkins :30880</text>
      <text x="326" y="154" textAnchor="middle" fontSize="7" fill="#475569">Registry :30500</text>
      <text x="326" y="166" textAnchor="middle" fontSize="7" fill="#475569">testapp :31080</text>
      <text x="326" y="178" textAnchor="middle" fontSize="7" fill="#8b5cf6">node-role=app</text>
      <text x="326" y="190" textAnchor="middle" fontSize="7" fill="#475569">PVC 20GB×2</text>
      <text x="326" y="202" textAnchor="middle" fontSize="7" fill="#94a3b8">192.168.77.30</text>
      <text x="326" y="214" textAnchor="middle" fontSize="7" fill="#94a3b8">Global: 10.0.11.201</text>

      {/* NAT / Port Forwarding bar */}
      <rect x="14" y="252" width="378" height="20" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <text x="203" y="266" textAnchor="middle" fontSize="7.5" fill="#15803d" fontWeight="600">NAT · Port Forwarding — Public IP → :30080 · :30880 · :30500 · :31080</text>

      {/* ── RIGHT: CI/CD ── */}
      <rect x="415" y="28" width="76" height="36" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
      <text x="453" y="44" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Developer</text>
      <text x="453" y="56" textAnchor="middle" fontSize="8" fill="#64748b">git push</text>

      <rect x="516" y="28" width="92" height="36" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="562" y="44" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">GitLab</text>
      <text x="562" y="56" textAnchor="middle" fontSize="8" fill="#b45309">SCM · Webhook</text>

      <rect x="643" y="28" width="92" height="36" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="689" y="44" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">Jenkins</text>
      <text x="689" y="56" textAnchor="middle" fontSize="8" fill="#b45309">CI Build Pipeline</text>

      {/* Docker Build & Push */}
      <rect x="620" y="106" width="152" height="54" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
      <text x="696" y="122" textAnchor="middle" fontSize="8" fill="#15803d" fontWeight="700">Docker Build & Push</text>
      <text x="696" y="134" textAnchor="middle" fontSize="7" fill="#15803d">docker build → testapp:$BUILD_NUM</text>
      <text x="696" y="146" textAnchor="middle" fontSize="7" fill="#15803d">docker push → Registry :30500</text>
      <text x="696" y="156" textAnchor="middle" fontSize="7" fill="#15803d">insecure-registries 설정</text>

      {/* K8s Rolling Deploy */}
      <rect x="415" y="106" width="178" height="54" rx="5" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.2" />
      <text x="504" y="122" textAnchor="middle" fontSize="8" fill="#1a2940" fontWeight="700">K8s Rolling 배포</text>
      <text x="504" y="134" textAnchor="middle" fontSize="7" fill="#2563a8">sed IMAGE_PLACEHOLDER 치환</text>
      <text x="504" y="146" textAnchor="middle" fontSize="7" fill="#2563a8">kubectl apply -f k8s/</text>
      <text x="504" y="156" textAnchor="middle" fontSize="7" fill="#2563a8">Rolling Update → 무중단 배포</text>

      {/* ── ARROWS ── */}
      <line x1="75" y1="64" x2="75" y2="78" stroke="#d97706" strokeWidth="1.2" markerEnd="url(#if-o)" />
      <line x1="203" y1="64" x2="203" y2="78" stroke="#d97706" strokeWidth="1.2" markerEnd="url(#if-o)" />

      <line x1="491" y1="46" x2="516" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#if-a)" />

      <line x1="608" y1="46" x2="643" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#if-a)" />
      <text x="625" y="41" textAnchor="middle" fontSize="7" fill="#94a3b8">Webhook</text>

      <line x1="689" y1="64" x2="689" y2="106" stroke="#16a34a" strokeWidth="1.2" markerEnd="url(#if-g)" />

      <line x1="620" y1="133" x2="593" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#if-a)" />

      <line x1="504" y1="160" x2="504" y2="276" stroke="#2563a8" strokeWidth="1.5" markerEnd="url(#if-b)" />
      <text x="510" y="220" fontSize="7" fill="#2563a8">kubectl apply</text>

      {/* ── BOTTOM: Kubernetes Cluster ── */}
      <rect x="14" y="276" width="772" height="172" rx="8" fill="#eef3fb" stroke="#2563a8" strokeWidth="1.5" />
      <text x="400" y="294" textAnchor="middle" fontSize="11" fill="#1a2940" fontWeight="700">Kubernetes Cluster (K8s 1.29) — devops namespace</text>
      <line x1="22" y1="300" x2="780" y2="300" stroke="#2563a8" strokeWidth="0.5" opacity="0.4" />

      {/* Master Node */}
      <rect x="22" y="308" width="178" height="128" rx="5" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="22" y="308" width="178" height="18" rx="5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
      <text x="111" y="321" textAnchor="middle" fontSize="8" fill="#475569" fontWeight="700">Master Node (2C/4GB)</text>
      <text x="111" y="338" textAnchor="middle" fontSize="7" fill="#334155">kube-apiserver · ETCD</text>
      <text x="111" y="350" textAnchor="middle" fontSize="7" fill="#334155">kube-scheduler · controller</text>
      <text x="111" y="362" textAnchor="middle" fontSize="7" fill="#0369a1">Calico CNI (Pod 네트워크)</text>
      <text x="111" y="374" textAnchor="middle" fontSize="7" fill="#0369a1">MetalLB L2 (베어메탈 LB)</text>
      <text x="111" y="386" textAnchor="middle" fontSize="7" fill="#334155">hostPath PV 마운트</text>
      <text x="111" y="398" textAnchor="middle" fontSize="7" fill="#94a3b8">Global: 10.0.11.210</text>

      {/* GitLab Node */}
      <rect x="210" y="308" width="178" height="128" rx="5" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="210" y="308" width="178" height="18" rx="5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
      <text x="299" y="321" textAnchor="middle" fontSize="8" fill="#475569" fontWeight="700">GitLab Node (4C/8GB)</text>
      <text x="299" y="338" textAnchor="middle" fontSize="7" fill="#334155">GitLab CE (Omnibus)</text>
      <text x="299" y="350" textAnchor="middle" fontSize="7" fill="#8b5cf6">PVC 50GB — /data/gitlab</text>
      <text x="299" y="362" textAnchor="middle" fontSize="7" fill="#334155">NodePort :30080 (HTTP)</text>
      <text x="299" y="374" textAnchor="middle" fontSize="7" fill="#334155">NodePort :30022 (SSH)</text>
      <text x="299" y="386" textAnchor="middle" fontSize="7" fill="#8b5cf6">nodeSelector: node-role=gitlab</text>
      <text x="299" y="398" textAnchor="middle" fontSize="7" fill="#94a3b8">Global: 10.0.11.209</text>

      {/* App Worker */}
      <rect x="398" y="308" width="178" height="128" rx="5" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="398" y="308" width="178" height="18" rx="5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
      <text x="487" y="321" textAnchor="middle" fontSize="8" fill="#475569" fontWeight="700">App Worker (1C/2GB)</text>
      <text x="487" y="338" textAnchor="middle" fontSize="7" fill="#334155">Jenkins (lts-jdk17) :30880</text>
      <text x="487" y="350" textAnchor="middle" fontSize="7" fill="#334155">Docker Registry v2 :30500</text>
      <text x="487" y="362" textAnchor="middle" fontSize="7" fill="#334155">testapp (Flask) :31080</text>
      <text x="487" y="374" textAnchor="middle" fontSize="7" fill="#8b5cf6">nodeSelector: node-role=app</text>
      <text x="487" y="386" textAnchor="middle" fontSize="7" fill="#334155">PVC 20GB×2 (Jenkins/Registry)</text>
      <text x="487" y="398" textAnchor="middle" fontSize="7" fill="#94a3b8">Global: 10.0.11.201</text>

      {/* Ansible Roles summary */}
      <rect x="586" y="308" width="192" height="128" rx="5" fill="#fef9ec" stroke="#d97706" strokeWidth="1" />
      <rect x="586" y="308" width="192" height="18" rx="5" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
      <text x="682" y="321" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="700">Ansible Roles 자동 구성</text>
      <text x="682" y="338" textAnchor="middle" fontSize="7" fill="#92400e">k8s_common: swap off · sysctl</text>
      <text x="682" y="350" textAnchor="middle" fontSize="7" fill="#92400e">containerd 설치 · kubelet 설정</text>
      <text x="682" y="362" textAnchor="middle" fontSize="7" fill="#92400e">k8s_master: kubeadm init</text>
      <text x="682" y="374" textAnchor="middle" fontSize="7" fill="#92400e">k8s_worker: kubeadm join</text>
      <text x="682" y="386" textAnchor="middle" fontSize="7" fill="#92400e">metallb: CRD wait → L2 설정</text>
      <text x="682" y="398" textAnchor="middle" fontSize="7" fill="#64748b">노드 라벨링 자동화 (site.yaml)</text>
      <text x="682" y="410" textAnchor="middle" fontSize="7" fill="#64748b">VM 재생성 시 재실행으로 복구</text>
    </svg>
  )
}

import BytepickArch from './arch/BytepickArch'
import LlmMonitoringArch from './arch/LlmMonitoringArch'
import HarnessArch from './arch/HarnessArch'
import InfraArch from './arch/InfraArch'
import ErpArch from './arch/ErpArch'

const archMap: Record<string, React.FC> = {
  bytepick: BytepickArch,
  'llm-monitoring': LlmMonitoringArch,
  harness: HarnessArch,
  infra: InfraArch,
  erp: ErpArch,
}

interface Props {
  slug: string
}

export default function ArchDiagram({ slug }: Props) {
  const Arch = archMap[slug]
  if (!Arch) return null

  return (
    <div className="mb-10">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-4">Architecture</p>
      <div className="border border-gray-200 rounded-xl p-4 bg-white overflow-x-auto">
        <Arch />
      </div>
    </div>
  )
}

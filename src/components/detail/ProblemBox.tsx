interface Props {
  background: string
}

export default function ProblemBox({ background }: Props) {
  return (
    <div className="mb-10">
      <p className="text-xs font-600 tracking-widest text-brand uppercase mb-4">Background</p>
      <div className="border-l-[3px] border-brand bg-brand-subtle/40 rounded-r-xl px-6 py-5">
        <p className="text-gray-600 text-sm leading-relaxed">{background}</p>
      </div>
    </div>
  )
}

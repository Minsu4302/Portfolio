'use client'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
    >
      PDF로 저장 / 인쇄
    </button>
  )
}

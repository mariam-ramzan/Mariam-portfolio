export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] tracking-wide text-muted ${className}`}
    >
      {children}
    </span>
  )
}

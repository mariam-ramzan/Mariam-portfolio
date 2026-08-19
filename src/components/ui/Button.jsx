/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * as="a" ke saath href pass karein, warna <button> render hoga.
 */
export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary:
      'bg-brand text-white shadow-[0_4px_20px_-6px_rgba(59,130,246,0.7)] hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'border border-line bg-surface text-fg hover:border-brand/50 hover:bg-elevated hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'text-muted hover:text-fg',
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

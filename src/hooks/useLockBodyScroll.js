import { useEffect } from 'react'

/** Modal ya mobile menu khulne par background scroll rokta hai. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}

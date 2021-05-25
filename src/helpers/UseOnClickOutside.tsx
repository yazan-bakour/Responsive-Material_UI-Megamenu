import React from 'react'

export const UseOnClickOutside = (
  ref: React.MutableRefObject<any>,
  handler: () => void
): void => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler()
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

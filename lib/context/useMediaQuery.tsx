import { createCtx } from './createCtx'
import { PropsWithChildren, useEffect, useState } from 'react'

export type BreakPoint = 'mobile' | 'tablet' | 'desktop'
const [useMediaQuery, CtxProvider] = createCtx<{ breakPoint: BreakPoint }>()

export { useMediaQuery }

const breakPoints = {
  mobile: '(max-width: 375px)',
  tablet: '(min-width: 376px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
}

function matchMediaQuery(
  breakpoints: Record<string, string>,
  setBreakPoint: any
) {
  for (let key of Object.keys(breakpoints)) {
    if (window.matchMedia(`${breakpoints[key]}`).matches) {
      setBreakPoint(key)
    }
  }
}

export default function MediaQueryProvider({
  children,
}: PropsWithChildren<any>) {
  const [breakPoint, setBreakPoint] = useState<BreakPoint>('mobile')

  const handleWindowResize = () => {
    matchMediaQuery(breakPoints, setBreakPoint)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return <CtxProvider value={{ breakPoint }}>{children}</CtxProvider>
}

import { useWindowWidth } from '@react-hook/window-size'
import { useCallback, useEffect, useState } from 'react'

import { Breakpoints } from '../theme'

/**
 * Toggle hook that also listens for window width and toggles if value is less than breakpoint
 * Useful for responsive Navbar
 *
 * @param initialValue boolean value for toggling
 * @param breakpoint set value to false if less than this breakpoint
 * @returns [value, toggle]
 *
 * @see https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
 */
const useToggle = (
  initialValue = false,
  breakpoint:number = Breakpoints.tablet,
):[boolean, (
  ) => void] => {
  const [ value, setValue ] = useState( initialValue )
  const width = useWindowWidth()

  const toggle = useCallback( () => setValue( ( v ) => !v ), [] )

  useEffect( () => {
    // open and is small screen -> close it
    if ( value && width < breakpoint ) {
      toggle()
    }

    // closed and is large screen -> open it
    if ( !value && width >= breakpoint ) {
      toggle()
    }

  // Only run this when width changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ width ] )

  return [ value, toggle ]
}

export default useToggle

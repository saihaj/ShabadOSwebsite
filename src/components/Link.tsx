import React from 'react'
import type { ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'

export type LinkProps = {
  /**
   * The URL you want to link to
   */
  to: string,
  children: ReactNode,
  className?: string,
}

/**
 * Use `Link` from gatsby if local link otherwise `<a>` and open in new tab
 */
const Link = ( { to, children, ...props }: LinkProps ) => (
  to.startsWith( 'http' ) || to.startsWith( 'mailto' )
    ? <a href={to} target="_blank" rel="noreferrer" {...props}>{children}</a>
    : <GatsbyLink to={to} {...props}>{children}</GatsbyLink>
)

export default Link

import React, { ReactChild } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import { Breakpoints, widthLessThan } from '../theme'

const useStyles = createUseStyles( {
  base: {
    display: 'block',
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: '1.5rem',
    lineHeight: 2,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '1.25rem',
    },
  },
  title: {
    fontSize: '3rem',
    lineHeight: 0.5,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '2rem',
      lineHeight: 0.75,
    },
  },
} )

type Classes<Name extends string | number | symbol = string> = { [P in Name]: string; }
type Format = 'caption' | 'body' | 'header' | 'subtitle' | 'title'
type TypographyProps = {
  children: ReactChild,
  format?: Format,
}

const Typography = ( {
  children,
  format = 'body',
}: TypographyProps ) => {
  const classes: Classes<'base' | Format> = useStyles()

  return (
    <span
      className={classnames(
        classes.base,
        classes[ format ],
      )}
    >
      {children}
    </span>
  )
}

export default Typography

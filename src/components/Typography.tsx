import React, { ReactChild } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import { Breakpoints, widthLessThan } from '../theme'

const useStyles = createUseStyles( {
  base: {
    display: 'block',
  },
  body: {
    fontSize: '1rem',
  },
  caption: {
    fontSize: '0.875rem',
  },
  header: {
    fontSize: '1.3125rem',
    lineHeight: 2.2857142857,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '1.25rem',
      lineHeight: 2.4,
    },
  },
  subtitle: {
    fontSize: '1.75rem',
    lineHeight: 1.7142857143,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '1.3125rem',
      lineHeight: 2.2857142857,
    },
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: 1.2857142857,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '2rem',
      lineHeight: 1.5,
    },
  },
} )

type Classes<Name extends string | number | symbol = string> = { [P in Name]: string; }
type Format = 'caption' | 'body' | 'header' | 'subtitle' | 'title'
type TypographyProps = {
  children: ReactChild | ReactChild[],
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

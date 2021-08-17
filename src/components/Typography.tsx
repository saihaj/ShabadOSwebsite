import React, { ReactChild } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import { Breakpoints, Color, widthLessThan } from '../theme'

const useStyles = createUseStyles( {
  base: {
    color: Color.Black,
  },
  body: {
    display: 'block',
    fontSize: 16,
  },
  caption: {
    display: 'block',
    fontSize: 14,
    color: Color.Black800,
  },
  header: {
    display: 'block',
    fontSize: 18,
    lineHeight: 28,
  },
  subtitle: {
    display: 'block',
    fontSize: '1.5rem',
    lineHeight: 2,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '1.25rem',
    },
  },
  title: {
    display: 'block',
    fontSize: '3rem',
    lineHeight: 0.5,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      fontSize: '2rem',
      lineHeight: 0.75,
    },
  },
  latin: {
    fontFamily: 'Noto Sans',
  },
  gurmukhi: {

  },
} )

type Classes<Name extends string | number | symbol = string> = { [P in Name]: string; }
type Format = 'caption' | 'body' | 'header' | 'subtitle' | 'title'
export enum Script {
  Latin = 'latin',
  Gurmukhi = 'gurmukhi',
}
type TypographyProps = {
  children: ReactChild,
  format?: Format,
  script?: Script,
}

const Typography = ( {
  children,
  format = 'body',
  script = Script.Latin,
}: TypographyProps ) => {
  const classes: Classes<'base' | Format | Script> = useStyles()

  return (
    <span
      className={classnames(
        classes.base,
        classes[ format ],
        classes[ script ],
      )}
    >
      {children}
    </span>
  )
}

export default Typography

import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

import { Breakpoints, widthLessThan, widthMoreThan } from '../theme'

import Content from './Content'

const useStyles = createUseStyles( {
  main: {
    textAlign: 'center',
    '& h1': {
      fontSize: '3rem',
      lineHeight: 0.5,
      [ widthLessThan( Breakpoints.tablet ) ]: {
        fontSize: '2rem',
        lineHeight: 0.75,
      },
    },
    '& p': {
      fontSize: '1.5rem',
      lineHeight: 2,
      [ widthLessThan( Breakpoints.tablet ) ]: {
        fontSize: '1.25rem',
      },
    },
    '& a + a': {
      [ widthMoreThan( Breakpoints.tablet ) ]: {
        marginLeft: '2rem',
      },
      [ widthLessThan( Breakpoints.tablet ) ]: {
        display: 'block',
        marginTop: '1.5rem',
      },
    },
  },
  secondLink: {
    marginLeft: '1rem',
  },
} )

type HeroProps = {
  title:string,
  primary?: boolean,
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Hero = ( {
  title,
  primary,
  children,
  className,
  ...props
}:HeroProps ) => {
  const classes = useStyles()
  return (
    <Content>
      <section
        className={cx(
          classes.main,
          className,
        )}
        {...props}
      >
        <h1>{title}</h1>
        {children}
      </section>
    </Content>
  )
}

export default Hero

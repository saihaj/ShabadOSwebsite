import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

import { Breakpoints, widthLessThan, widthMoreThan } from '../theme'

import Link, { LinkProps } from './Link'
import Content from './Content'

const useStyles = createUseStyles( {
  main: {
    [ widthLessThan( Breakpoints.mobile ) ]: {
      textAlign: 'center',
    },
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
  ctaList: LinkProps[],
  primary?: boolean,
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Hero = ( {
  title,
  primary,
  children,
  className,
  ctaList,
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
        <p>{children}</p>
        {ctaList.map( ( cta ) => (
          <Link to={cta.to}>{cta.children}</Link>
        ) )}

      </section>
    </Content>
  )
}

export default Hero

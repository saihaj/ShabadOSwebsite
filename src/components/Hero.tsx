import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

import { Breakpoints, widthLessThan } from '../theme'

import Link, { LinkProps } from './Link'
import Content from './Content'

const useStyles = createUseStyles( {
  main: {
    height: 600,
    [ widthLessThan( Breakpoints.mobile ) ]: {
      textAlign: 'center',
    },
    '& h1': {
      margin: 0,
      fontWeight: 'normal',
      fontSize: '3rem',
      [ widthLessThan( Breakpoints.tablet ) ]: {
        fontSize: '2.25rem',
        lineHeight: 1.333,
      },
    },
    '& p': {
      fontSize: '2rem',
      [ widthLessThan( Breakpoints.tablet ) ]: {
        fontSize: '1.5rem',
        lineHeight: 2,
      },
    },
  },
  secondLink: {
    marginLeft: '1rem',
  },
} )

type HeroProps = {
  title:string,
  learnMore:string,
  additionalLink: LinkProps,
  primary?: boolean,
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Hero = ( {
  title,
  primary,
  children,
  className,
  learnMore,
  additionalLink,
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
        <Link to={learnMore}>Learn More &gt;</Link>
        <Link
          {...additionalLink}
          className={cx( classes.secondLink, additionalLink.className )}
        >
          {additionalLink.children}
        </Link>
      </section>
    </Content>
  )
}

export default Hero

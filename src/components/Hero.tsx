import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

import { Breakpoints, Color, radialSplash, widthLessThan } from '../theme'

import Link, { LinkProps } from './Link'
import Content from './Content'

const useStyles = createUseStyles( {
  primary: {
    color: Color.white,
    background: radialSplash,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      padding: '6rem 2.5rem 0',
    },
    [ widthLessThan( Breakpoints.mobile ) ]: {
      padding: '5rem 0 0',
    },
  },
  secondary: {
    margin: '2rem 1rem',
    padding: '6rem 4.5rem 0',
    color: Color.black,
    background: Color.avaniPaper,
    [ widthLessThan( Breakpoints.tablet ) ]: {
      margin: 0,
      padding: '6rem 2.5rem 0',
    },
    [ widthLessThan( Breakpoints.mobile ) ]: {
      padding: '4rem 1rem 0',
    },
  },
  main: {
    height: 600,
    [ widthLessThan( Breakpoints.mobile ) ]: {
      textAlign: 'center',
    },
    '& h1': {
      margin: 0,
      fontWeight: 'normal',
      fontSize: '3.7rem',
      [ widthLessThan( Breakpoints.tablet ) ]: {
        fontSize: '2.7rem',
      },
    },
    '& p': {
      fontSize: '2rem',
      lineHeight: '4rem',
      [ widthLessThan( Breakpoints.tablet ) ]: {
        fontSize: '1.5rem',
        lineHeight: '3rem',
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

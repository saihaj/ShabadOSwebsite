import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

import { Color, radialSplash } from '../theme'

import Link, { LinkProps } from './Link'

const useStyles = createUseStyles( {
  primary: {
    color: Color.white,
    padding: '6rem 6.5rem 0',
    background: radialSplash,
  },
  secondary: {
    margin: '2rem',
    padding: '6rem 4.5rem 0',
    color: Color.black,
    background: Color.avaniPaper,
  },
  main: {
    height: '600px',
    '& h1': {
      margin: 0,
      fontWeight: 'normal',
      fontSize: '3.7rem',
    },
    '& p': {
      fontSize: '2rem',
      lineHeight: '4rem',
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
    <section
      className={cx(
        classes.main,
        { [ classes.primary ]: primary },
        { [ classes.secondary ]: !primary },
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
  )
}

export default Hero

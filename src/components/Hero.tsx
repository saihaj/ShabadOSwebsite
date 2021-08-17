import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'

import { Breakpoints, widthLessThan, widthMoreThan } from '../theme'

import Content from './Content'
import Typography from './Typography'

const useStyles = createUseStyles( {
  main: {
    textAlign: 'center',
    '& a + a': {
      [ widthMoreThan( Breakpoints.tablet ) ]: {
        marginLeft: '4rem',
      },
      [ widthLessThan( Breakpoints.tablet ) ]: {
        display: 'block',
      },
    },
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
        className={classes.main}
        {...props}
      >
        <Typography format="title">{title}</Typography>
        {children}
      </section>
    </Content>
  )
}

export default Hero

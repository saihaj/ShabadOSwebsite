import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

type SectionProps = {
  children: ReactNode | StylesProps,
  background?: string,
  color?: string,
  padding?: string,
}

type StylesProps = {
  background?: string,
  color?: string,
  padding?: string,
}

const useStyles = createUseStyles( () => ( {
  section: ( props: StylesProps ) => ( {
    background: props.background || 'linear-gradient(#FAF8F7, #FFFFFF)',
    color: props.color || 'black',
    padding: props.padding,
  } ),
} ) )

const Section = ( { children, ...props }: SectionProps ) => {
  const classes = useStyles( { ...props } )
  return (
    <div className={classes.section}>
      {children}
    </div>
  )
}

export default Section

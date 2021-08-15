import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( {
  content: {
    maxWidth: 980,
    margin: [ 0, 'auto' ],
  },
} )

type ContentProps = {
  children: ReactNode,
}

const Content = ( { children }: ContentProps ) => {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      {children}
    </div>
  )
}

export default Content

import React from 'react'
import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

import { focusRing } from '../../theme'

const useStyles = createUseStyles( {
  btn: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    cursor: 'pointer',
    ...focusRing(),
  },
  expandIcon: {
    height: 15,
  },
} )

type ExpandProps = {
  className?: string,
  toggled: boolean,
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Expand = ( { toggled, className, ...props }:ExpandProps ) => {
  const classes = useStyles()

  return (
    <button type="button" className={cx( classes.btn, className )} {...props}>
      {!toggled && (
      <svg xmlns="http://www.w3.org/2000/svg" className={classes.expandIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      )}
      {toggled && (
      <svg xmlns="http://www.w3.org/2000/svg" className={classes.expandIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
      )}
    </button>
  )
}

export default Expand

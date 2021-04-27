import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'gatsby'
import { useWindowWidth } from '@react-hook/window-size'

import { Color, widthLessThan, Breakpoints } from '../theme'

const NAV_ROUTES = [
  { name: 'About Us', url: '/about' },
  { name: 'Database', url: '/database' },
  { name: 'Viewer', url: '/viewer' },
  { name: 'Presenter', url: '/presenter' },
  { name: 'Mobile', url: '/mobile' },
]

const useStyles = createUseStyles( {
  navbar: {
    background: Color.avaniPurple,
    color: Color.white,
    display: 'flex',
  },
  navItem: {
    fontWeight: 'normal',
    padding: '.6rem.6rem',
    margin: '.2rem 0.5rem 0',
    border: `0.15rem solid ${Color.avaniPurple}`,
    color: 'rgba( 255, 255, 255, 0.85 )',
    '&.currentItem': {
      borderBottomColor: `${Color.link}`,
    },
    '&:hover': {
      color: `${Color.white}`,
    },
    '&:focus': {
      borderColor: `${Color.link}`,
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(0, 162, 213, .5)',
      color: `${Color.white}`,
    },
    [ widthLessThan( Breakpoints.tablet ) ]: {
      display: 'flex',
    },
  },
  menuButton: {
    width: '1.2rem',
    height: '1.2rem',
  },
} )

type MenuSwitchProps = {
  toggle :() => void,
}

const MenuSwitch = ( { toggle }:MenuSwitchProps ) => {
  const classes = useStyles()

  return (
    <button type="button" onClick={toggle}>
      <svg className={classes.menuButton} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
      </svg>
    </button>
  )
}

const Navbar = () => {
  const [ isExpanded, toggleExpansion ] = useState( false )
  const classes = useStyles()
  const width = useWindowWidth()
  console.log( width )
  const toggleSwitch = () => toggleExpansion( !isExpanded )

  useEffect( () => {
    // Not mobile then toggle cannot be expanded
    if ( width > Breakpoints.tablet ) toggleExpansion( false )
  }, [ width ] )

  return (
    <nav className={classes.navbar}>
      <MenuSwitch toggle={toggleSwitch} />
      <Link to="/" className={classes.navItem}>
        Shabad OS
      </Link>
      {NAV_ROUTES.map( ( { name, url } ) => (
        <Link className={classes.navItem} to={url} key={url}>
          {name}
        </Link>
      ) )}
    </nav>
  )
}

export default Navbar

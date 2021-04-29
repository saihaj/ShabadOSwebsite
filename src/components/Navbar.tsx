import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'gatsby'
import { useWindowWidth } from '@react-hook/window-size'
import { Cross as Hamburger } from 'hamburger-react'

import { Color, widthLessThan, Breakpoints, widthMoreThan } from '../theme'

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
    alignItems: 'center',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      flexDirection: 'column',
      alignItems: 'unset',
    },
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
  },
  menuButton: {
    [ widthMoreThan( Breakpoints.tablet ) ]: {
      display: 'none',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
} )

const NavItems = () => {
  const classes = useStyles()
  return (
    <>
      {NAV_ROUTES.map( ( { name, url } ) => (
        <Link className={classes.navItem} to={url} key={url}>
          {name}
        </Link>
      ) )}
    </>
  )
}

const Navbar = () => {
  const [ isExpanded, toggleExpansion ] = useState( false )
  const classes = useStyles()
  const width = useWindowWidth()

  const toggleSwitch = () => toggleExpansion( !isExpanded )

  useEffect( () => {
    // Not mobile then toggle cannot be expanded
    if ( width > Breakpoints.tablet ) toggleExpansion( true )
  }, [ width ] )

  return (
    <nav className={classes.navbar}>
      <div className={classes.title}>
        <div className={classes.menuButton}>
          <Hamburger size={24} onToggle={toggleSwitch} toggled={isExpanded} />
        </div>
        <Link to="/" className={classes.navItem}>
          Shabad OS
        </Link>
      </div>
      {isExpanded && <NavItems />}
    </nav>
  )
}

export default Navbar

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'gatsby'
import { Cross as Hamburger } from 'hamburger-react'
import { useWindowWidth } from '@react-hook/window-size'

import { Color, widthLessThan, Breakpoints, widthMoreThan, focusRing } from '../theme'
import useToggle from '../hooks/use-toggle'

import Content from './Content'
import Logo from './Logo'
import Section from './Section'

const NAV_ROUTES = [
  { name: 'About Us', url: '/about' },
  { name: 'Database', url: '/database' },
  { name: 'Viewer', url: '/viewer' },
  { name: 'Presenter', url: '/presenter' },
  { name: 'Mobile', url: '/mobile' },
]

const useStyles = createUseStyles( {
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      flexDirection: 'column',
      alignItems: 'unset',
    },
  },
  navItem: {
    fontWeight: 'normal',
    padding: '.5rem',
    border: `0.15rem solid ${Color.AvaniPurple}`,
    color: 'rgba( 255, 255, 255, 0.85 )',
    '&.currentItem': {
      borderBottomColor: `${Color.Link}`,
    },
    '&:hover': {
      color: `${Color.White}`,
    },
    ...focusRing(),
    [ widthLessThan( Breakpoints.tablet ) ]: {
      '& > span': {
        display: 'none',
      },
      padding: 0,
    },
    '& > span': {
      marginLeft: 5,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    [ widthMoreThan( Breakpoints.tablet ) ]: {
      display: 'none',
    },
    position: 'absolute',
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
  const [ isExpanded, toggleExpansion ] = useToggle()
  const classes = useStyles()
  const width = useWindowWidth()

  return (
    <Section
      background={Color.AvaniPurple}
      color={Color.White}
    >
      <Content>
        <div className={classes.navMenu}>
          <div className={classes.menuButton}>
            <Hamburger size={20} onToggle={toggleExpansion} direction="right" toggled={isExpanded} />
          </div>
          <Link to="/" className={classes.navItem}>
            <Logo
              width={width > Breakpoints.tablet ? 24 : 32}
              height={width > Breakpoints.tablet ? 24 : 32}
            />
            <span>Shabad OS</span>
          </Link>
          {isExpanded && <NavItems />}
        </div>
      </Content>
    </Section>
  )
}

export default Navbar

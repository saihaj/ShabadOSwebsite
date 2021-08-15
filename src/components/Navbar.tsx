import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'gatsby'
import { Cross as Hamburger } from 'hamburger-react'

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
    padding: '.4rem .4rem',
    margin: '.2rem 0.5rem 0',
    border: `0.15rem solid ${Color.avaniPurple}`,
    color: 'rgba( 255, 255, 255, 0.85 )',
    '&.currentItem': {
      borderBottomColor: `${Color.link}`,
    },
    '&:hover': {
      color: `${Color.white}`,
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

  return (
    <Section
      background={Color.avaniPurple}
      color={Color.white}
    >
      <Content>
        <div className={classes.navMenu}>
          <div className={classes.menuButton}>
            <Hamburger size={20} onToggle={toggleExpansion} direction="right" toggled={isExpanded} />
          </div>
          <Link to="/" className={classes.navItem}>
            <Logo width={38} height={38} />
            <span>Shabad OS</span>
          </Link>
          {isExpanded && <NavItems />}
        </div>
      </Content>
    </Section>
  )
}

export default Navbar

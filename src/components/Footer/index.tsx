import React from 'react'
import { createUseStyles } from 'react-jss'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import { Breakpoints, Color, focusRing, widthLessThan, widthMoreThan } from '../../theme'
import Link from '../Link'
import useToggle from '../../hooks/use-toggle'
import Content from '../Content'
import Section from '../Section'
import Typography from '../Typography'

import { LINKS, SOCIAL } from './consts'
import Expand from './Expand'

const useStyles = createUseStyles( {
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 0rem',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      marginLeft: '0.5rem',
      color: Color.Black800,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        color: Color.LinkHover,
      },
      padding: '0.5rem',
      ...focusRing( 'inherit', '0' ),
    },
    [ widthLessThan( Breakpoints.tablet ) ]: {
      '& > span': {
        display: 'none',
      },
      '& > a:first-of-type': {
        marginLeft: '-0.5rem',
      },
    },
  },
  footer: {
    [ widthMoreThan( Breakpoints.tablet ) ]: {
      borderColor: 'rgba(0,0,0,0.1)',
      borderStyle: 'solid',
      borderWidth: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    display: 'grid',
    '& ul': {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      '& > div + span': {
        marginTop: '0.25rem',
      },
      '& a': {
        fontWeight: 'lighter',
        color: Color.Black800,
        '&:hover': {
          color: Color.LinkHover,
        },
        ...focusRing(),
      },
      [ widthLessThan( Breakpoints.tablet ) ]: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderTopStyle: 'solid',
        borderTop: 1,
        padding: '0.75rem 0',
      },
    },
    '& > div:last-child > ul:last-child': {
      [ widthLessThan( Breakpoints.tablet ) ]: {
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomStyle: 'solid',
        borderBottom: 1,
      },
    },
    'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
    'grid-template-rows': '1fr',
    padding: '1rem 0',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandIcon: {
    [ widthMoreThan( Breakpoints.tablet ) ]: {
      display: 'none',
    },
  },
  sponsors: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1rem',
  },
} )

type NavSectionProps = {
  label:string,
  links: { name:string, url:string }[],
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>

const NavSection = ( { label, links, ...props }:NavSectionProps ) => {
  const [ open, setOpen ] = useToggle()
  const classes = useStyles()

  return (
    <ul {...props}>
      <div className={classes.section}>
        <Typography format="body">{label}</Typography>
        <Expand toggled={open} onClick={setOpen} className={classes.expandIcon} />
      </div>
      {open && links.map( ( { name, url } ) => (
        <Typography format="caption" key={name}>
          <li><Link to={url}>{name}</Link></li>
        </Typography>
      ) )}
    </ul>
  )
}

const FooterNav = () => {
  const classes = useStyles()

  return (
    <nav className={classes.footer}>
      {LINKS.map( ( sections ) => (
        <div key={sections[ 0 ].label}>
          {sections.map( ( { label, links } ) => (
            <NavSection key={label} label={label} links={links} />
          ) )}
        </div>
      ) )}
    </nav>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <Section
      background={Color.AvaniPaper}
    >
      <Content>
        <footer className={classes.main}>

          <div className={classes.header}>
            <span>Follow us on:</span>

            {SOCIAL.map( ( { url, icon: Icon } ) => (
              <Link to={url} key={url}>
                <Icon strokeWidth={1.5} size={24} />
              </Link>
            ) ) }
          </div>

          <FooterNav />

          <div className={classes.sponsors}>
            <Link to="https://vercel.com/?utm_source=ShabadOS&utm_campaign=oss">
              <img width={125} alt="Powered by Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
            </Link>
          </div>

        </footer>
      </Content>
    </Section>
  )
}

export default Footer

import React, { useEffect, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { createUseStyles } from 'react-jss'
import { Octokit } from '@octokit/rest'
import { isDesktop, isMacOs, isWindows } from 'react-device-detect'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { Breakpoints, radialSplash } from '../theme'
import Link from '../components/Link'
import Typography from '../components/Typography'

const useStyles = createUseStyles( () => ( {
  gif: {
    marginTop: '3rem',
    maxWidth: 416,
    width: '100%',
    borderRadius: 12,
  },
  ib: {
    display: 'inline-block',
  },
  hint: {
    color: '#CCCCCC',
  },
} ) )

const Home = () => {
  const width = useWindowWidth()
  const classes = useStyles()
  const octokit = new Octokit()
  const [ presenterDownloadLink, setPresenterDownloadLink ] = useState( 'https://github.com/shabados/presenter/releases/latest' )

  // Get the latest release of the Presenter app based on platform
  // mac os or windows specific links default is GH releases page
  useEffect( () => {
    octokit.rest.repos
      .getLatestRelease( { owner: 'shabados', repo: 'presenter' } )
      .then( ( { data: { assets } } ) => {
        const filters = {
          mac: /^Shabad.OS-.*dmg$/,
          win: /^Shabad.OS-.*exe$/,
        }

        if ( isMacOs ) {
          const mac = assets.find( ( { name } ) => filters.mac.exec( name ) )
          setPresenterDownloadLink( mac!.browser_download_url )
        }

        if ( isWindows ) {
          const win = assets.find( ( { name } ) => filters.win.exec( name ) )
          setPresenterDownloadLink( win!.browser_download_url )
        }
      } )
      .catch( ( err ) => console.error( err ) )
  // Octokit is to requests to the GitHub API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )

  return (
    <>
      <Navbar />
      <main>
        <Section
          background={radialSplash}
          color="white"
          padding={`${width > Breakpoints.tablet ? '9rem' : '2rem'} 0px`}
        >
          <Hero title="Presenter">
            <Typography format="subtitle">The new desktop app is more simple, efficient, and powerful than ever.</Typography>
            <Typography format="header">
              {isDesktop
                ? <Link to={presenterDownloadLink}>{'Download >'}</Link>
                : (
                  <Typography format="body">
                    <span className={classes.hint}>
                      Requires Win10 / macOS
                    </span>
                  </Typography>
                )}
              <Link to="/presenter">{'Learn More >'}</Link>
            </Typography>
            <img src="/live-search.gif" alt="ShabadOS Presenter Search" className={classes.gif} />
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '9rem' : '2rem'} 0px`}
        >
          <Hero title="Database">
            <Typography format="subtitle">
              <div className={classes.ib}>Multiple Sources.</div>
              &nbsp;
              <div className={classes.ib}>Multiple Reviewers.</div>
              &nbsp;
              <div className={classes.ib}>Single Source of truth.</div>
            </Typography>
            <Typography format="header">
              <Link to="/database">{'Learn More >'}</Link>
              <Link to="https://github.com/shabados/database">{'View on GitHub >'}</Link>
            </Typography>
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '9rem' : '2rem'} 0px`}
        >
          <Hero title="Viewer">
            <Typography format="subtitle">Drill down to each line and read expositions from multiple translations</Typography>
            <Typography format="header">
              <Link to="/viewer">{'Learn More >'}</Link>
              <Link to="https://github.com/shabados/viewer">{'View on GitHub >'}</Link>
            </Typography>
          </Hero>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default Home

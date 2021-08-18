import React, { useEffect, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { createUseStyles } from 'react-jss'
import { Octokit } from '@octokit/rest'
import { isDesktop, isMacOs, isWindows } from 'react-device-detect'

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
  heroMedia: {
    marginTop: '3rem',
    width: '100%',
    maxWidth: 600,
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
      <main>
        <Section
          background={radialSplash}
          color="white"
          padding={`${width > Breakpoints.tablet ? '9rem' : '3.5rem'} 0px`}
        >
          <Hero title="Presenter">
            <Typography format="subtitle">Striving to be more simple, efficient, and powerful than ever.</Typography>
            <Typography format="header">
              {isDesktop
                ? <Link to={presenterDownloadLink}>{'Download >'}</Link>
                : (
                  <Typography format="body">
                    <span className={classes.hint}>
                      Available on Windows or macOS
                    </span>
                  </Typography>
                )}
            </Typography>
            <img src="/live-search.gif" alt="ShabadOS Presenter Search" className={classes.gif} />
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '3.5rem' : '2rem'} 0px`}
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
              <Link to="https://docs.shabados.com/database/">{'Learn More >'}</Link>
            </Typography>
            <img src="/database-hero.png" alt="ShabadOS Database Review" className={classes.heroMedia} />
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '3.5rem' : '2rem'} 0px`}
        >
          <Hero title="Viewer">
            <Typography format="subtitle">Drill down to each line to read expositions and translations</Typography>
            <Typography format="header">
              <Link to="https://viewer.shabados.com/">{'Launch >'}</Link>
              <Link to="https://docs.shabados.com/viewer/guides/proofreading">{'Learn to Proofread >'}</Link>
            </Typography>
            <img src="/viewer-hero.svg" alt="ShabadOS Database Review" className={classes.heroMedia} />
          </Hero>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default Home

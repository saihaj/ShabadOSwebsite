import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { createUseStyles } from 'react-jss'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { Breakpoints, radialSplash } from '../theme'
import Link from '../components/Link'
import Typography from '../components/Typography'

const useStyles = createUseStyles( () => ( {
  gif: {
    maxWidth: 416,
    width: '100%',
    borderRadius: 12,
  },
} ) )

const Home = () => {
  const width = useWindowWidth()
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <main>
        <Section
          background={radialSplash}
          color="white"
          padding={`${width > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
        >
          <Hero title="Presenter">
            <Typography format="subtitle">The new desktop app is more simple, powerful, and accurate than ever.</Typography>
            <Link to="/presenter">{'Learn More >'}</Link>
            <Link to="/">{'Download >'}</Link>
            <br />
            <br />
            <img src="/live-search.gif" alt="ShabadOS Presenter Search" className={classes.gif} />
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
        >
          <Hero title="Database">
            <Typography format="subtitle">Multiple Sources. Multiple Reviewers. Single Source of truth.</Typography>
            <Link to="/database">{'Learn More >'}</Link>
            <Link to="https://github.com/shabados/database">{'View on GitHub >'}</Link>
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
        >
          <Hero title="Viewer">
            <Typography format="subtitle">Drill down to each line and read expositions from multiple translations</Typography>
            <Link to="/viewer">{'Learn More >'}</Link>
            <Link to="https://github.com/shabados/viewer">{'View on GitHub >'}</Link>
          </Hero>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default Home

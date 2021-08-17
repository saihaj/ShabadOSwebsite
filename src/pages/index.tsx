import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { Breakpoints, radialSplash } from '../theme'
import Link from '../components/Link'

const Home = () => {
  const width = useWindowWidth()

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
            <p>The new desktop app is more simple, powerful, and accurate than ever.</p>
            <Link to="/presenter">{'Learn More >'}</Link>
            <Link to="/">{'Download >'}</Link>
            <br />
            <br />
            <img src="/live-search.gif" alt="ShabadOS Presenter Search" style={{ maxWidth: '416px', width: '100%' }} />
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
        >
          <Hero title="Database">
            <p>Multiple Sources. Multiple Reviewers. Single Source of truth.</p>
            <Link to="/database">{'Learn More >'}</Link>
            <Link to="https://github.com/shabados/database">{'View on GitHub >'}</Link>
          </Hero>
        </Section>
        <Section
          padding={`${width > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
        >
          <Hero title="Viewer">
            <p>Drill down to each line and read expositions from multiple translations</p>
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

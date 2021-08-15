import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { Breakpoints, radialSplash } from '../theme'

import liveSearchGif from './live-search.gif'

const Home = () => (
  <>
    <Navbar />
    <main>
      <Section
        background={radialSplash}
        color="white"
        padding={`${window.innerWidth > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
      >
        <Hero
          title="Presenter"
          ctaList={[
            { to: '/presenter', children: 'Learn More >' },
            { to: '/', children: 'Download >' },
          ]}
          primary
        >
          The new desktop app is more simple, powerful, and accurate than ever.
          <br />
          <br />
          <img src={liveSearchGif} alt="gif" />
        </Hero>
      </Section>
      <Section
        padding={`${window.innerWidth > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
      >
        <Hero
          title="Database"
          ctaList={[
            { to: '/database', children: 'Learn More >' },
            { to: 'https://github.com/shabados/database', children: 'View on GitHub >' },
          ]}
        >
          Multiple Sources. Multiple Reviewers. Single Source of truth.
        </Hero>
      </Section>
      <Section
        padding={`${window.innerWidth > Breakpoints.tablet ? '9rem' : '3rem'} 0px`}
      >
        <Hero
          title="Viewer"
          ctaList={[
            { to: '/viewer', children: 'Learn More >' },
            { to: 'https://github.com/shabados/viewer', children: 'View on GitHub >' },
          ]}
        >
          Drill down to each line and read expositions from multiple translations
        </Hero>
      </Section>
    </main>
    <Footer />
  </>
)

export default Home

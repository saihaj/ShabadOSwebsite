import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { radialSplash } from '../theme'

const Home = () => (
  <>
    <Navbar />
    <main>
      <Section
        background={radialSplash}
        color="white"
        padding="6rem 6.5rem 0"
      >
        <Hero
          title="Presenter"
          learnMore="/presenter"
          additionalLink={{ to: '/', children: 'Download >' }}
          primary
        >
          The new Desktop app is
          <br />
          more simple, powerful,
          <br />
          and accurate than ever.
        </Hero>
      </Section>
      <Section
        padding="6rem 6.5rem 0"
      >
        <Hero
          title="Database"
          learnMore="/database"
          additionalLink={{ to: 'https://github.com/shabados/database', children: 'View on GitHub >' }}
        >
          Multiple Sources.
          <br />
          Multiple Reviewers.
          <br />
          Single Source of truth.
        </Hero>
      </Section>
      <Section
        padding="6rem 6.5rem 0"
      >
        <Hero
          title="Viewer"
          learnMore="/viewer"
          additionalLink={{ to: 'https://github.com/shabados/viewer', children: 'View on GitHub >' }}
        >
          Drill down to each line
          <br />
          and read expositions
          <br />
          from multiple translations
        </Hero>
      </Section>
    </main>
    <Footer />
  </>
)

export default Home

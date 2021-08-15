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
        padding="3rem 44px"
      >
        <Hero
          title="Presenter"
          ctaList={[
            { to: '/presenter', children: 'Learn More >' },
            { to: '/', children: 'Download >' },
          ]}
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
        padding="3rem 44px"
      >
        <Hero
          title="Database"
          ctaList={[
            { to: '/database', children: 'Learn More >' },
            { to: 'https://github.com/shabados/database', children: 'View on GitHub >' },
          ]}
        >
          Multiple Sources.
          <br />
          Multiple Reviewers.
          <br />
          Single Source of truth.
        </Hero>
      </Section>
      <Section
        padding="3rem 44px"
      >
        <Hero
          title="Viewer"
          ctaList={[
            { to: '/viewer', children: 'Learn More >' },
            { to: 'https://github.com/shabados/viewer', children: 'View on GitHub >' },
          ]}
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

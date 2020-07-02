import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HOMEPAGE_KEYWORDS } from '../lib/keywords'

import liveSearch from '../images/live-search.gif'

const Home = () => (
  <Layout>
    <SEO keywords={HOMEPAGE_KEYWORDS} title="Home" />

    <div className="flex justify-between flex-col md:flex-row">

      <h1 className="text-4xl font-medium pb-10 mx-10 md:pr-10 md:m-auto md:pb-0">
        The new ShabadOS is more simple, powerful and accurate than ever.
      </h1>

      <img
        className="m-auto"
        src={liveSearch}
        alt="Search example on Shabad OS for Desktop"
      />

    </div>

  </Layout>
)

export default Home

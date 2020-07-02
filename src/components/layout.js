import React from 'react'
import { node } from 'prop-types'

import Header from './Header'
import Footer from './Footer'

const Layout = ( { children } ) => (
  <div className="flex flex-col min-h-screen font-sans text-gray-900">

    <Header />

    <main className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
      {children}
    </main>

    <Footer />

  </div>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout

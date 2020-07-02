import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import errorPage from '../images/404.svg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div>
      <img
        className="m-auto"
        alt="Error 404"
        src={errorPage}
      />
    </div>
  </Layout>
)

export default NotFoundPage

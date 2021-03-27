/**
 * TypeChecking is basically disabled here because
 * We want different types of `meta` tags
 * Current types for `meta` are are not the best
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  description?: string,
  lang?: string,
  meta?: [],
  title: string,
}

const query = graphql`
  query SITE_METADATA_QUERY {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

const SEO = ( { description, lang = 'en', meta = [], title }: SeoProps ) => {
  const { site } = useStaticQuery<GatsbyTypes.SITE_METADATA_QUERYQuery>( query )

  const metaDescription = description || site?.siteMetadata?.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site?.siteMetadata?.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat( meta )}
    />
  )
}

export default SEO

// import { graphql, useStaticQuery } from 'gatsby'

// import { SiteSiteMetadata, Site_Metadata_QueryQuery } from '../graphqlTypes'

// const query = graphql`
//   query SITE_METADATA_QUERY {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// type MetadataReturnType = NonNullable<SiteSiteMetadata>

// const useSiteMetadata = () :MetadataReturnType => {
//   const { site } = useStaticQuery<Site_Metadata_QueryQuery>( query )
//   return site!.siteMetadata
// }

// export default useSiteMetadata

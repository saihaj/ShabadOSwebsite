import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import cx from 'classnames'
import navRoutes from '../nav.yml'

const Header = () => {
  const [ isExpanded, toggleExpansion ] = useState( false )

  const { site: { siteMetadata: { title } } } = useStaticQuery( graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  ` )

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 md:py-6 md:px-8">

        <Link
          to="/"
          className={cx(
            'flex items-center flex-shrink-0 px-4 py-1 mr-10',
            'text-white text-xl font-bold bg-pink-500',
            'tracking-tight no-underline',
          )}
        >
          {title}
        </Link>

        {/* Mobile Browsers menu button */}
        <div className="block md:hidden">

          <button
            type="button"
            className={cx(
              'flex items-center px-4 py-2 mr-2',
              'text-pink-500 hover:text-white hover:bg-pink-500',
              'border-transparent',
            )}
            onClick={() => toggleExpansion( !isExpanded )}
          >
            <svg
              className="w-6 h-6 fill-current font-bold"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

        </div>

        {/* Nav Items */}
        <div className={cx(
          `${isExpanded ? 'flex' : 'hidden'}`,
          'w-full flex-grow flex-col-reverse ',
          'md:flex md:flex-row md:items-center md:w-auto',
        )}
        >

          {/* Routes */}
          <div className="text-xl font-semibold mt-4 md:flex-grow md:mt-0">

            {navRoutes.map( ( { title, route } ) => (
              <Link
                key={title}
                to={route}
                className={cx(
                  'block md:inline-block no-underline',
                  'border-b pb-2 border-pink-500 md:border-0',
                  'mt-2 mr-6 ml-2 md:mt-0 md:ml-0',
                  'text-black hover:text-pink-500',
                )}
              >
                {title}
              </Link>
            ) )}

          </div>

          {/* Download Button */}
          <div className="text-center">
            <Link
              to="/download"
              className={cx(
                'inline-block no-underline text-xl leading-none px-4 py-3',
                'mt-4 ml-2 md:mt-0 md:ml-0',
                'font-bold text-pink-500 border border-pink-500',
                'hover:border-transparent hover:text-white hover:bg-pink-500',
              )}
            >
              Download
            </Link>
          </div>

        </div>

      </nav>
    </header>
  )
}

export default Header

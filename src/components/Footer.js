import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'
import { MarkGithubIcon } from '@primer/octicons-react'

const Footer = () => (
  <footer className="bg-pink-100">

    <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm">

      <p className="text-gray-500 font-light my-auto">
        © 2016 - {moment().format( 'YYYY' )} Shabad OS
      </p>

      <Link
        className="text-black"
        to="https://git.shabados.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MarkGithubIcon size="medium" />
      </Link>

    </nav>

  </footer>
)

export default Footer

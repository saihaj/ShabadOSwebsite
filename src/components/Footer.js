import React from 'react'
import moment from 'moment'
import { MarkGithubIcon } from '@primer/octicons-react'

const Footer = () => (
  <footer className="bg-pink-100">

    <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm">

      <p className="text-gray-500 font-light my-auto">
        © 2016 - {moment().format( 'YYYY' )} Shabad OS
      </p>

      <a
        className="text-black"
        href="https://git.shabados.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MarkGithubIcon size="medium" />
      </a>

    </nav>

  </footer>
)

export default Footer

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import { FaGithub, FaWindows, FaApple } from 'react-icons/fa'

import DownloadButton from '../components/DownloadButton'

import './index.css'

type GithubDownloadRes = {
  /**
  * Version name
  */
  name: string,
  downloads: {
    mac : {
      browser_download_url:string,
      size: number,
    },
    win : {
      browser_download_url:string,
      size: number,
    },
  },
}

const Home = () => {
  const [ data, setData ] = useState<GithubDownloadRes | null>( null )

  useEffect( () => {
    fetch( 'https://api.github.com/repos/shabados/desktop/releases/latest' )
      .then( ( res ) => res.json() )
      .then( ( { name, assets } ):GithubDownloadRes => {
        const filters = {
          mac: /^Shabad.OS-.*dmg$/,
          win: /^Shabad.OS-.*exe$/,
        }

        const downloads = Object
          .entries( filters )
          .reduce( ( urls, [ os, filter ] ) => ( {
            ...urls,
            [ os ]: assets.find( ( { name } ) => name.match( filter ) ),
          } ), {} )

        return { name, downloads }
      } )
      .then( ( res ) => setData( res ) )
      .catch( ( err ) => new Error( err ) )
  }, [] )

  return (
    <div className="body">

      <div className="header">
        <img alt="Shabad OS" src="/logo.png" />
        <h1>Shabad OS</h1>
      </div>

      <div className="intro">
        <p>The new Shabad OS is more simple, powerful, and accurate than ever.</p>
        <img alt="Search Examples" id="live-search-gif" src="img/live-search.gif" />
      </div>

      <p>With a continuously improving feature set:</p>

      <ul>
        <li>
          <label>Open Source</label>
          {' '}
          Bani/text publicly corrected with historical journaling
        </li>
        <li>
          <label>Unified</label>
          {' '}
          Multiple displays and multiple controllers, all in sync
        </li>
        <li>
          <label>Live Captions</label>
          {' '}
          Easy and elegant subtitling for live broadcasts
        </li>
        <li>
          <label>Auto Select</label>
          {' '}
          Smart logic assistant to switch between lines
        </li>
        <li>
          <label>InSight</label>
          {' '}
          Previous/next lines to follow along with confidence
        </li>
      </ul>

      <p>
        Learn more about Shabad OS with our
        <a href="https://tutorials.shabados.com/tutorials/1.0.0/home.html"> tutorials</a>
        !
      </p>

      {/* Download Buttons */}
      {data && (
        <div className="download" id="install">

          <DownloadButton
            label="Windows"
            platformIcon={FaWindows}
            downloadUrl={data.downloads.win.browser_download_url}
            semver={data.name}
            size={data.downloads?.win.size}
          />

          <DownloadButton
            label="macOS"
            platformIcon={FaApple}
            downloadUrl={data.downloads.mac.browser_download_url}
            semver={data.name}
            size={data.downloads?.mac.size}
          />

        </div>
      )}

      <p>
        Source code available at
        <a className="iconified" href="https://github.com/ShabadOS">
          <FaGithub className="github-octicon" />
          {' '}
          GitHub
        </a>
        .
      </p>

    </div>
  )
}

export default Home

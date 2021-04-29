/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import { FaGithub, FaWindows, FaApple } from 'react-icons/fa'
import { Endpoints } from '@octokit/types'

import DownloadButton from '../components/DownloadButton'
import Seo from '../components/Seo'

import './index.css'

type GithubLatestReleaseResponse = Endpoints['GET /repos/:owner/:repo/releases/latest']['response']['data']

type GithubDownloadResponse = {
  name: GithubLatestReleaseResponse['name'],
  downloads: {
    mac : GithubLatestReleaseResponse['assets'][0],
    win : GithubLatestReleaseResponse['assets'][0],
  },
}

const Home = () => {
  const [ githubResponse, setGithubResponse ] = useState<GithubDownloadResponse>()

  useEffect( () => {
    fetch( 'https://api.github.com/repos/shabados/desktop/releases/latest' )
      .then( ( res ) => res.json() )
      .then( ( { name, assets }:GithubLatestReleaseResponse ) => {
        const filters = {
          mac: /^Shabad.OS-.*dmg$/,
          win: /^Shabad.OS-.*exe$/,
        }

        const downloads = Object
          .entries( filters )
          .reduce( ( urls, [ os, filter ] ) => ( {
            ...urls,
            // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            [ os ]: assets.find( ( { name: platformName } ) => platformName.match( filter ) ),
          } ), {} )

        return { name, downloads } as GithubDownloadResponse
      } )
      .then( ( res ) => setGithubResponse( res ) )
      .catch( ( err ) => new Error( err ) )
  }, [] )

  return (
    <div className="body">
      <Seo title="Home" />
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
          &nbsp;
          Bani/text publicly corrected with historical journaling
        </li>
        <li>
          <label>Unified</label>
          &nbsp;
          Multiple displays and multiple controllers, all in sync
        </li>
        <li>
          <label>Live Captions</label>
          &nbsp;
          Easy and elegant subtitling for live broadcasts
        </li>
        <li>
          <label>Auto Select</label>
          &nbsp;
          Smart logic assistant to switch between lines
        </li>
        <li>
          <label>InSight</label>
          &nbsp;
          Previous/next lines to follow along with confidence
        </li>
      </ul>

      <p>
        Learn more about Shabad OS with our
        <a href="https://tutorials.shabados.com/tutorials/1.0.0/home.html"> tutorials</a>
        !
      </p>

      {/* Download Buttons */}
      {githubResponse && (
        <div className="download" id="install">

          <DownloadButton
            label="Windows"
            platformIcon={FaWindows}
            downloadUrl={githubResponse.downloads.win.browser_download_url}
            semver={githubResponse.name}
            size={githubResponse.downloads.win.size}
          />

          <DownloadButton
            label="macOS"
            platformIcon={FaApple}
            downloadUrl={githubResponse.downloads.mac.browser_download_url}
            semver={githubResponse.name}
            size={githubResponse.downloads.mac.size}
          />

        </div>
      )}

      <footer>
        <p>
          Source code available at
          &nbsp;
          <a className="iconified" href="https://github.com/ShabadOS">
            <FaGithub className="github-octicon" />
            GitHub
          </a>
          .
        </p>
        <a className="vercel" href="https://vercel.com/?utm_source=ShabadOS&utm_campaign=oss" target="_blank" rel="noreferrer">
          <img alt="Powered by Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
        </a>
      </footer>
    </div>
  )
}

export default Home

import React from 'react'
import { IconType } from 'react-icons'

type DownloadButtonProps = {
  platformIcon: IconType,
  label: string,
  downloadUrl: string,
  semver: string,
  size: number,
}

const DownloadButton = ( {
  label,
  platformIcon:
  Icon,
  downloadUrl,
  semver,
  size,
}:DownloadButtonProps ) => (
  <div>
    <a className="download-button" href={downloadUrl} id={`${label}-download`}>
      <div className="download-button">
        <span>Download</span>
        {' '}
        <span>
          <Icon />
          {' '}
          {label}
        </span>
      </div>
    </a>
    <div className="info">
      Version
      {' '}
      {semver}
      {' '}
      ❁
      {' '}
      {Math.round( size / 1000 / 1000 )}
      {' '}
      MB
    </div>
  </div>
)

export default DownloadButton

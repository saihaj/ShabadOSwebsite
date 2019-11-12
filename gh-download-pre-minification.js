fetch( 'https://api.github.com/repos/shabados/desktop/releases' )
.then( res => res.json() )
.then( releases => releases.find( ( { name } ) => name.includes('beta') ) )
.then( ( { name, assets } ) => {
const filters = {
  mac: /^Shabad.OS-.*dmg$/,
  win: /^Shabad.OS-.*exe$/
}

const downloads = Object.entries( filters ).reduce( ( urls,  [ os, filter ] ) => ( {
  ...urls,
  [ os ]: assets.find( ( { name } ) => name.match( filter ) )
} ), {} )

return { name, downloads }
} )
.then( ( { name, downloads } ) => {
// Add it to the DOM here
[...document.getElementsByClassName('download-version')].forEach(el => el.innerText = name)

document.getElementById( 'windows-download' ).setAttribute( 'href', downloads.win.browser_download_url )
document.getElementById( 'windows-download-size' ).innerText = Math.round( downloads.win.size / 1000 / 1000 )

document.getElementById( 'mac-download' ).setAttribute( 'href', downloads.mac.browser_download_url )
document.getElementById( 'mac-download-size' ).innerText = Math.round( downloads.mac.size / 1000 / 1000 )
} ) 
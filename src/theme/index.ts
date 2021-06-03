export enum Color {
  link = '#00a2d5',
  linkHover = '#0088bf',
  avaniPink = '#b71e61',
  avaniPurple = '#300519',
  avaniPaper = '#f6f3ef',
  white = '#ffffff',
  gray900 = '#faf8f7',
  black = '#000000',
  black200 = 'rgba(0,0,0,0.2)',
  aqua200 = 'rgba(0, 162, 213, .5)',
}

export const radialSplash = `radial-gradient(75vw 70vh at 50% 115%, ${Color.avaniPink}, ${Color.avaniPurple} 100%)`

export const focusRing = ( color = 'inherit', borderRadius = '0.5rem' ) => ( {
  '&:focus': {
    borderColor: Color.link,
    borderRadius,
    backgroundColor: Color.aqua200,
    color,
  },
} )

export const globalTheme = {
  '@global': {
    html: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      lineHeight: '1.6rem',
    },
    body: {
      fontSize: '0.875rem',
    },
    '*': {
      boxSizing: 'border-box',
    },
    '#gatsby-focus-wrapper': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      '& > main': {
        flexGrow: 1,
      },
    },
    a: {
      outlineStyle: 'none',
      outlineWidth: 0,
      fontWeight: 'bold',
      textDecoration: 'none',
      color: Color.link,
      '&:hover': {
        color: Color.linkHover,
      },
      ...focusRing( 'inherit', '0' ),
    },
  },
}

export enum Breakpoints {
  mobile = 480,
  tablet = 768,
  laptop = 1024,
}

export const widthMoreThan = ( width:number ) => `@media screen and (min-width: ${width}px)`

export const widthLessThan = ( width:number ) => `@media screen and (max-width: ${width - 1}px)`

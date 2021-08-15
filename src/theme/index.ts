export enum Color {
  Link = '#00a2d5',
  LinkHover = '#0088bf',
  AvaniPink = '#b71e61',
  AvaniPurple = '#300519',
  AvaniPaper = '#f6f3ef',
  White = '#ffffff',
  Gray900 = '#faf8f7',
  Black = '#000000',
  Black200 = 'rgba(0,0,0,0.2)',
  Aqua200 = 'rgba(0, 162, 213, .5)',
}

export const radialSplash = `radial-gradient(75vw 70vh at 50% 115%, ${Color.AvaniPink}, ${Color.AvaniPurple} 100%)`

export const focusRing = ( color = 'inherit', borderRadius = '0.5rem' ) => ( {
  '&:focus': {
    borderColor: Color.Link,
    borderRadius,
    backgroundColor: Color.Aqua200,
    color,
  },
} )

export const globalTheme = {
  '@global': {
    '*': {
      fontWeight: 'normal',
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      lineHeight: 1.5,
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
      textDecoration: 'none',
      color: Color.Link,
      '&:hover': {
        color: Color.LinkHover,
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

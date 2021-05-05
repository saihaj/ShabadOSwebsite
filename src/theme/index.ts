export enum Color {
  link = '#00a2d5',
  linkHover = '#0088bf',
  avaniPink = '#b71e61',
  avaniPurple = '#300519',
  avaniPaper = '#f6f3ef',
  white = '#ffffff',
  gray900 = '#faf8f7',
  black = '#000000',
}

export const radialSplash = `radial-gradient(75vw 100vh at 50% 115%, ${Color.avaniPink}, ${Color.avaniPurple} 100%)`

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
    a: {
      outlineStyle: 'none',
      outlineWidth: 0,
      fontWeight: 'bold',
      textDecoration: 'none',
      color: Color.link,
      '&:hover': {
        color: Color.linkHover,
      },
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

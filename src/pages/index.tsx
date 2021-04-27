import React from 'react'
import { createUseStyles } from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles( {
  myButton: {
    color: 'red',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem',
    },
  },

} )

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ( { children } ) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span>{children}</span>
    </button>

  )
}

const Home = () => (
  <main>
    <Button>Submit</Button>
    <a>sd</a>
  </main>
)

export default Home

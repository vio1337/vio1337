import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import './styles/App.css'

interface Props {classes: any}
interface State {}

const styles = createStyles({
  container: {
    minHeight: '100vh',
  }
})

class App extends Component<Props, State> {

  handleClick = () => {
    console.log('ive been clicked!')
  }

  render() { 
    const {classes} = this.props

    return (
      <Fragment>
        <div className={classes.container}>
          <h1>Hi, imma portfolio</h1>
          <a href="#about">go to section 1</a>
          <a href="#contact">got to section 2</a>
        </div>

        <div className={classes.container} id="about">
          <div>
            <h1>I'm the about section</h1>
          </div>
        </div>

        <div className={classes.container} id="contact">
          <div>
            <h1>I'm the contact section</h1>
          </div>
        </div>

      </Fragment>
    )

  }
}

export default withStyles(styles)(App)

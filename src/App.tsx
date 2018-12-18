import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import './styles/App.css'

import About from './components/About'
import Projs from './components/Projs'
import Articles from './components/Articles'

interface Props {classes: any}
interface State {}

const styles = createStyles({
  globalFont: {
    fontFamily: 'Crimson Text, serif',
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column wrap',
    textAlign: 'center',
  },
  container2: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
  },
  navSection:{
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '10px 0',
    position: 'fixed',
    width: '100%',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
  },
})

class App extends Component<Props, State> {

  render() { 
    const {classes} = this.props

    return (
      <div className={classes.globalFont}>

        <div className={classes.container} id="home">
          <div className={classes.navSection}>
            <a className={classes.navLink} href="#about">about</a>
            <a className={classes.navLink} href="#projects">projects</a>
            <a className={classes.navLink} href="#home"><img src={require("./styles/images/cresent.png")}/></a>
            <a className={classes.navLink} href="#articles">articles</a>
            <a className={classes.navLink} href="#contact">contact</a>
          </div>
        </div>

        <div className={classes.container2} id="about"><About/></div>
        <div className={classes.container2} id="projects"><Projs/></div>
        <div className={classes.container2} id="articles"><Articles/></div>
        <div className={classes.container2} id="contact"><h1>I'm the contact section</h1></div>

      </div>
    )
  }
}

export default withStyles(styles)(App)

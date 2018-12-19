import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import './styles/App.css'
import checkVisible from './utils/checkVisible'

import Home from './components/Home'
import About from './components/About'
import Projs from './components/Projs'
import Articles from './components/Articles'

interface Props {classes: any}
interface State {route:string}

const styles = createStyles({
  globalFont: {
    fontFamily: 'Roboto, sans-serif',
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
    padding: '20px 0',
    position: 'fixed',
    width: '100%',
  },
  navLink: {
    fontSize: '.9em',
    textDecoration: 'none',
    color: 'black',
  },
})

class App extends Component<Props, State> {

  state = {
    route: 'home'
  }

  homeSection: HTMLDivElement | null = null
  aboutSection: HTMLDivElement | null = null
  projectsSection: HTMLDivElement | null = null
  articlesSection: HTMLDivElement | null = null
  contactSection: HTMLDivElement | null = null

  componentDidMount() {
    setInterval(()=>{
     if (checkVisible(this.contactSection)) {
        this.setState({route: 'contact'}) 
      } else if (checkVisible(this.articlesSection, 400)) { 
        this.setState({route: 'articles'}) 
      } else if (checkVisible(this.projectsSection, 400)) { 
        this.setState({route: 'projects'}) 
      } else if (checkVisible(this.aboutSection, 400)) { 
        this.setState({route: 'about'}) 
      } else if (checkVisible(this.homeSection, 400)) { 
        this.setState({route: 'home'})
      }
    }, 300)
  }

  handleRoute = (route:string) => this.setState({route})

  underline = (section:string) => this.state.route === section ? '1px solid' : 'none'

  render() { 
    const {classes} = this.props
    return (
      <div className={classes.globalFont}>

        <div className={classes.container} ref={home=> this.homeSection = home} id="home">
          <Home/>
          <div className={classes.navSection} style={this.state.route === 'home' ? {display: 'none'} : {}}>
            <a className={classes.navLink} style={{borderBottom: this.underline('about')}} href="#about">about</a>
            <a className={classes.navLink} style={{borderBottom: this.underline('projects')}} href="#projects">projects</a>
            <a className={classes.navLink} style={{borderBottom: this.underline('home')}} href="#home"><img src={require("./styles/images/cresent.png")}/></a>
            <a className={classes.navLink} style={{borderBottom: this.underline('articles')}} href="#articles">articles</a>
            <a className={classes.navLink} style={{borderBottom: this.underline('contact')}} href="#contact">contact</a>
          </div>
        </div>

        <div className={classes.container2} ref={about=> this.aboutSection = about} id="about"><About/></div>
        <div className={classes.container2} ref={projects=> this.projectsSection = projects} id="projects"><Projs/></div>
        <div className={classes.container2} ref={articles=> this.articlesSection = articles} id="articles"><Articles/></div>
        <div className={classes.container2} ref={contact=> this.contactSection = contact} id="contact"><h1>I'm the contact section</h1></div>

      </div>
    )
  }
}

export default withStyles(styles)(App)

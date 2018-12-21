import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Media from 'react-media'
import './styles/App.css'
import checkVisible from './utils/checkVisible'

import Home from './components/desktop/Home'
import About from './components/desktop/About'
import Projs from './components/desktop/Projs'
import Articles from './components/desktop/Articles'
import Contact from './components/desktop/Contact'

import InnerDrawer from './components/mobile/InnerDrawer'
import About1130 from './components/mobile/About1130'
import Articles1130 from './components/mobile/Articles1130'
import Contact1130 from './components/mobile/Contact1130'

import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

interface Props {classes: any}
interface State {route:string, drawer:boolean}

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
    alignItems: 'center',
    overflow: 'hidden',
  },
  navMenu: {
    position: 'fixed',
    width: '100%',
    textAlign: 'right',
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
  drawer: {
    zIndex: 3,
    backgroundColor: 'black',
    width: 180,
  }
})

class App extends Component<Props, State> {

  state = {
    route: 'home',
    drawer: false
  }

  homeSection: HTMLDivElement | null = null
  aboutSection: HTMLDivElement | null = null
  projectsSection: HTMLDivElement | null = null
  articlesSection: HTMLDivElement | null = null
  contactSection: HTMLDivElement | null = null

  componentDidMount() {
    // setInterval(()=>{
    //  if (checkVisible(this.contactSection)) {
    //     this.setState({route: 'contact'}) 
    //   } else if (checkVisible(this.articlesSection, 400)) { 
    //     this.setState({route: 'articles'}) 
    //   } else if (checkVisible(this.projectsSection, 400)) { 
    //     this.setState({route: 'projects'}) 
    //   } else if (checkVisible(this.aboutSection, 400)) { 
    //     this.setState({route: 'about'}) 
    //   } else if (checkVisible(this.homeSection, 400)) { 
    //     this.setState({route: 'home'})
    //   }
    // }, 300)
  }

  handleRoute = (route:string) => this.setState({route})

  underline = (section:string) => this.state.route === section ? '1px solid' : 'none'

  renderNav = () => {
    const {classes} = this.props
    return (
      <Fragment>
        <a className={classes.navLink} style={{borderBottom: this.underline('about')}} href="#about">about</a>
        <a className={classes.navLink} style={{borderBottom: this.underline('projects')}} href="#projects">projects</a>
        <a className={classes.navLink} style={{borderBottom: this.underline('home')}} href="#home"><img src={require("./styles/images/cresent.png")}/></a>
        <a className={classes.navLink} style={{borderBottom: this.underline('articles')}} href="#articles">articles</a>
        <a className={classes.navLink} style={{borderBottom: this.underline('contact')}} href="#contact">contact</a>
      </Fragment>
    )
  }

  handleDrawer = () => this.setState({drawer: !this.state.drawer})

  render() { 
    const {classes} = this.props
    return (
        <div className={classes.globalFont}>
          <Media query='(max-width: 1130px)'>
            {matches => matches ?  
              <Fragment>

                <div className={classes.navMenu} onClick={this.handleDrawer}><IconButton><MenuIcon/></IconButton></div>
                <Drawer open={this.state.drawer} variant='persistent' anchor='right' classes={{paper: classes.drawer}}>
                  <InnerDrawer nav={this.renderNav()} handleDrawer={this.handleDrawer}/>
                </Drawer>

                <div className={classes.contentContainer}>
                   <div className={classes.container} ref={home=> this.homeSection = home} id="home"><Home/></div>
                   <div className={classes.container2} ref={about=> this.aboutSection = about} id="about"><About1130/></div>
                   <div className={classes.container2} ref={projects=> this.projectsSection = projects} id="projects"><Projs/></div>
                   <div className={classes.container2} ref={articles=> this.articlesSection = articles} id="articles"><Articles1130/></div>
                   <div className={classes.container2} ref={contact=> this.contactSection = contact} id="contact"><Contact1130/></div>   
                </div>

              </Fragment>
              :
              <Fragment>

                <div className={classes.container} ref={home=> this.homeSection = home} id="home"><Home/>
                  <div className={classes.navSection} style={this.state.route === 'home' ? {display: 'none'} : {}}>{this.renderNav()}</div>
                </div>
                <div className={classes.container2} ref={about=> this.aboutSection = about} id="about"><About/></div>
                <div className={classes.container2} ref={projects=> this.projectsSection = projects} id="projects"><Projs/></div>
                <div className={classes.container2} ref={articles=> this.articlesSection = articles} id="articles"><Articles/></div>
                <div className={classes.container2} ref={contact=> this.contactSection = contact} id="contact"><Contact/></div>
              
              </Fragment>
            }
          </Media>
      </div>
    )
  }
}

export default withStyles(styles)(App)

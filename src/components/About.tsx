import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	aboutSection: {
		display: 'flex',
	    flexFlow: 'row wrap',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		zIndex: 2,
	},
	bioSection: {
		width: '30%',
		textAlign: 'left',
	},
	bioTitle: {
		fontSize: '1.5em',
		fontFamily: 'Roboto, sans-serif',
		letterSpacing: 1.5,
		fontWeight: 600,
		paddingBottom: 10,
	},
	headshot: {
		height: 300,
		width: 300,
	},
	colorBlockImg: {
	    backgroundColor: 'cadetblue',
	    height: 150,
	    margin: '-80px -40px 0px 100px',
	    mixBlendMode: 'multiply',
	},
	colorBlockBio: {
	    height: 150,
	   	width: 200,
	    backgroundColor: 'lightgoldenrodyellow',
	    margin: '0px 0px -100px 300px',
	    mixBlendMode: 'multiply',
	},
	divSkewTop: {
	    transform: 'skewY(2deg)',
	    backgroundColor: 'aliceblue',
        height: 150,
	    marginBottom: '-40px',
	    zIndex: 1,
	},
	divSkewBottom: {
	    transform: 'skewY(2deg)',
	    backgroundColor: 'aliceblue',
        height: 150,
	    marginTop: '-40px',
	    zIndex: 1,
	},
	btn: {
	    borderRadius: 0,
	    marginRight: 20,
	    marginTop: 10,
	}
})

class About extends Component<Props, State> {


	render() {
		const {classes} = this.props
		return (
			<Fragment>
				{/*<div className={classes.divSkewTop}></div>*/}
				<div className={classes.aboutSection}>
				
					<div className={classes.imgSection}>
						<Fragment>
							<img className={classes.headshot} src='https://avatars0.githubusercontent.com/u/40186534?s=460&v=4'/>
							<div className={classes.colorBlockImg}></div>
						</Fragment>
					</div>
					<div className={classes.bioSection}>
					<div className={classes.colorBlockBio}></div>
						<div className={classes.bioTitle}>Violet Moon</div>
						<p style={{lineHeight: '180%', fontSize: '.9em', paddingBottom: 10}}>
						As a fullstack developer and healing advocate, developing technology that empowers the individual defines the intersection of my passion and talent. I have strong experience working with front-end frameworks and Ruby based programming — and contribute a diverse background in digital marketing strategy. Through ambition, empathy, and acumen, my greatest work manifests when supporting mission-driven companies to expand their impact.
						</p>
						<div>
							<Button className={classes.btn} href={'#projects'} style={{backgroundColor: 'lightsalmon'}}>View Projects</Button>
							<Button className={classes.btn} href={'#contact'} style={{backgroundColor: 'aliceblue'}}>Work With Me</Button>
						</div>	
					</div>
				</div>
				{/*<div className={classes.divSkewBottom}></div>*/}
			</Fragment>
		)
	}
}

export default withStyles(styles)(About)
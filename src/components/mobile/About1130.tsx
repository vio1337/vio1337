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
		width: '100%',
		textAlign: 'left',
		padding: '0 20px 0 40px',
	},
	bioTitle: {
		fontSize: '1.5em',
		fontFamily: 'Roboto, sans-serif',
		letterSpacing: 8,
		fontWeight: 600,
		padding: '15px 0 5px',
	},
	headshot: {
		marginTop: 40,
		height: 250,
		width: 250,
	},
	colorBlockImg: {
	    backgroundColor: 'cadetblue',
	    height: 100,
	    margin: '-70px -40px 0px 100px',
	    mixBlendMode: 'multiply',
	},
	colorBlockBio: {
	    height: 175,
	   	width: 200,
	    backgroundColor: 'lightgoldenrodyellow',
        margin: '-70px -44px -100px -44px',
	    mixBlendMode: 'multiply',
	},
	btn: {
	    borderRadius: 0,
	    marginRight: 20,
	    marginTop: 10,
	}
})

class About1130 extends Component<Props, State> {


	render() {
		const {classes} = this.props
		return (
			<Fragment>
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
						As a fullstack developer and healing advocate, developing technology that empowers the individual defines the intersection of my passion and talent. I have strong experience working with front-end frameworks and Ruby based programming — and contribute a diverse background in digital marketing strategy. Through ambition, empathy and acumen, my greatest work manifests when supporting mission-driven companies to expand their impact.
						</p>
						<div style={{marginBottom: 40}}>
							<Button className={classes.btn} href={'#projects'} style={{backgroundColor: 'lightsalmon'}}>View Projects</Button>
							<Button className={classes.btn} href={'#contact'} style={{backgroundColor: 'aliceblue'}}>Work With Me</Button>
						</div>	
					</div>
				</div>
			</Fragment>
		)
	}
}

export default withStyles(styles)(About1130)
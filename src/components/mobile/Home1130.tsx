import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	homeContainer: {
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
		alignItems: 'center',
	  	height: '100vh',
	    backgroundImage: 'url("https://media.giphy.com/media/g6HhfNmgSCjqU/giphy.gif")',
	    backgroundRepeat: 'no-repeat',
	},
	nameContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: '9em',
		marginTop: '-30px',
	},
	img: {
		height: 108,
		marginLeft: 5,
	},
	blurb: {
		color: 'rgba(0,0,0,.3)',
		fontSize: '1.2em',
		letterSpacing: 3,
		padding: '0 40px 10px',
	},
	btn: {
		marginTop: 30,
		border: '1px solid rgba(0,0,0,.2)',
	},
	opacity: {
		height: '100vh',
		backgroundColor: 'rgba(255,255,255,.8)',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
		alignItems: 'center',
	}
})

class Home1130 extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<Fragment>
				<div className={classes.homeContainer}>
					<div className={classes.opacity}>
						<div className={classes.nameContainer}>
							<div style={{fontSize: '9em'}}>VI</div>
							<img id='img' className={classes.img} src={require('../../styles/images/circle.png')}/>
							<div className={classes.title}>LET</div>
						</div>
						<div className={classes.blurb}>curiousity-driven full stack web developer</div>
						<div className={classes.nameContainer}>
							<Button href="#about" className={classes.btn} style={{marginRight: 20}}>Learn More</Button>
							<Button href="#projects" className={classes.btn}>View Projects</Button>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default withStyles(styles)(Home1130)
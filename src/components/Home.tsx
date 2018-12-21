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
	    margin: '-175px 0 0 275px',
	},
	nameContainer: {
		display: 'flex',
		flexFlow: 'row nowrap',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	title: {
		fontSize: '10em',
		textAlign: 'left',
		padding: 10,
	},
	blurb: {
		color: 'rgba(0,0,0,.3)',
		fontSize: '1.2em',
		backgroundColor: 'white',
		letterSpacing: 3,
	},
	btn: {
		marginTop: 30,
		border: '1px solid rgba(0,0,0,.2)',
	}
})

class Home extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<Fragment>
				<img src='https://media.giphy.com/media/g6HhfNmgSCjqU/giphy.gif' style={{width: 550, height: 'auto'}}/>
				<div className={classes.homeContainer}>	
					<div className={classes.nameContainer}>
						<div className={classes.title}>VI</div>
						<img className='img' src={require('../styles/images/circle.png')}/>
						<div className={classes.title}>LET</div>
					</div>
					<div className={classes.blurb}>curiousity-driven full stack web developer</div>
					<div className={classes.nameContainer}>
						<Button href="#about" className={classes.btn} style={{marginRight: 20}}>Learn More</Button>
						<Button href="#projects" className={classes.btn}>View Projects</Button>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default withStyles(styles)(Home)
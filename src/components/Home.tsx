import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

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
	}
})

class Home extends Component<Props, State> {

	render() {
		const {classes} = this.props
		return (
			<div className={classes.homeContainer}>
				<div style={{textAlign: 'center'}}>
					<div className={classes.nameContainer}>
						<div className={classes.title}>VI</div>
						<img className={classes.img} src={require('../styles/images/circle.png')}/>
						<div className={classes.title}>LET</div>
					</div>
					<div className={classes.blurb}>curiousity-driven full stack web developer</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Home)
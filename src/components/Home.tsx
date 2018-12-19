import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	homeContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	nameContainer: {
		display: 'flex',
		flexFlow: 'row nowrap',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Roboto',
		fontSize: '10em',
		textAlign: 'left',
		padding: 10,
	}
})

class Home extends Component<Props, State> {

	render() {
		const {classes} = this.props
		return (
			<div className={classes.homeContainer}>
				<div className={classes.nameContainer}>
					<div className={classes.title}>VI</div>
					<img className={classes.img} src={require('../styles/images/circle.png')}/>
					<div className={classes.title}>LET</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Home)
import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	contactContainer: {
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'center',
		margin: '-100px 0 100px',
	},
	contactIcons: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,
		margin: '0 150px',
	},
	link: {
		textDecoration: 'none',
		fontSize: '2em',
		fontWeight: 600,
		color: 'black',
		padding: 20,
	},
	colorBlock1: {
		height: 200,
    	width: 300,
	    backgroundColor: 'rgba(255, 160, 122, .6)',
	    zIndex: 1,
	    margin: '0 300px -280px 0',
	},
	colorBlock2: {
	    height: 150,
	    width: 300,
	    backgroundColor: 'lightgoldenrodyellow',
	},
	colorBlock3: {
	    height: 100,
	    width: 300,
	    backgroundColor: 'cadetblue',
	    margin: '10px 0 -20px 50px',
	},
	colorBlock4: {
	    height: 300,
    	width: 150,
    	backgroundColor: 'aliceblue',
    	margin: '-270px -70px'
	},
})

class Contact1130 extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.contactContainer}>
				<div className={classes.colorBlock1}></div>
				<div className={classes.colorBlock2}></div>
				<div className={classes.contactIcons}>
					<a className={classes.link} href="mailto:violet.wmoon@gmail.com"><img src={require('../../styles/images/mail.png')}/></a>
					<a className={classes.link} href="https://github.com/vio1337"><img src={require('../../styles/images/github.png')}/></a>
					<a className={classes.link} href="https://medium.com/@violetmoon"><img src={require('../../styles/images/medium.png')}/></a>
					<a className={classes.link} href="https://linkedin.com/in/violetmoon"><img src={require('../../styles/images/linkedin.png')}/></a>
				</div>
				<div className={classes.colorBlock3}></div>
				<div className={classes.colorBlock4}></div>
			</div>
		)
	}
}

export default withStyles(styles)(Contact1130)
import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	contactContainer: {
		diplay: 'flex',
		flowFlow: 'row wrap',
		alignItems: 'center',
		zIndex: 2,
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
	    margin: '0 300px -80px 0',
	},
	colorBlock2: {
	    height: 150,
	    width: 300,
	    backgroundColor: 'lightgoldenrodyellow',
	    margin: '-216px 0 40px 508px',
	},
	colorBlock3: {
	    height: 250,
	    width: 420,
	    backgroundColor: 'cadetblue',
	    margin: '200px 0 -440px -900px',
	},
	colorBlock4: {
	    height: 300,
    	width: 150,
    	backgroundColor: 'aliceblue',
	},
})

class Contact extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<Fragment>
			<div className={classes.colorBlock1}></div>
			<div className={classes.colorBlock2}></div>
			<div className={classes.contactContainer}>
				<a className={classes.link} href="mailto:violet.wmoon@gmail.com"><img src={require('../styles/images/mail.png')}/></a>
				<a className={classes.link} href="https://github.com/vio1337"><img src={require('../styles/images/github.png')}/></a>
				<a className={classes.link} href="https://medium.com/@violetmoon"><img src={require('../styles/images/medium.png')}/></a>
				<a className={classes.link} href="https://linkedin.com/in/violetmoon"><img src={require('../styles/images/linkedin.png')}/></a>
			</div>
			<div className={classes.colorBlock3}></div>
			<div className={classes.colorBlock4}></div>
			</Fragment>
		)
	}
}

export default withStyles(styles)(Contact)
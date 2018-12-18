import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class ProjCard extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div>
			</div>
		)
	}
}

export default withStyles(styles)(ProjCard)
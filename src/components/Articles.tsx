import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import { articles } from '../List' 

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class Articles extends Component<Props, State> {
	render() {
		const {classes} = this.props
		console.log(articles)
		return (
			<div>
			</div>
		)
	}
}

export default withStyles(styles)(Articles)
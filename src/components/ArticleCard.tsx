import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any, img:string, link:string, title:string}
interface State {}

const styles = createStyles({

})

class ArticleCard extends Component<Props, State> {
	render() {
		const {classes, img, link, title} = this.props
		return (
			<div>
				
			</div>
		)
	}
}

export default withStyles(styles)(ArticleCard)
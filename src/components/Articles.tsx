import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import { articles } from '../List'
import ArticleCard from './ArticleCard'


interface Props {classes: any}
interface State {}

const styles = createStyles({
	cardContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
	},
})

class Articles extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.cardContainer}>
				{Object.keys(articles).map((a, i)=> {
					return <ArticleCard key={i} img={articles[a].img} title={a} link={articles[a].link}/>
				})}
			</div>
		)
	}
}

export default withStyles(styles)(Articles)
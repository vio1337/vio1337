import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import { articles } from '../List'
import ArticleCard from './ArticleCard'


interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class Articles extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div>
			{Object.keys(articles).map((a, i)=> {
				console.log(articles[a].img)
				return <ArticleCard key={i} img={articles[a].img} title={a} link={articles[a].link}/>
			})}
			</div>
		)
	}
}

export default withStyles(styles)(Articles)
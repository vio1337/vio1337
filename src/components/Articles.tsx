import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import { articles } from '../List'
import ArticleCard from './ArticleCard'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'


interface Props {classes: any}
interface State {}

const styles = createStyles({
	cardContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
    	width: '60%',
    	height: '60%',
  	},
  	titleBar: {
    	background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
})

class Articles extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.cardContainer}>
				<GridList cellHeight={250} className={classes.gridList} cols={4}>
					{Object.keys(articles).map((a, i)=> (
						<GridListTile key={i} cols={articles[a].cols || 1}>
							<a href={articles[a].link}>
					            <img src={articles[a].img} alt={a} />
					            <GridListTileBar
					              title={a}
					              classes={{root: classes.titleBar, title: classes.title}}
					              actionIcon={<IconButton><InfoIcon style={{fill: 'rgba(255,255,255,.4)'}}/></IconButton>}
					            />
					        </a>
				        </GridListTile>
					))}
				</GridList>
			</div>
		)
	}
}

export default withStyles(styles)(Articles)

// return <ArticleCard key={i} img={articles[a].img} title={a} link={articles[a].link}/>
import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

interface Props {classes: any, img: string, title: string, desc:string, link1:string, link2:string}
interface State {}

const styles = createStyles({
	card: {
		margin: 40,
		width: 275,
		display: 'flex',
		flexFlow: 'column wrap',
	},
	img: {
		height: 175,
		filter: 'grayscale(100%)',
	},
	title: {
		fontSize: '1em',
		fontFamily: 'Roboto, sans-serif',
		letterSpacing: 1.5,
		fontWeight: 600,
		paddingTop: 10,
	},
	actionRow: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'center',
		backgroundColor: 'lightgoldenrodyellow',
	},
})

class ProjCard extends Component<Props, State> {

	displayText = (desc:string) => {
		const { link1 } = this.props
		if (link1.includes('medium')) {
			return 'medium'
		} else if (link1.includes('youtube')) {
			return 'view'
		} else {
			return 'demo'
		}
	}

	render() {
		const { title, img, desc, link1, link2, classes } = this.props
		return (
			<Card className={classes.card}>

				<CardMedia className={classes.img} image={img}/>

				<CardContent style={{paddingBottom: 0}}>
					<div className={classes.title}>{title}</div>
					<p>{desc}</p>
				</CardContent>
				
				<div className={classes.actionRow}>
					<CardActions>
						<Button href={link1}>{this.displayText(desc)}</Button>
					</CardActions>

					<CardActions>
						<Button href={link2}>Github</Button>
					</CardActions>
				</div>
				
			</Card>
		)
	}
}

export default withStyles(styles)(ProjCard)
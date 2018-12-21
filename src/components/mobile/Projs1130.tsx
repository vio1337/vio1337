import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import { projs } from '../../List' 
import ProjCard1130 from './ProjCard1130'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	cardContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
	},
})

class Projs1130 extends Component<Props, State> {

	render() {
		const {classes} = this.props
		return (
			<div className={classes.cardContainer}>
				{Object.keys(projs).map((p, i)=> {
					return <ProjCard1130 key={i} img={projs[p].img} title={p} desc={projs[p].desc} link1={projs[p].link1} link2={projs[p].link2} />
				})}
			</div>
		)
	}
}

export default withStyles(styles)(Projs1130)
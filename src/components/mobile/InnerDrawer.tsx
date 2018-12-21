import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

interface Props {classes: any, theme:any, nav:JSX.Element}
interface State {}

const styles = (theme:Theme) => createStyles({
	navLink: {
	    fontSize: '.9em',
	    textDecoration: 'none',
	    color: 'white',
  },
})

class InnerDrawer extends Component<Props, State> {
	render() {
		const {classes, theme, nav} = this.props
	    return (
	      <Fragment>
	        <div className={classes.drawerHeader}>
	          <IconButton >{theme.direction === 'rtl' ? <ChevronLeftIcon style={{fill: 'white'}}/> : <ChevronRightIcon style={{fill: 'white'}}/>}</IconButton>
	        </div>
	        <List>
	        	{nav.props.children.map((a:any, i:number)=> {
	        		return (
			          <ListItem key={i}>
			          	<a href={a.props.href} className={classes.navLink}><ListItemText disableTypography style={{color: 'white'}}primary={a.props.children}/></a>
			          </ListItem>
	        		)
	        	})

	        	}
	        </List>
	      </Fragment>
	    )
	}
}

export default withStyles(styles, {withTheme: true})(InnerDrawer)
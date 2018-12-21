import React, { Component, Fragment } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

interface Props {classes: any, theme:any, nav:JSX.Element, handleDrawer:()=>void}
interface State {}

const styles = (theme:Theme) => createStyles({
	list: {
		paddingLeft: 30,
	},
	navLink: {
	    fontSize: '1em',
	    textDecoration: 'none',
	    paddingTop: 10,
	    paddingBottom: 10,
	},
})

class InnerDrawer extends Component<Props, State> {
	render() {
		const {classes, theme, nav, handleDrawer} = this.props
		console.log(nav.props.children)
	    return (
	      <Fragment>
	        <div className={classes.drawerHeader} onClick={handleDrawer}>
	          <IconButton><ChevronLeftIcon style={{fill: 'white'}}/></IconButton>
	        </div>
	        <List className={classes.list}>
	        	{nav.props.children.map((a:any, i:number)=> {
	        		if (a.props.children.type === 'img') {
	        			return (
			        		<ListItem key={i}>
			        			<a href="#home"><img src={require('../../styles/images/white-cresent.png')} /></a>
			        		</ListItem>
	        			)
	        		} else {
	        			return (
				  	        <ListItem key={i}>
				    	      	<a href={a.props.href} className={classes.navLink}>
				    	      		<ListItemText disableTypography style={{color: 'white'}} primary={a.props.children}/>
				    	      	</a>
					        </ListItem>
	        			)
	        		}
	        	})

	        	}
	        </List>
	      </Fragment>
	    )
	}
}

export default withStyles(styles, {withTheme: true})(InnerDrawer)
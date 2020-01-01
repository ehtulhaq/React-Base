// @flow
/**
 * @author [Ehtesham Ul Haq]
 */

import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Navigation } from "../../components"
import { Grid } from "@material-ui/core"
import "../../assets/css/reset.css"

type Props = {
	children: React.ChildrenArray<any>
}
function BasePage(props: Props) {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary
		}
	}))
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid>
				<Navigation />
				{props.children}
			</Grid>
		</div>
	)
}

export default BasePage

// @flow
/**
 * @author [Ehtesham Ul Haq]
 */

import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ErrorNotFound, HomePage } from "../pages"

function ApplicationRoutes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route component={ErrorNotFound} />
			</Switch>
		</Router>
	)
}

export default ApplicationRoutes

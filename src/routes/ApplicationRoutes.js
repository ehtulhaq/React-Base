import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ErrorNotFound,
  HomePage
} from '../pages'

/**
 * 
 * @author [Ehtesham Ul Haq]
 * 
 */
function ApplicationRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  )
}

export default ApplicationRoutes

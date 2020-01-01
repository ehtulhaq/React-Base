import React from 'react'
import { Navigation } from '../../components'
import '../../assets/css/reset.css'
/**
 * 
 * @author [Ehtesham Ul Haq]
 * 
 */
function ErrorBasePage(props) {
  return (
    <React.Fragment>
      <Navigation />
      {props.children}
    </React.Fragment>
  )
}

export default ErrorBasePage
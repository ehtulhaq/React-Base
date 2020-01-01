import React from 'react'
import { Navigation } from '../../components'
import '../../assets/css/reset.css'
/**
 * 
 * @author [Ehtesham Ul Haq]
 * 
 */
function BasePage(props) {
  return (
    <section>
      <Navigation />
      {props.children}
    </section>
  )
}

export default BasePage
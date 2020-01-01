// @flow
/**
 * @author [Ehtesham Ul Haq]
 */

import * as React from "react"
import { Navigation } from "../../components"
import "../../assets/css/reset.css"

type Props = {
	children: React.ChildrenArray<any>
}
function BasePage(props: Props) {
	return (
		<section>
			<Navigation />
			{props.children}
		</section>
	)
}

export default BasePage

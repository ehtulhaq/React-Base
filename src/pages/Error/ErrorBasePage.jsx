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
function ErrorBasePage(props: Props) {
	return (
		<React.Fragment>
			<Navigation />
			{props.children}
		</React.Fragment>
	)
}

export default ErrorBasePage
